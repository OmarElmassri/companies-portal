import React from "react";
// Packages
import { Select } from "antd";
// Components
import { LanguageHook } from "../../../utils/hooks";
import FieldFooter from "./components/fieldFooter";
import FieldHeader from "./components/fieldHeader";
import { ISelectOptions } from "../../../utils/interfaces";
// SubImports
const { Option } = Select;

interface SelectFieldProps {
  name?: string;
  place?: string;
  innerPlace?: string;
  label?: string;
  value: number;
  disabled?: boolean;
  error?: string;
  onChange: (value: number) => void;
  classes?: string;
  allowClear?: boolean;
  onClear?: () => void;
  options: ISelectOptions[];
}

const SelectField: React.FunctionComponent<SelectFieldProps> = ({
  name,
  place,
  innerPlace,
  label,
  value,
  disabled,
  error,
  onChange,
  options,
  classes,
  allowClear,
  onClear,
}: SelectFieldProps) => {
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
        className={`select-field ${
          disabled ? "select-disabled-field" : ""
        } ${classes}`}
      >
        <Select
          className={`${error && !disabled ? "select-field-error" : ""}`}
          placeholder={t(innerPlace as string)}
          showSearch
          disabled={disabled}
          onChange={onChange}
          defaultValue={value}
          value={value}
          allowClear={allowClear}
          onClear={onClear}
          style={{ fontFamily: "Ubuntu" }}
          filterOption={(input, option: any) =>
            option?.children?.props.children
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
        >
          {options &&
            options.map((option) => {
              return (
                <Option key={option.value} value={option.value}>
                  <span style={{ fontFamily: "Ubuntu" }}>{option.label}</span>
                </Option>
              );
            })}
        </Select>
      </div>
      {error && <FieldFooter error={error} />}
    </div>
  );
};

export default SelectField;
