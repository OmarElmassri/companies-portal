import React, { useState } from "react";
import { GetIcon } from "../../assets/IconGenerator";
import { ICompanyPagination } from "../../interfaces/companyPagination.interface";
import { listCompanies } from "../../services/company";
import { HandleApiHook } from "../../utils/hooks";
import NormalButton from "../common/buttons/normalButton";
import HeadTextField from "../common/fields/headTextField";
import FetchUiData from "../common/layouts/fetchUiData";
import TextItem from "../common/text/TextItem";
import CompanyListSkeleton from "./helpers/companyListSkeleton";

const CompanyList: React.FunctionComponent = () => {
  // Hooks
  const { loading, error, setError, submit } = HandleApiHook(true);
  const [keyword, setKeyword] = useState<string>("");
  const [companies, setCompanies] = useState<ICompanyPagination>();

  // Fetch profile data
  const fetchCompanies = () => {
    submit({
      service: listCompanies,
      query: { keyword },
      onSuccess: (companiesResult) => setCompanies(companiesResult),
    });
  };

  return (
    <FetchUiData
      service={fetchCompanies}
      loading={loading}
      dataFetched={companies}
      error={error}
      setError={setError}
      Loader={CompanyListSkeleton}
      classes="single-grid bottom-extend top-extend-fill"
      noWait
    >
      <div className="flex-nowrap justify-space-between">
        <TextItem
          content="results"
          params={{ value: companies?.count.toString() as string }}
          classes="tiny-med"
        />
        <div className="flex justify-end">
          <GetIcon name="search" />
          <div style={{ width: "50%", minWidth: "250px" }}>
            <HeadTextField
              innerPlace="search"
              value={keyword}
              onChange={setKeyword}
              classes="side-sm-marg"
            />
          </div>
          <NormalButton content="add-company" onClick={() => {}} />
        </div>
      </div>
    </FetchUiData>
  );
};

export default CompanyList;
