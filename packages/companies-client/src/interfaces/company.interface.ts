import { ICity } from './city.interface';
import { IndustryType } from './industryType.interface';
import { ICountry } from './country.interface';

export interface ICompany {
  id?: number;
  code?: string;
  name: string;
  description: string;
  address: string;
  isActive?: boolean;
  industry_type_id: number;
  industry_type?: IndustryType;
  country_id: number;
  country?: ICountry;
  city_id: number;
  city?: ICity;
}