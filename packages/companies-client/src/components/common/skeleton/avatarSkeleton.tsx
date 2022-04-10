import React from "react";
// Packages
import { Skeleton } from "antd";
import { Shape } from "../../../utils/interfaces";

interface AvatarSkeletonProps {
  fill?: boolean;
  size?: string;
  shape?: Shape;
  minHeight?: number;
  minWidth?: number;
  classes?: string;
  style?: { [key: string]: string };
}

const AvatarSkeleton = ({
  fill,
  size,
  shape,
  minHeight,
  minWidth,
  classes,
  style,
}: AvatarSkeletonProps) => {
  return (
    <div
      className={`${fill ? "full-height full-width" : "fit-content"} icon-${
        fill ? "" : size ? size : "tiny"
      } ${classes} relative`}
      style={{ minHeight: minHeight, minWidth: minWidth, ...style }}
    >
      <Skeleton.Avatar
        shape={shape ?? "circle"}
        className="absolute full-width-imp full-height"
        active
      />
    </div>
  );
};

export default AvatarSkeleton;
