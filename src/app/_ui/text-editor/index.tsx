"use client";
import React from "react";
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
  name = "",
  label,
  ...props
}: QuillInputProps) {
  const [value, setValue] = React.useState(props.value);
  return (
    <div className="mt-5">
      <label
        htmlFor={name}
        className={
          "text-start block text-sm  w-full text-dark-100 font-medium pb-3"
        }
      >
        {label}
      </label>
      <input type="hidden" name={name} value={value as any} />
      <ReactQuill
        onChange={(value) => {
          setValue(value);
        }}
        defaultValue={value}
      />
    </div>
  );
}
