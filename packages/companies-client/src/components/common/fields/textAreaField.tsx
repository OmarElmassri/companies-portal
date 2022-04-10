import React from "react";
// Packages
import { Input } from "antd";
// Hooks
import { LanguageHook } from "../../../utils/hooks";
// Components
import FieldHeader from "./components/fieldHeader";
import FieldFooter from "./components/fieldFooter";

const { TextArea } = Input;

interface TextAreaFieldProps {
  name?: string;
  place?: string;
  innerPlace?: string;
  label?: string;
  value: string;
  disabled?: boolean;
  error?: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  classes?: string;
  rows?: number;
}

const TextAreaField: React.FunctionComponent<TextAreaFieldProps> = ({
  name,
  place,
  innerPlace,
  label,
  value,
  disabled,
  error,
  onChange,
  autoFocus,
  classes,
  rows,
}: TextAreaFieldProps) => {
  // Hooks
  const { t } = LanguageHook();

  return (
    <div
      className={`input-field relative ${
        disabled ? "input-disabled-field" : ""
      } ${classes}`}
    >
      {(place || label) && (
        <FieldHeader
          head={place}
          label={label}
          disabled={disabled}
          error={error}
        />
      )}
      <TextArea
        autoFocus={autoFocus}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(innerPlace as string)}
        rows={rows}
        className={`${error && !disabled ? "input-error-field" : ""}`}
        disabled={disabled}
        value={value}
        style={{ fontFamily: "Ubuntu" }}
      />
      {error && <FieldFooter error={error} />}
    </div>
  );
};

export default TextAreaField;
