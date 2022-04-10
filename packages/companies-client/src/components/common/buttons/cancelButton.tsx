import React from "react";
// Components
import TextItem from "../text/TextItem";

interface ICancelButton {
  content: string;
  onClick: () => void;
  classes?: string;
  disabled?: boolean;
}

const CancelButton: React.FunctionComponent<ICancelButton> = ({
  content,
  disabled,
  onClick,
  classes,
}: ICancelButton) => {
  return (
    <TextItem
      content={content}
      onClick={onClick}
      classes={`cancel-btn micro-med pointer scale-hover fit-content second-hover box-sm-marg ${
        disabled ? "disabled" : ""
      } ${classes}`}
    />
  );
};

export default CancelButton;
