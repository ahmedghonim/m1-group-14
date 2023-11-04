"use client";
import React from "react";
import ReactSelect, { Props } from "react-select";
import ReactSelectTheme from "./ReactSelectTheme";
import { ErrorMessage, Field, FieldProps } from "formik";

export interface Options {
  value: string | number;
  label: string | number;
}

interface SelectProps extends Omit<Props, "placeholder"> {
  options: Options[];
  isForm?: boolean;
  label?: string;
  placeholder?: string;
}

function Select({
  options,
  className = "",
  label,
  isForm = true,
  name = "",
  required,
  placeholder,
  ...props
}: SelectProps & Partial<FieldProps>) {
  const styles = ReactSelectTheme("light");

  return isForm ? (
    <Field name="department">
      {({
        field,
        form: { errors, touched, setFieldValue, values },
      }: FieldProps) => {
        return (
          <div className="w-full flex flex-col">
            {Boolean(label) && (
              <label
                htmlFor={name}
                className={
                  "text-start block text-sm  w-full text-dark-100 font-medium"
                }
              >
                {label as string}
                {required === true && <span className="text-red-500"> *</span>}
              </label>
            )}
            <ReactSelect
              required={required}
              id="long-value-select"
              instanceId="long-value-select"
              options={options}
              styles={styles}
              {...field}
              value={options.filter(function (option) {
                return option.value === values[name];
              })}
              name={name}
              classNamePrefix={`select2-selection ${
                props.isDisabled === true ? "opacity-80" : ""
              } ${
                Boolean(touched[name]) && Boolean(errors[name])
                  ? "!border-error-100"
                  : ""
              } `}
              {...props}
              placeholder={placeholder as string}
              className={`h-9 w-full ${className}  `}
              onChange={(selectedOption: any) => {
                if (props?.onChange == null) {
                  setFieldValue(name, selectedOption.value);
                }
              }}
            />
            <div className="text-error-100 text-sm text-start">
              <ErrorMessage name={name} />
            </div>
          </div>
        );
      }}
    </Field>
  ) : (
    <div className="w-full flex flex-col">
      {Boolean(label) && (
        <label
          htmlFor={name}
          className={
            "text-start block text-sm  w-full text-dark-100 font-medium"
          }
        >
          {label as string}
        </label>
      )}
      <ReactSelect
        id="long-value-select"
        instanceId="long-value-select"
        options={options}
        styles={styles}
        placeholder={placeholder as string}
        {...props}
        className={`h-10 w-full ${className} `}
      />
    </div>
  );
}

export default Select;
