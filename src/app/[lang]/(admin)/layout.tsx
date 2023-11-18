import React from "react";
import { languages } from "@/i18n/settings";
import DashboardLayout from "@/app/_components/admin/layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const user = cookies().get("user");
  if (user?.value !== "success") {
    redirect("/login");
  }
  return (
    <DashboardLayout params={params}>
      <main>{children}</main>
    </DashboardLayout>
  );
}
