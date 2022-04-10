import * as React from "react";
import { ICompany } from "../../../interfaces/company.interface";
import FloatIconButton from "../../common/buttons/floatIconButton";
import TextItem from "../../common/text/TextItem";

interface ICompanyCardProps {
  company: ICompany;
}

const CompanyCard: React.FunctionComponent<ICompanyCardProps> = ({
  company,
}: ICompanyCardProps) => {
  return (
    <div className="company-table all-med-padd shadow white-back">
      <TextItem
        content={company.code as string}
        classes="micro-med id text-break"
      />
      <div className="name align-self-center">
        <TextItem content={company.name as string} classes="micro-med" />
        <TextItem
          content={company.industry_type?.name as string}
          classes="micro-lit"
        />
      </div>
      <TextItem
        content={company.description as string}
        classes="micro-lit text-start description"
      />
      <TextItem
        content={company.city?.name as string}
        classes="micro-med city"
      />
      <TextItem
        content={company.country?.name as string}
        classes="micro-med country"
      />
      <TextItem
        content={company.address as string}
        classes="micro-lit text-start address"
      />
      <div className="flex">
        <FloatIconButton
          name="trash"
          classes="all-sm-marg"
          color="second"
          tooltip="delete"
          size="micro2"
          onClick={() => {}}
        />
        <FloatIconButton
          name="edit"
          onClick={() => {}}
          tooltip="edit"
          size="micro2"
          classes="all-sm-marg"
        />
      </div>
    </div>
  );
};

export default CompanyCard;
