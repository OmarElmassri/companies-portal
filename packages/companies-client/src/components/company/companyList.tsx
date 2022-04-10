import React, { useState } from "react";
import { GetIcon } from "../../assets/IconGenerator";
import { ICompanyPagination } from "../../interfaces/companyPagination.interface";
import { listCompanies } from "../../services/company";
import { HandleApiHook } from "../../utils/hooks";
import HeadTextField from "../common/fields/headTextField";
import FetchUiData from "../common/layouts/fetchUiData";
import TextItem from "../common/text/TextItem";
import CompanyListSkeleton from "./helpers/companyListSkeleton";
import CompanyTableData from "./helpers/companyTableData";
import TableHeader from "./helpers/companyTableHeader";

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
    <div className="single-grid bottom-extend top-extend-fill">
      <div className="double-grid noncard-container">
        {!loading ? (
          <TextItem
            content="results"
            params={{ value: companies?.count.toString() as string }}
            classes="tiny-med text-start align-self-end"
          />
        ) : (
          <div />
        )}
        <div className="flex-nowrap justify-end">
          <GetIcon name="search" classes="side-sm-marg" />
          <div style={{ minWidth: "200px" }}>
            <HeadTextField
              innerPlace="search"
              value={keyword}
              onChange={setKeyword}
              onEnter={fetchCompanies}
              disableSubmit
            />
          </div>
        </div>
      </div>
      <TableHeader />
      <FetchUiData
        service={fetchCompanies}
        loading={loading}
        dataFetched={companies}
        error={error}
        setError={setError}
        Loader={CompanyListSkeleton}
        classes="single-grid"
        noWait
      >
        <CompanyTableData
          companies={companies?.data}
          setCompanies={setCompanies}
          count={companies?.count}
        />
      </FetchUiData>
    </div>
  );
};

export default CompanyList;
