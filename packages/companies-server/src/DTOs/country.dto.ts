import { CompanyDto } from './company.dto';
import { IsArray } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CityDto } from './city.dto';

export class CountryDto {
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsArray()
  Cities?: CityDto[];

  @ApiProperty()
  @IsArray()
  Companies?: CompanyDto[];
}