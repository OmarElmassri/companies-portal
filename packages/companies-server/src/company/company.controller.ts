import { CountryDto } from './../DTOs/country.dto';
import { IndustryTypeDto } from './../DTOs/industryType.dto';
import { CompanyDto } from './../DTOs/company.dto';
import { CompaniesPaginationDto } from './../DTOs/companies-pagination.dto';
import { CompanyService } from './company.service';
import { Body, Controller, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { validate, validateOrReject } from 'class-validator';

@ApiTags('Company APIs')
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  // Get Industry Types
  @ApiResponse({ status: 200, type: [IndustryTypeDto] })
  @Get('industry-type')
  async getIndustryTypes(): Promise<IndustryTypeDto[]> {
    return await this.companyService.getIndustryTypes();
  }

  // Get Countries
  @ApiResponse({ status: 200, type: [CountryDto] })
  @Get('country')
  async getCountries(): Promise<CountryDto[]> {
    return await this.companyService.getCountries();
  }

  // Create Company
  @ApiResponse({ status: 200, type: CompanyDto })
  @ApiBody({ type: CompanyDto })
  @Post('')
  async createCompany(
    @Body('') companyObject: CompanyDto
  ): Promise<CompanyDto> {
    return await this.companyService.createCompany(companyObject);
  }

  // List Companies
  @ApiResponse({ status: 200, type: CompaniesPaginationDto })
  @Get('')
  async listCompanies(): Promise<CompaniesPaginationDto> {
    return await this.companyService.listCompanies();
  }

  // Get company
  @ApiParam({ name: 'id', required: true, example: '3' })
  @ApiResponse({ status: 200, type: CompanyDto })
  @Get(':id')
  async getCompany(@Param('id') companyId: CompanyDto['id']): Promise<CompanyDto> {
    return await this.companyService.getCompany(companyId);
  }

  // Update Comppany
  @ApiResponse({ status: 200, type: CountryDto })
  @ApiParam({ name: 'id', required: true, example: '3' })
  @ApiBody({ type: CompanyDto })
  @Put(':id')
  async updateCompany(
    @Param('id') companyId: CompanyDto['id'],
    @Body('company', new ValidationPipe({ skipMissingProperties: true }))
    companyObject: Partial<CompanyDto>): Promise<CompanyDto> {
    return await this.companyService.updateCompany(companyId, companyObject);
  }
}
