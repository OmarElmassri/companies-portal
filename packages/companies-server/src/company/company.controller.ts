import { CompanyService } from './company.service';
import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Company APIs')
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  @Get('')
  async listCompanies() {
    return console.log('companies')
  }

  @Get(':id')
  async getCompany() {
    return console.log('companies')
  }

  @Get('industry_type')
  async getIndustryTypes() {
    return console.log('industry types')
  }

  @Get('country')
  async getCountries() {
    return console.log('countries')
  }

  @Post('')
  async createCountry() {
    return console.log('countries')
  }

  @Put(':id')
  async updateCompany() {
    return console.log('countries')
  }
}
