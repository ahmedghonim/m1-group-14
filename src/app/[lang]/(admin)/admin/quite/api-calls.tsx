"use server";
import prisma from "@/db_prisma/db";
import { revalidatePath } from "next/cache";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { ...value } = object;
  const data = await getQuiteData();

  try {
    const values = {
      quite: {
        ar: value["quite.ar"],
        en: value["quite.en"],
      } as any,
    } as any;

    if (data?.id === undefined) {
      await prisma.quite.create({
        data: {
          id: 1,
          ...values,
        },
      });
    } else {
      await prisma.quite.update({
        where: {
          id: 1,
        },
        data: values,
      });
    }
    revalidatePath("/[lang]/admin/quite", "page");
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

const getQuiteData = async () =>
  prisma.quite.findUnique({
    where: {
      id: 1,
    },
  });

export { upsertAction, getQuiteData };
