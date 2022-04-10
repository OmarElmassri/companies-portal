import React from "react";
import { Shape } from "../../../utils/interfaces";
import AvatarSkeleton from "../../common/skeleton/avatarSkeleton";

const CompanyFormSkeleton: React.FunctionComponent = () => {
  return (
    <div className="double-grid">
      {Array.from(Array(6).keys()).map((item: number) => {
        return (
          <div key={item}>
            <AvatarSkeleton
              fill
              shape={Shape.square}
              classes="justify-self-end full-width vertical-med-marg"
              style={{ height: "50px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CompanyFormSkeleton;
