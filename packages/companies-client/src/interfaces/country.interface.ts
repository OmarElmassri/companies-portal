import { ICity } from './city.interface';
import { ICompany } from './company.interface';

export interface ICountry {
  id?: number;
  name: string;
  Cities?: ICity[];
  Companies?: ICompany[];
}