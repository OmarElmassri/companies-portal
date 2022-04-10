import * as React from "react";
import TextItem from "../../common/text/TextItem";

const TableHeader: React.FunctionComponent = () => {
  return (
    <div className="company-table vertical-med-marg side-med-padd">
      <TextItem content="company.id" classes="micro-hev brand text-upper id" />
      <TextItem
        content="company.name"
        classes="micro-hev brand text-upper name"
      />
      <TextItem
        content="company.description"
        classes="micro-hev brand text-upper description"
      />
      <TextItem
        content="company.city"
        classes="micro-hev brand text-upper city"
      />
      <TextItem
        content="company.country"
        classes="micro-hev brand text-upper country"
      />
      <TextItem
        content="company.address"
        classes="micro-hev brand text-upper address"
      />
    </div>
  );
};

export default TableHeader;
