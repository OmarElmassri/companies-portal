import React from "react";
// Hooks
import { LanguageHook } from "../../../../utils/hooks";
// Components
import TextItem from "../../text/TextItem";

interface FieldFooterProps {
  fieldName?: string;
  error?: string;
  classes?: string;
}

const FieldFooter = ({ fieldName, error, classes }: FieldFooterProps) => {
  // Hooks
  const { t } = LanguageHook();

  return (
    <div className={`absolute full-width ${classes}`}>
      {error && fieldName && (
        <TextItem
          classes="error micro-lit"
          content={`error.${error}`}
          params={{ field: t(fieldName) }}
        />
      )}
    </div>
  );
};

export default FieldFooter;
