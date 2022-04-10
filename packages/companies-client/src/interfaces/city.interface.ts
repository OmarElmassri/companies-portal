import { ICountry } from './country.interface';
import { ICompany } from './company.interface';

export interface ICity {
  id?: number;
  name: string;
  country_id: number;
  country?: ICountry;
  Companies?: ICompany[];
}