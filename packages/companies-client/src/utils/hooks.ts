import { getIndustryTypes, getCountries } from './../services/company';
import { IndustryType } from './../interfaces/industryType.interface';
import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { message as AntMessage } from "antd";
import { ApiData, IError, ISelectOptions } from "./interfaces";
import { ICountry } from '../interfaces/country.interface';

// Get language properties
export function LanguageHook() {
  const { i18n, t } = useTranslation();
  return {
    language: i18n.language,
    t,
  };
}

// Form Hooks
export function HandleApiHook(isFetch?: boolean) {
  // Hooks
  const { showAlert } = AlertHook();
  // Hooks
  const [loading, setLoading] = useState<boolean>(isFetch ? true : false);
  const [error, setError] = useState<boolean>(false);
  const [errors, setErrors] = useState<IError[]>([]);

  // Get error for field
  const getErrorItem = useCallback(
    (name) => {
      let errorObject: IError | undefined = errors.find((error) => error.path === name);
      if (!errorObject) return undefined;
      return errorObject.error;
    },
    [errors]
  );

  // Reset Errors
  const resetErrors = () => setErrors([]);

  interface IGetEndpointApi {
    body?: any;
    query?: { [key: string]: string };
    headers?: { [key: string]: string };
    successMessage?: string;
    params?: { [key: string]: string },
    onSuccess?: (value: any) => void;
    onFail?: (value: any) => void;
  }

  // Get endpoint api data
  const getEndpointApi = ({
    body,
    query,
    headers,
    successMessage,
    params,
    onSuccess,
    onFail,
  }: IGetEndpointApi) => {
    return {
      body: body ?? {},
      query: query ?? {},
      headers: headers ?? {},
      success: (data: any) => {
        setLoading(false);
        if (successMessage)
          showAlert({
            success: true,
            message: successMessage
          });
        if (onSuccess) onSuccess(data);
      },
      fail: (data: any) => {
        if (data.message) {
          showAlert({
            success: false,
            message: data.message,
          });
        } else {
          setErrors(
            Object.values(data).map((error: any) => {
              return { error: error.constraints[Object.keys(error.constraints)[0]], path: error.property };
            })
          );
        }
        if (onFail) onFail(data);
        setLoading(false);
        if (isFetch) setError(true);
      },
      error: () => {
        if (!isFetch)
          showAlert({
            success: false,
            message: "error",
          });
        setLoading(false);
        if (isFetch) setError(true);
      },
    };
  };

  interface ISubmit {
    service: ({ apiData, urlParam }: { apiData: ApiData, urlParam?: string }) => void;
    body?: any;
    query?: { [key: string]: string };
    headers?: { [key: string]: string };
    successMessage?: string;
    params?: { [key: string]: string },
    onSuccess?: (value: any) => void;
    onFail?: (value: any) => void;
    urlParam?: string;
  }

  // Submit Form
  const submit = ({
    service,
    body,
    query,
    headers,
    successMessage,
    params,
    onSuccess,
    onFail,
    urlParam
  }: ISubmit) => {
    resetErrors();
    setLoading(true);
    service(
      {
        apiData: getEndpointApi({
          body,
          query,
          headers,
          successMessage,
          params,
          onSuccess,
          onFail,
        }), urlParam
      }
    );
  };

  return {
    loading,
    error,
    setError,
    getEndpointApi,
    getErrorItem,
    resetErrors,
    submit,
  };
}

// Alert Helper
export const AlertHook = () => {
  // Hooks
  const { t } = LanguageHook();

  interface IShowAlert {
    success?: boolean;
    message?: string;
    duration?: number;
  }

  const showAlert = ({ success, message, duration }: IShowAlert) => {
    AntMessage[success ? "success" : "error"]({
      content: t(message as string),
      duration: duration ? duration : 5,
      style: {
        fontFamily: "Ubuntu",
      },
    });
  };

  return { showAlert };
};

// Fetch Industry Types
export const useFetchIndustryTypes = () => {
  // Hooks
  const { loading: industryTypesLoading, submit } = HandleApiHook(true);
  const [industryTypes, setIndustryTypes] = useState<ISelectOptions[]>();

  useEffect(() => {
    async function fetchIndustryTypes() {
      submit({
        service: getIndustryTypes,
        onSuccess: (industryTypesResult: IndustryType[]) => {
          setIndustryTypes(industryTypesResult.map((industry: IndustryType) => {
            const { id, name } = industry;
            return {
              value: id,
              label: name
            } as ISelectOptions
          }))
        },
      });
    }
    fetchIndustryTypes();
  }, []);

  return { industryTypesLoading, industryTypes }
}

// Fetch Country city
export const useFetchCountries = () => {
  // Hooks
  const { loading: countryLoading, submit } = HandleApiHook(true);
  const [countries, setCountries] = useState<ISelectOptions[]>();
  const [originalCountries, setOriginalCountries] = useState<ICountry[]>();

  useEffect(() => {
    async function fetchCountry() {
      submit({
        service: getCountries,
        onSuccess: (countryResult: ICountry[]) => {
          setOriginalCountries(countryResult);
          setCountries(countryResult.map((country: ICountry) => {
            const { id, name } = country;
            return {
              value: id,
              label: name
            } as ISelectOptions
          }))
        },
      });
    }
    fetchCountry();
  }, []);

  return { countryLoading, countries, originalCountries }
}