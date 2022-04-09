import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { CountryDto } from './../DTOs/country.dto';
import { IndustryTypeDto } from './../DTOs/industryType.dto';
import { CompanyDto } from './../DTOs/company.dto';
import { CompaniesPaginationDto } from './../DTOs/companies-pagination.dto';
import { PrismaService } from './../prisma.service';
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { generateCode } from 'src/utils/helperFunctions';
import { Prisma } from '@prisma/client'

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) { }

  // Get Industry Types
  async getIndustryTypes(): Promise<IndustryTypeDto[]> {
    try {
      return await this.prisma.industryType.findMany();
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get Countries
  async getCountries(): Promise<CountryDto[]> {
    try {
      return await this.prisma.country.findMany({
        include: {
          Cities: true
        }
      })
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // List Companies
  async listCompanies(keyword: string): Promise<CompaniesPaginationDto> {
    try {
      // Find Companies Conditions
      const findCompaniesWhereConditions: Prisma.CompanyWhereInput = {
        name: {
          contains: keyword,
          mode: 'insensitive'
        },
        isActive: true
      }

      // Company Count
      const companyCount: number = await this.prisma.company.count({
        where: findCompaniesWhereConditions
      })

      // Company Data
      const companies: CompanyDto[] = await this.prisma.company.findMany({
        where: findCompaniesWhereConditions,
        include: {
          industry_type: true,
          country: true,
          city: true
        },
        orderBy: [{ name: 'asc' }]
      })

      return {
        count: companyCount,
        data: companies
      };
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Get Company
  async getCompany(companyCode: string): Promise<CompanyDto> {
    try {
      return await this.prisma.company.findFirst({ where: { code: companyCode } });
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Create Company
  async createCompany(companyObject: CompanyDto): Promise<CompanyDto> {
    try {
      // Validate company
      companyObject = await this.validateCompanyModel(companyObject, false);

      // Check company name uniqueness
      let isCompanyExist = await this.prisma.company.findFirst({
        where: {
          name: companyObject.name,
          isActive: true
        }
      });
      if (isCompanyExist) throw new HttpException('Company already exists, change company name', HttpStatus.BAD_REQUEST);

      // Destruct company
      const { id, industry_type_id, country_id, city_id, ...leanCompany } = companyObject;

      // Check existence of country, city and industry type
      await this.checkUtilitiesExist(country_id, city_id, industry_type_id);

      // Add the company
      const company: CompanyDto = await this.prisma.company.create({
        data: {
          ...leanCompany,
          code: generateCode('CO'),
          industry_type: {
            connect: { id: industry_type_id }
          },
          country: {
            connect: { id: country_id }
          },
          city: {
            connect: { id: city_id }
          }
        }
      })

      return company;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Update Comppany
  async updateCompany(companyCode: string, companyObject: Partial<CompanyDto>): Promise<CompanyDto> {
    try {
      // Validate company
      companyObject = await this.validateCompanyModel(companyObject, true);

      // Destruct company
      const { id, industry_type_id, country_id, city_id, ...leanCompany } = companyObject;

      // Check company name uniqueness
      let isCompanyExist = await this.prisma.company.findFirst({
        where: {
          name: companyObject.name,
          isActive: true
        }
      });
      if (isCompanyExist && isCompanyExist.code !== companyCode) throw new HttpException('Company already exists, change company name', HttpStatus.BAD_REQUEST);

      // Check existence of country, city and industry type
      await this.checkUtilitiesExist(country_id, city_id, industry_type_id);

      // Update Company
      const updatedCompany = await this.prisma.company.update({
        where: { code: companyCode },
        data: {
          ...leanCompany,
          industry_type: {
            connect: { id: industry_type_id }
          },
          country: {
            connect: { id: country_id }
          },
          city: {
            connect: { id: city_id }
          }
        }
      })

      return updatedCompany;
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Delete Company
  async deleteCompany(companyCode: string): Promise<CompanyDto> {
    // Update Company
    const updatedCompany = await this.prisma.company.update({
      where: { code: companyCode },
      data: { isActive: false }
    })

    return updatedCompany;
  }

  // Check existence of Country, City and Industry Type
  async checkUtilitiesExist(country_id: number, city_id: number, industry_type_id: number) {
    // Check country
    let isCountryExist = await this.prisma.country.findFirst({
      where: { id: country_id }
    })
    if (!isCountryExist) throw new HttpException('Country not found', HttpStatus.BAD_REQUEST);

    // Check city
    let isCityExist = await this.prisma.city.findFirst({
      where: { id: city_id, country_id }
    })
    if (!isCityExist) throw new HttpException('City not found', HttpStatus.BAD_REQUEST);

    // Check industry type
    let isIndustryTypeExist = await this.prisma.industryType.findFirst({
      where: { id: industry_type_id }
    })
    if (!isIndustryTypeExist) throw new HttpException('Industry Type not found', HttpStatus.BAD_REQUEST);
  }

  // Validate company model
  async validateCompanyModel(companyObject: CompanyDto | Partial<CompanyDto>, skipMissingProperties: boolean): Promise<CompanyDto> {
    // Convert object to dto class
    companyObject = plainToClass(CompanyDto, companyObject);

    // Validate company
    await validateOrReject(companyObject, {
      skipMissingProperties
    });

    return companyObject as CompanyDto;
  }
}
