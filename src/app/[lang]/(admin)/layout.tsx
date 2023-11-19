import React from "react";
import DashboardLayout from "@/app/_components/admin/layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/db_prisma/db";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const user = cookies().get("user");
  const data = await prisma.user.findMany();
  if (user?.value !== "success") {
    redirect("/login");
  }

  if (data.length === 0) {
    redirect("/register");
  }
  return (
    <DashboardLayout params={params}>
      <main>{children}</main>
    </DashboardLayout>
  );
}
