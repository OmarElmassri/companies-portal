import * as React from "react";
import { Shape } from "../../../utils/interfaces";
import AvatarSkeleton from "../../common/skeleton/avatarSkeleton";
import LineSkeleton from "../../common/skeleton/lineSkeleton";

const CompanyListSkeleton: React.FunctionComponent = () => {
  return (
    <div className="single-grid">
      {Array.from(Array(4).keys()).map((item: number) => {
        return (
          <div key={item}>
            <div className="hor-div-full vertical-marg"></div>
            <AvatarSkeleton
              fill
              shape={Shape.square}
              classes="justify-self-end full-width"
              style={{ height: "15px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyListSkeleton;
