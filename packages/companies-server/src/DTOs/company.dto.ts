import { CityDto } from './city.dto';
import { CountryDto } from './country.dto';
import { IndustryTypeDto } from './industryType.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CompanyDto {
  id?: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty()
  @IsInt()
  industry_type_id?: number;

  @ApiProperty()
  @Type(() => IndustryTypeDto)
  industry_type?: IndustryTypeDto;

  @ApiProperty()
  @IsInt()
  country_id?: number;

  @ApiProperty()
  @Type(() => CountryDto)
  country?: CountryDto;

  @ApiProperty()
  @IsInt()
  city_id?: number;

  @ApiProperty()
  @Type(() => CityDto)
  city?: CityDto;
}