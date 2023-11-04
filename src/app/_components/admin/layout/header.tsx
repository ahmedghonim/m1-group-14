"use client";
import { useTranslation } from "@/i18n/client";
import { usePathname } from "next/navigation";

import React from "react";

function AdminHeader() {
  const { t } = useTranslation("pages-title");
  const asPath = usePathname();
  const currentPath = asPath.split("/").reverse()[0];
  return <h1 className="text-[28px] font-bold">{t(currentPath)}</h1>;
}

export default AdminHeader;
