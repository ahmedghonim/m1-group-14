"use client";

import { usePathname } from "next/navigation";

import React from "react";

function AdminHeader() {
  // const { pages-title } = getDictionary(lang);
  const asPath = usePathname();
  const currentPath = asPath.split("/").reverse()[0];
  return <h1 className="text-[28px] font-bold">{currentPath}</h1>;
}

export default AdminHeader;
