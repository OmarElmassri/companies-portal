import { ICompany } from './company.interface';

export interface ICompanyPagination {
  count: number;
  data: ICompany[];
}