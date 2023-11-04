import React from "react";
import { languages } from "@/i18n/settings";
import LayoutProvider from "../../_providers/layout-provider";

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
    <LayoutProvider params={params}>
      <main>{children}</main>
    </LayoutProvider>
  );
}
