import React from "react";
// Hooks
import { LanguageHook } from "../../../../utils/hooks";
// Components
import TextItem from "../../text/TextItem";

interface FieldFooterProps {
  error?: string;
  classes?: string;
}

const FieldFooter = ({ error, classes }: FieldFooterProps) => {
  // Hooks
  const { t } = LanguageHook();

  return (
    <div className={`absolute full-width ${classes}`}>
      {error && <TextItem classes="error micro-lit" content={error} />}
    </div>
  );
};

export default FieldFooter;
