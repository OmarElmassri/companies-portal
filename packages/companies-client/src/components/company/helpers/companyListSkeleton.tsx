import * as React from "react";
import { Shape } from "../../../utils/interfaces";
import AvatarSkeleton from "../../common/skeleton/avatarSkeleton";
import LineSkeleton from "../../common/skeleton/lineSkeleton";

const CompanyListSkeleton: React.FunctionComponent = () => {
  return (
    <div className="single-grid">
      <div className="double-grid full-width">
        <LineSkeleton rows={0} classes="align-self-end" title />
        <AvatarSkeleton
          fill
          shape={Shape.square}
          classes="justify-self-end"
          style={{ width: "70%", minWidth: "250px", height: "40px" }}
        />
      </div>
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
