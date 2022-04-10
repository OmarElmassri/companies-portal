import React from "react";
import { GetIcon } from "../../../assets/IconGenerator";

interface FloatIconButtonProps {
  name: string;
  size?: string;
  color?: string;
  onClick: () => void;
  classes?: string;
  disabled?: boolean;
  iconClasses?: string;
}

const FloatIconButton: React.FunctionComponent<FloatIconButtonProps> = ({
  name,
  size,
  color,
  onClick,
  classes,
  disabled,
  iconClasses,
}: FloatIconButtonProps) => {
  return (
    <div
      onClick={!disabled ? onClick : () => {}}
      className={`float-icon-button pointer flex fit-content ${classes}`}
    >
      <GetIcon
        name={name}
        size={size ?? "tiny"}
        color={color ?? "brand"}
        classes={iconClasses}
        disabled={disabled}
      />
    </div>
  );
};

export default FloatIconButton;
