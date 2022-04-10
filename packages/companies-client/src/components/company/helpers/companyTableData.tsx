import React from "react";
import { ICompany } from "../../../interfaces/company.interface";
import EmptyForm from "../../common/empty/empty";
import CompanyCard from "./companyCard";

interface ICompanyTableDataProps {
  companies?: ICompany[];
  count?: number;
  setCompanies: any;
}

const CompanyTableData: React.FunctionComponent<ICompanyTableDataProps> = ({
  companies,
  count,
  setCompanies,
}: ICompanyTableDataProps) => {
  // Delete company
  const removeCompany = (companyCode: string) => {
    let companiesSample = [...(companies as ICompany[])];
    companiesSample = companiesSample.filter(
      (company: ICompany) => company.code !== companyCode
    );
    setCompanies({ count: (count as number) - 1, data: companiesSample });
  };

  if (companies?.length === 0) return <EmptyForm title="no-companies" />;
  return (
    <>
      {companies?.map((company: ICompany) => {
        return (
          <CompanyCard
            key={company.code}
            company={company}
            removeCompany={removeCompany}
          />
        );
      })}
    </>
  );
};

export default CompanyTableData;
