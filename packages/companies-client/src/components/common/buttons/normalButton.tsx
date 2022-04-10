import React from "react";
import { GetIcon } from "../../../assets/IconGenerator";
// Components
import TextItem from "../text/TextItem";

interface NormalButtonProps {
  content: string;
  icon?: string;
  radial?: boolean;
  disabled?: boolean;
  onClick: () => void;
  classes?: string;
  second?: boolean;
}

const NormalButton = ({
  content,
  icon,
  radial,
  disabled,
  onClick,
  classes,
  second,
}: NormalButtonProps) => {
  // Classes
  const buttonClasses = `flex fit-content outline-none box-sm-padd ${
    disabled ? "forbid" : "normal-btn scale-hover pointer"
  } ${radial ? "radial-edges" : ""} ${classes} ${
    second ? "brand2-back border-brand2" : "brand-back border-none"
  }`;

  return (
    <button
      disabled={disabled}
      type="submit"
      onClick={onClick}
      className={buttonClasses}
    >
      <TextItem
        classes={`${
          disabled ? "white" : second ? "brand" : "white"
        } side-med-marg micro-med`}
        content={content}
      />
      {icon && (
        <GetIcon
          name={icon}
          color={second ? "brand" : "white"}
          size="tiny"
          disabled={disabled}
        />
      )}
    </button>
  );
};

export default NormalButton;
