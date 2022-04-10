import React from "react";
// Packages
import { Skeleton } from "antd";

interface LineSkeletonProps {
  rows: number;
  title?: boolean;
  classes?: string;
}

const LineSkeleton = ({ rows, title, classes }: LineSkeletonProps) => {
  return (
    <div className={classes}>
      <Skeleton active paragraph={{ rows }} title={title ?? false} />
    </div>
  );
};

export default LineSkeleton;
