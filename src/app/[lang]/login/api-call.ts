"use server";

import prisma from "@/db_prisma/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const onSubmit = async (formData: FormData) => {
  const object = Object.fromEntries(formData) as any;

  try {
    const data = await prisma.user.findFirst({
      where: {
        name: object.name,
        password: object.password,
      },
    });

    if (data) {
      cookies().set("user", "success");
    } else {
      cookies().set("user", "error");
    }
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

export { onSubmit };
