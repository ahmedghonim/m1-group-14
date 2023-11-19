"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import LangIcon from "@svg/lang.svg";

function ChangeLang() {
  const asPath = usePathname();
  return (
    <div className="flex items-center gap-2">
      <LangIcon />
      <Link
        href={`/en/${asPath.split("/")[2] || ""}`}
        className={clsx("text-black", {
          "text-opacity-50": "en",
        })}
      >
        {"EN"}
      </Link>
      <Link
        href={`/ar/${asPath.split("/")[2] || ""}`}
        className={clsx("text-black", {
          "text-opacity-50": "ar",
        })}
      >
        {"AR"}
      </Link>
    </div>
  );
}

export default ChangeLang;
