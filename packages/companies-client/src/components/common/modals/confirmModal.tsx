import React from "react";
// Packages
import { Dialog } from "@material-ui/core";
// Components
import TextItem from "../text/TextItem";
import FormButtons from "../buttons/formButtons";
import { GetIcon } from "../../../assets/IconGenerator";

interface IConfirmModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  title: string;
  talk?: string;
  onAgree: () => void;
}

const ConfirmModal: React.FunctionComponent<IConfirmModalProps> = ({
  open,
  setOpen,
  title,
  talk,
  onAgree,
}: IConfirmModalProps) => {
  // Handle open modal
  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    setOpen(false);
    onAgree();
  };

  return (
    <Dialog className="confirm-modal" open={open} onClose={handleClose}>
      <div className="content-box all-med-padd overflow-auto">
        <div className="flex-nowrap align-start justify-self-start top-med-padd">
          <GetIcon name="question" classes="end-sm-marg" size="small" />
          <div className="single-grid">
            <TextItem content={title} classes="parag-med text-start" />
            {talk && <TextItem content={talk} classes="micro-lit" />}
          </div>
        </div>
        <div className="all-med-padd"></div>
        <FormButtons
          onSubmit={handleAgree}
          onCancel={handleClose}
          submitContent="action.iam-sure"
          cancelContent="action.iam-not"
        />
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
