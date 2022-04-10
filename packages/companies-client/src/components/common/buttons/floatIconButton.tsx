import React from "react";
import { GetIcon } from "../../../assets/IconGenerator";
import TooltipContainer from "../tooltip/tooltipContainer";

interface FloatIconButtonProps {
  name: string;
  size?: string;
  color?: string;
  onClick: () => void;
  classes?: string;
  disabled?: boolean;
  iconClasses?: string;
  tooltip?: string;
}

const FloatIconButton: React.FunctionComponent<FloatIconButtonProps> = ({
  name,
  size,
  color,
  onClick,
  classes,
  disabled,
  iconClasses,
  tooltip,
}: FloatIconButtonProps) => {
  const content = () => {
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

  if (!tooltip) return content();
  return <TooltipContainer tooltip={tooltip}>{content()}</TooltipContainer>;
};

export default FloatIconButton;
