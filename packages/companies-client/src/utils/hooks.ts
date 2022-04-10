import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { message as AntMessage } from "antd";
import { ApiData, IError } from "./interfaces";

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
            message: successMessage,
            params,
          });
        if (onSuccess) onSuccess(data);
      },
      fail: (data: any) => {
        if (data.errors)
          setErrors(
            Object.values(data.errors).map((error: any) => {
              return { error: error.message, path: error.path };
            })
          );
        if (data.error && data.description !== "expired-token")
          showAlert({
            success: false,
            message: data.error,
            params: data.params,
          });
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
    params?: { [key: string]: string },
    duration?: number;
  }

  const showAlert = ({ success, message, params, duration }: IShowAlert) => {
    const translatedParams: { [key: string]: string } = {};
    if (params) {
      const paramsKeys = Object.keys(params);
      paramsKeys.forEach((paramKey) => {
        translatedParams[paramKey] = t(params[paramKey]);
      });
    }
    AntMessage[success ? "success" : "error"]({
      content: t(`${success ? "success" : "error"}.${message}`, {
        ...translatedParams,
      }),
      duration: duration ? duration : success ? 2 : 5,
      style: {
        fontFamily: "Ubuntu",
      },
    });
  };

  return { showAlert };
};