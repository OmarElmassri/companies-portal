import React, { useState } from "react";
import { GetIcon } from "../../assets/IconGenerator";
import { ICompanyPagination } from "../../interfaces/companyPagination.interface";
import { listCompanies } from "../../services/company";
import { HandleApiHook } from "../../utils/hooks";
import HeadTextField from "../common/fields/headTextField";
import FetchUiData from "../common/layouts/fetchUiData";
import TextItem from "../common/text/TextItem";
import CompanyListSkeleton from "./helpers/companyListSkeleton";
import CompanyTableData from "./helpers/tableData";
import TableHeader from "./helpers/tableHeader";

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
      <div className="double-grid noncard-container">
        <TextItem
          content="results"
          params={{ value: companies?.count.toString() as string }}
          classes="tiny-med text-start align-self-end"
        />
        <div className="flex-nowrap justify-end">
          <GetIcon name="search" classes="side-sm-marg" />
          <div style={{ minWidth: "200px" }}>
            <HeadTextField
              innerPlace="search"
              value={keyword}
              onChange={setKeyword}
            />
          </div>
        </div>
      </div>
      <TableHeader />
      <CompanyTableData companies={companies?.data} />
    </FetchUiData>
  );
};

export default CompanyList;
