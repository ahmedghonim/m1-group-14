import React from "react";

import { languages } from "@/i18n/settings";
import DashboardLayout from "@/app/_components/admin/layout";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <DashboardLayout params={params}>
      <main>{children}</main>
    </DashboardLayout>
  );
}
