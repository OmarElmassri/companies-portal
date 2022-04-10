import { deleteRequest, getRequest, patchRequest, postRequest } from '../utils/apiHelper';
import { ApiData } from '../utils/interfaces';
const endpoint: string = "/company";

export const getIndustryTypes = (apiData: ApiData) => {
  getRequest(endpoint + '/industry-type', apiData);
}

export const getCountries = (apiData: ApiData) => {
  getRequest(endpoint + '/country', apiData);
}

export const listCompanies = (apiData: ApiData) => {
  getRequest(endpoint + '/', apiData);
}

export const getCompany = (apiData: ApiData, companyCode: string) => {
  getRequest(endpoint + `/${companyCode}`, apiData);
}

export const createCompany = (apiData: ApiData) => {
  postRequest(endpoint + '/', apiData);
}

export const updateCompany = (apiData: ApiData, companyCode: string) => {
  patchRequest(endpoint + `/${companyCode}`, apiData);
}

export const deleteCompany = (apiData: ApiData, companyCode: string) => {
  deleteRequest(endpoint + `/${companyCode}`, apiData);
}