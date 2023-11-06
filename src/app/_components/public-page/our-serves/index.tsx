import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface ServesViewProps {
  src: string;
  title: string;
  desc: string;
  revers?: boolean;
}

async function ServesView({ revers, src, title, desc }: ServesViewProps) {
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
            __html: title,
          }}
        />
        <div
          className="!text-start"
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />
      </div>
    </div>
  );
}

export default ServesView;
