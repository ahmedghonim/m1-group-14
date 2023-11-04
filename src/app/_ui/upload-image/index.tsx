"use client";
import Image from "next/image";
import React from "react";
import { useFormStatus } from "react-dom";

interface Props {
  name?: string;
  value?: string;
}

function UploadImage({ value }: Props) {
  const { data } = useFormStatus();
  console.log("data >>>> ", data);
  return (
    <div className="pb-4 h-full w-full">
      <div className="h-full w-full border-2  border-dashed rounded-md border-primary-100 relative">
        <Image
          src={value as string}
          alt="image"
          className="w-full h-full"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
}

export default UploadImage;
