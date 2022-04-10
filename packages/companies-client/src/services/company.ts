import { deleteRequest, getRequest, patchRequest, postRequest } from '../utils/apiHelper';
import { ApiData } from '../utils/interfaces';
const endpoint: string = "/company";

export const getIndustryTypes = ({ apiData }: { apiData: ApiData }) => {
  getRequest(endpoint + '/industry-type', apiData);
}

export const getCountries = ({ apiData }: { apiData: ApiData }) => {
  getRequest(endpoint + '/country', apiData);
}

export const listCompanies = ({ apiData }: { apiData: ApiData }) => {
  getRequest(endpoint + '/', apiData);
}

export const getCompany = ({ apiData }: { apiData: ApiData }, companyCode: string) => {
  getRequest(endpoint + `/${companyCode}`, apiData);
}

export const createCompany = ({ apiData }: { apiData: ApiData }) => {
  postRequest(endpoint + '/', apiData);
}

export const updateCompany = ({ apiData, urlParam }: { apiData: ApiData, urlParam?: string }) => {
  patchRequest(endpoint + `/${urlParam}`, apiData);
}

export const deleteCompany = ({ apiData, urlParam }: { apiData: ApiData, urlParam?: string }) => {
  deleteRequest(endpoint + `/${urlParam}`, apiData);
}