import React from "react";
// Components
import TextItem from "../../text/TextItem";

interface FieldHeaderProps {
  head?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
}

const FieldHeader = ({ head, label, disabled, error }: FieldHeaderProps) => {
  return (
    <div
      style={{ marginBottom: "0.2rem" }}
      className="flex-nowrap justify-space-between side-sm-padd"
    >
      {head && (
        <TextItem
          classes={`tiny-med ${
            disabled ? "disabled sparag-lit opacity forbid" : ""
          } ${error ? "error" : ""}`}
          content={head}
        />
      )}
      {label && (
        <TextItem
          classes={`micro-lit opacity ${disabled ? "disabled forbid" : ""} `}
          content={label}
        />
      )}
    </div>
  );
};

export default FieldHeader;
