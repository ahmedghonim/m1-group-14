import React from "react";

import LayoutProvider from "../../_providers/layout-provider";

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
