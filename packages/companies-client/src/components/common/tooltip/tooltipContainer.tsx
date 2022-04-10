import React from "react";
// Packages
import { Tooltip } from "antd";
import TextItem from "../text/TextItem";

interface ITooltipContainerProps {
  tooltip: string;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

const TooltipContainer: React.FunctionComponent<ITooltipContainerProps> = ({
  tooltip,
  children,
}: ITooltipContainerProps) => {
  return (
    <Tooltip placement="top" title={<TextItem content={tooltip} />}>
      <div>{children}</div>
    </Tooltip>
  );
};

export default TooltipContainer;
