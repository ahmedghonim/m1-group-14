"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import LangIcon from "@svg/lang.svg";
import { sendGTMEvent } from "@next/third-parties/google";

function ChangeLang() {
  const asPath = usePathname();
  return (
    <div className="flex items-center gap-2">
      <LangIcon />
      <Link
        aria-label="Switch to English"
        href={`/en/${asPath.split("/")[2] || ""}`}
        className={clsx("text-dark-100", {
          "text-opacity-50": "en",
        })}
        onClick={() =>
          sendGTMEvent({
            event: "buttonClicked",
            value: "en",
          })
        }
      >
        {"EN"}
      </Link>
      <Link
        aria-label="Switch to Arabic"
        href={`/ar/${asPath.split("/")[2] || ""}`}
        className={clsx("text-dark-100", {
          "text-opacity-50": "ar",
        })}
        onClick={() =>
          sendGTMEvent({
            event: "buttonClicked",

            value: "ar",
          })
        }
      >
        {"AR"}
      </Link>
    </div>
  );
}

export default ChangeLang;
