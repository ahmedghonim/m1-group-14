"use server";
import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/db_prisma/db";
import { cookies } from "next/headers";

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  await prisma.user.deleteMany();

  redirect(`/${lang}/register`);

  return (
    <div className="flex h-screen bg-[#000]">
      <div className="m-auto w-2/6 ">
        <h1 className="mb-16 text-[64px] text-primary-100">Remove All </h1>
      </div>
    </div>
  );
}

export default Page;
