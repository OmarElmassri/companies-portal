import { CountryDto } from './../DTOs/country.dto';
import { IndustryTypeDto } from './../DTOs/industryType.dto';
import { CompanyDto } from './../DTOs/company.dto';
import { CompaniesPaginationDto } from './../DTOs/companies-pagination.dto';
import { CompanyService } from './company.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

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

  // List Companies
  @ApiQuery({ name: 'keyword', required: false, example: 'Wuzzuf' })
  @ApiResponse({ status: 200, type: CompaniesPaginationDto })
  @Get('')
  async listCompanies(
    @Query('keyword') keyword = ''
  ): Promise<CompaniesPaginationDto> {
    return await this.companyService.listCompanies(keyword);
  }

  // Get company
  @ApiParam({ name: 'code', required: true, example: 'CO_34086302' })
  @ApiResponse({ status: 200, type: CompanyDto })
  @Get(':code')
  async getCompany(@Param('code') companyCode: CompanyDto['code']): Promise<CompanyDto> {
    return await this.companyService.getCompany(companyCode);
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

  // Update Comppany
  @ApiResponse({ status: 200, type: CompanyDto })
  @ApiParam({ name: 'code', required: true, example: 'CO_34086302' })
  @ApiBody({ type: CompanyDto })
  @Patch(':code')
  async updateCompany(
    @Param('code') companyCode: CompanyDto['code'],
    @Body('') companyObject: Partial<CompanyDto>): Promise<CompanyDto> {
    return await this.companyService.updateCompany(companyCode, companyObject);
  }

  // Delete Company
  @ApiResponse({ status: 200, type: CompanyDto })
  @ApiParam({ name: 'code', required: true, example: 'CO_34086302' })
  @Delete(':code')
  async deleteCompany(@Param('code') companyCode: CompanyDto['code']): Promise<CompanyDto> {
    return await this.companyService.deleteCompany(companyCode);
  }
}
