import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService],
  exports: [CompanyService]
})
export class CompanyModule { }
