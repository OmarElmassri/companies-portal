import { CityDto } from './city.dto';
import { CountryDto } from './country.dto';
import { IndustryTypeDto } from './industryType.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Transform, Type } from 'class-transformer';

export class CompanyDto {
  id?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  code?: string;

  @ApiProperty()
  @IsNotEmpty({ message: `Company Name is required` })
  @IsString()
  @Transform(
    (value) => value.trim(),
    { toClassOnly: true }
  )
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: `Description is required` })
  @IsString()
  @Transform(
    (value) => value.trim(),
    { toClassOnly: true }
  )
  description: string;

  @ApiProperty()
  @IsNotEmpty({ message: `Address is required` })
  @IsString()
  @Transform(
    (value) => value.trim(),
    { toClassOnly: true }
  )
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: `Industry Type is required` })
  @IsInt()
  industry_type_id: number;

  @ApiProperty()
  @IsOptional()
  @Type(() => IndustryTypeDto)
  industry_type?: IndustryTypeDto;

  @ApiProperty()
  @IsNotEmpty({ message: `Country is required` })
  @IsInt()
  country_id: number;

  @ApiProperty()
  @IsOptional()
  @Type(() => CountryDto)
  country?: CountryDto;

  @ApiProperty()
  @IsNotEmpty({ message: `City is required` })
  @IsInt()
  city_id: number;

  @ApiProperty()
  @IsOptional()
  @Type(() => CityDto)
  city?: CityDto;
}