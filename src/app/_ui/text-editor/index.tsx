"use client";
import React from "react";
import { Field, FieldProps } from "formik";
import "react-quill/dist/quill.snow.css";
import { ReactQuillProps } from "react-quill";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface QuillInputProps extends ReactQuillProps {
  isForm?: boolean;
  name?: string;
  label?: string;
}

export default function TextEditor({
  isForm = true,
  name = "",
  label,
  ...props
}: QuillInputProps) {
  return isForm ? (
    <Field name={name}>
      {({ field, form: { errors, touched } }: FieldProps) => (
        <div>
          {Boolean(label) && (
            <label
              htmlFor={name}
              className={
                "text-start block text-sm  w-full text-dark-100 font-medium pb-3"
              }
            >
              {label}
            </label>
          )}
          <ReactQuill
            value={field.value}
            onChange={field.onChange(field.name)}
            {...props}
            onBlur={() => undefined}
          />
          {Boolean(touched[name]) && Boolean(errors[name]) && (
            <div className="text-error-100 text-sm text-start">
              <>{errors[name]}</>
            </div>
          )}
        </div>
      )}
    </Field>
  ) : (
    <ReactQuill {...props} />
  );
}
