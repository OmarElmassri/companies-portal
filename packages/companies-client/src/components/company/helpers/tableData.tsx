import * as React from "react";
import { ICompany } from "../../../interfaces/company.interface";
import EmptyForm from "../../common/empty/empty";
import CompanyCard from "./companyCard";

interface ICompanyTableDataProps {
  companies?: ICompany[];
}

const CompanyTableData: React.FunctionComponent<ICompanyTableDataProps> = ({
  companies,
}: ICompanyTableDataProps) => {
  if (companies?.length === 0) return <EmptyForm title="no-companies" />;
  return (
    <>
      {companies?.map((company: ICompany) => {
        return <CompanyCard key={company.code} company={company} />;
      })}
    </>
  );
};

export default CompanyTableData;
