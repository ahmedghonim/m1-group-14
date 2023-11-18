"use server";
import React from "react";
import { Button, Input } from "@/app/_ui";
import { onSubmit } from "./api-call";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const initialValues: any = {
  username: "",
  password: "",
};
function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const user = cookies().get("user");
  if (user?.value === "success") {
    redirect(`/${lang}/admin`);
  }
  return (
    <div className="flex h-screen bg-[#000]">
      <div className="m-auto w-2/6 ">
        <h1 className="mb-16 text-[64px] text-primary-100">Login</h1>
        <form action={onSubmit} className="flex flex-col gap-5">
          <Input name="name" className="bg-white p-2" />
          <Input name="password" className="bg-white p-2" type="" />
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default Page;
