import React from "react";
// Packages
import { Input } from "antd";
// Components
import FieldHeader from "./components/fieldHeader";
import FieldFooter from "./components/fieldFooter";
// Hooks
import { LanguageHook } from "../../../utils/hooks";

interface HeadTextFieldProps {
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
  onEnter?: () => void;
  disableSubmit?: boolean;
}

const HeadTextField: React.FunctionComponent<HeadTextFieldProps> = ({
  name,
  place,
  innerPlace,
  label,
  value,
  error,
  disabled,
  onChange,
  autoFocus,
  classes,
  onEnter,
  disableSubmit,
}: HeadTextFieldProps) => {
  // Hooks
  const { t } = LanguageHook();

  return (
    <div className="full-width relative">
      {(place || label) && (
        <FieldHeader
          head={place}
          label={label}
          disabled={disabled}
          error={error}
        />
      )}
      <div
        className={`input-field relative ${
          disabled ? "input-disabled-field" : ""
        } ${classes}`}
      >
        <Input
          autoFocus={autoFocus}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t(innerPlace as string)}
          className={`${error && !disabled ? "input-error-field" : ""}`}
          type="text"
          disabled={disabled}
          value={value}
          onKeyPress={(e) => {
            if (disableSubmit && e.key === "Enter") {
              if (onEnter) onEnter();
              e.preventDefault();
            }
          }}
          style={{ fontFamily: "Ubuntu" }}
        />
      </div>
      {error && <FieldFooter error={error} />}
    </div>
  );
};

export default HeadTextField;
