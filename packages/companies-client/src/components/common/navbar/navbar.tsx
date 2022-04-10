import React from "react";
// Helpers
import history from "../../../utils/history";
// Components
import { GetIcon } from "../../../assets/IconGenerator";
import TextItem from "../text/TextItem";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="white-back shadow sticky top-zero-abs">
      <div className="not-full-container vertical-med-padd flex-nowrap justify-space-between">
        <div onClick={() => history.push("/")} className="flex-nowrap pointer">
          <GetIcon name="building" classes="end-sm-marg" size="tiny" />
          <TextItem content="brand" classes="parag-med text-upper" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
