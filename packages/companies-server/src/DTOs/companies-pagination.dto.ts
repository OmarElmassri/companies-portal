import { CompanyDto } from './company.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CompaniesPaginationDto {
  @ApiProperty()
  @IsInt()
  count: number;

  @ApiProperty({ isArray: true, type: CompanyDto })
  data: CompanyDto[];
}