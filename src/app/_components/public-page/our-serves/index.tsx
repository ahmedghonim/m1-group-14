import { Text } from "@/app/_ui";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface ServesViewProps {
  src: string;
  title_ar: string;
  title_en: string;
  desc_ar: string;
  desc_en: string;
  revers?: boolean;
  lang?: string;
}

async function ServesView({
  revers,
  src,
  desc_ar,
  desc_en,
  title_ar,
  title_en,
  lang,
}: ServesViewProps) {
  return (
    <div
      className={clsx("flex gap-9 md:flex-row flex-col", {
        "md:flex-row-reverse": revers,
      })}
    >
      <Image
        src={src}
        width={479}
        height={383}
        alt="name"
        className={clsx(
          "md:max-w-[479px] md:max-h-[383px] w-full h-full rtl:rounded-bl-[60%] rounded-tl-[45px] ltr:rounded-br-[60%]"
        )}
      />

      <div className="flex flex-col md:items-start !text-start gap-4 w-full">
        <div
          className="!text-start font-bold md:text-3xl text-xl"
          dangerouslySetInnerHTML={{
            __html: lang === "ar" ? title_ar : title_en,
          }}
        />
        <div
          className="!text-start"
          dangerouslySetInnerHTML={{
            __html: lang === "ar" ? desc_ar : desc_en,
          }}
        />
      </div>
    </div>
  );
}

export default ServesView;
