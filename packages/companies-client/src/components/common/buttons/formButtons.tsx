import React from "react";
import CircleLoader from "../loaders/circleLoader";
// Components
import CancelButton from "./cancelButton";
import NormalButton from "./normalButton";

interface IFormButtons {
  submitContent?: string;
  icon?: string;
  radial?: boolean;
  disabled?: boolean;
  onSubmit?: () => void;
  classes?: string;
  second?: boolean;
  cancelContent?: string;
  onCancel: () => void;
}

const FormButtons: React.FunctionComponent<IFormButtons> = ({
  submitContent,
  icon,
  radial,
  disabled,
  onSubmit,
  classes,
  second,
  cancelContent,
  onCancel,
}: IFormButtons) => {
  return (
    <div className={`flex-nowrap justify-end ${classes}`}>
      {disabled && <CircleLoader size="small" />}
      {onCancel && (
        <CancelButton
          content={cancelContent ?? "action.cancel"}
          disabled={disabled}
          onClick={onCancel}
        />
      )}
      <NormalButton
        disabled={disabled}
        content={submitContent ?? "action.submit"}
        icon={icon}
        onClick={onSubmit ? onSubmit : () => {}}
        radial={radial}
        second={second}
      />
    </div>
  );
};

export default FormButtons;
