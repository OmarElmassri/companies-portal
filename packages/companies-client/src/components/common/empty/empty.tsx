import React from "react";
import { GetIcon } from "../../../assets/IconGenerator";
// Components
import NormalButton from "../buttons/normalButton";
import TextItem from "../text/TextItem";

interface IEmptyFormProps {
  title: string;
  button?: string;
  onClick?: () => void;
  classes?: string;
}

const EmptyForm: React.FunctionComponent<IEmptyFormProps> = ({
  title,
  button,
  onClick,
  classes,
}: IEmptyFormProps) => {
  return (
    <div className={`empty-form single-grid all-padd ${classes}`}>
      <GetIcon
        name="empty"
        size="giant"
        classes="justify-self-center"
        color="dark"
      />
      <TextItem content={title} classes="sparag-lit text-center" />
      {button && onClick && (
        <NormalButton
          content={button}
          classes="justify-self-center"
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default EmptyForm;
