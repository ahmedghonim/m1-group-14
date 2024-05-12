"use client";
import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { IconRender, Props, mainClassName, variants } from "./helpers";
import { sendGAEvent } from "@next/third-parties/google";
interface LinkButtonProps extends Props {
  href: string;
  lang?: string;
}

function LinkButton({
  style = "primary",
  width = "normal",
  text = "center",
  className,
  children,
  size = "base",
  type,
  rounded = "default",
  href,
  icon,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        mainClassName,
        className,
        variants.size[size],
        variants.text[text],
        variants.width[width],
        variants.style[style],
        variants.rounded[rounded]
      )}
      onClick={() =>
        sendGAEvent({ action: "click", category: "link", label: href })
      }
      type={type}
    >
      <div className="flex items-center justify-between gap-3">
        {icon && IconRender(icon)} {children}
      </div>
    </Link>
  );
}

export default LinkButton;
