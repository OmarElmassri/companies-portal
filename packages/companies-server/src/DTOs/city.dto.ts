import { IsArray } from 'class-validator';
import { CompanyDto } from './company.dto';
import { CountryDto } from './country.dto';
import { IsInt } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export class CityDto {
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsInt()
  country_id: number;

  @ApiProperty()
  @Type(() => CountryDto)
  country?: CountryDto;

  @ApiProperty()
  @IsArray()
  Companies?: CompanyDto[];
}