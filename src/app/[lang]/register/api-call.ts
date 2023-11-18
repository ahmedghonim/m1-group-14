"use server";

import prisma from "@/db_prisma/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const onSubmit = async (formData: FormData) => {
  const object = Object.fromEntries(formData) as any;

  try {
    if (object.code === "1234") {
      const data = await prisma.user.create({
        data: {
          name: object.name,
          password: object.password,
        },
      });
      if (data) {
        cookies().set("register", "success");
        cookies().set("user", "error");
      }
    }
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

export { onSubmit };
