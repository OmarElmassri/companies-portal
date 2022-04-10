import React, { useEffect } from "react";
import ErrorConnection from "../error/error";

interface IFetchUiDataProps {
  service: () => void;
  loading: boolean;
  Loader: any;
  error: boolean;
  setError: (value: boolean) => void;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  observer?: any;
  classes?: string;
  dataFetched?: any;
  wait?: any;
  noWait?: boolean;
}

const FetchUiData: React.FunctionComponent<IFetchUiDataProps> = ({
  service,
  loading,
  Loader,
  error,
  setError,
  children,
  observer,
  classes,
  dataFetched,
  wait,
  noWait,
}: IFetchUiDataProps) => {
  // Execute Service
  useEffect(() => {
    const executeService = async () => {
      if (wait || noWait) await service();
    };
    executeService();
  }, [error, wait, observer]);

  if (loading || (!dataFetched && !error)) {
    return <Loader />;
  } else if (error) {
    return <ErrorConnection onRefresh={() => setError(false)} />;
  } else return <div className={classes}>{children}</div>;
};

export default FetchUiData;
