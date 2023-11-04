"use client";
import clsx from "clsx";
import { FieldProps, Field, ErrorMessage } from "formik";
import React, { FC } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelStyle?: string;
  isForm?: boolean;
  type?: string;
  placeholder?: string;
  value?: any;
  label?: string;
  error?: boolean;
  StartComponent?: React.FC;
  EndComponent?: React.FC;
  isSearching?: boolean;
  ref?: any;
}
const Input: FC<InputProps> = ({ name, isForm = false, ...props }) => {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => {
        return (
          <div className="w-full">
            <CustomInput
              {...props}
              {...field}
              name={name}
              error={Boolean(Boolean(touched[name]) && errors[name])}
            />
            <div className="text-red-500 text-sm text-start">
              <ErrorMessage name={name} />
            </div>
          </div>
        );
      }}
    </Field>
  ) : (
    <CustomInput {...props} name={name} />
  );
};
export default Input;
const CustomInput: React.FC<InputProps> = ({
  EndComponent,
  StartComponent,
  error = false,
  isSearching,
  name,
  type = "text",
  value,
  placeholder,
  label = null,
  ref,
  labelStyle,
  ...props
}) => {
  const { className = "", required, ...otherProps } = props;
  return (
    <div className="relative w-full justify-between">
      {label !== undefined && (
        <label
          htmlFor={name}
          className={clsx(
            "text-start block text-sm  w-full text-dark-100 font-medium",
            labelStyle
          )}
        >
          {label as string}
          {required === true && <span className="text-red-500"> *</span>}
        </label>
      )}

      <input
        ref={ref}
        required={required}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder ?? ""}
        type={type}
        className={clsx(
          "w-full h-10 border-b border-dark-300 bg-transparent  focus:outline-none",
          { "border-error-100": error },
          { "opacity-60 cursor-not-allowed": otherProps.disabled },
          className
        )}
        {...otherProps}
      />
    </div>
  );
};
