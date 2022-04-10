import React, { useState } from "react";
import { ICompany } from "../../../interfaces/company.interface";
import { deleteCompany } from "../../../services/company";
import { HandleApiHook } from "../../../utils/hooks";
import FloatIconButton from "../../common/buttons/floatIconButton";
import CircleLoader from "../../common/loaders/circleLoader";
import ConfirmModal from "../../common/modals/confirmModal";
import TextItem from "../../common/text/TextItem";

interface ICompanyCardProps {
  company: ICompany;
  removeCompany: (companyCode: string) => void;
}

const CompanyCard: React.FunctionComponent<ICompanyCardProps> = ({
  company,
  removeCompany,
}: ICompanyCardProps) => {
  // Hooks
  const { loading, submit } = HandleApiHook();
  const [deleteConfirm, setDeleteConfirm] = useState<boolean>(false);

  // Delete company
  const deleteCompanyInfo = () => {
    submit({
      service: deleteCompany,
      urlParam: company.code,
      onSuccess: () => removeCompany(company.code as string),
    });
  };

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
      {loading ? (
        <div className="flex">
          <CircleLoader size="small" />
        </div>
      ) : (
        <div className="flex">
          <FloatIconButton
            name="trash"
            classes="all-sm-marg"
            color="second"
            tooltip="delete"
            size="micro2"
            onClick={() => setDeleteConfirm(true)}
          />
          <FloatIconButton
            name="edit"
            onClick={() => {}}
            tooltip="edit"
            size="micro2"
            classes="all-sm-marg"
          />
        </div>
      )}
      <ConfirmModal
        open={deleteConfirm}
        setOpen={setDeleteConfirm}
        title="delete-company"
        talk="delete-company-talk"
        onAgree={deleteCompanyInfo}
      />
    </div>
  );
};

export default CompanyCard;
