import { CountryDto } from './../DTOs/country.dto';
import { IndustryTypeDto } from './../DTOs/industryType.dto';
import { CompanyDto } from './../DTOs/company.dto';
import { CompaniesPaginationDto } from './../DTOs/companies-pagination.dto';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) { }

  // List Companies
  async listCompanies(): Promise<CompaniesPaginationDto> {
    return {} as CompaniesPaginationDto;
  }

  // Get Company
  async getCompany(companyId: number): Promise<CompanyDto> {
    return {} as CompanyDto;
  }

  // Get Industry Types
  async getIndustryTypes(): Promise<IndustryTypeDto[]> {
    return [] as IndustryTypeDto[];
  }

  // Get Countries
  async getCountries(): Promise<CountryDto[]> {
    return [] as CountryDto[];
  }

  // Create Company
  async createCompany(companyObject: CompanyDto): Promise<CompanyDto> {
    return {} as CompanyDto;
  }

  // Update Comppany
  async updateCompany(companyId: number, companyObject: Partial<CompanyDto>): Promise<CompanyDto> {
    return {} as CompanyDto;
  }
}
