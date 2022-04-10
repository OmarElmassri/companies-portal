import React from "react";
import { GetIcon } from "../../../assets/IconGenerator";
// Components
import FloatIconButton from "../buttons/floatIconButton";
import TextItem from "../text/TextItem";

interface IErrorConnectionProps {
  onRefresh: () => void;
  classes?: string;
}

const ErrorConnection = ({ onRefresh, classes }: IErrorConnectionProps) => {
  return (
    <div className={`flex flex-column all-padd ${classes}`}>
      <GetIcon name="error" color="second" size="med2" />
      <TextItem content="error.error" classes="sparag-lit" />
      <FloatIconButton
        onClick={onRefresh}
        name="refresh"
        color="black"
        size="tiny2"
        classes="top-marg"
      />
    </div>
  );
};

export default ErrorConnection;
