import { ICompany } from './company.interface';

export interface IndustryType {
  id?: number;
  name: string;
  Companies?: ICompany[];
}