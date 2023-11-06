"use server";
import prisma from "@/db_prisma/db";
import { revalidatePath } from "next/cache";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);

  const data = await getInoNumbersData();

  try {
    if (data?.id === undefined) {
      await prisma.numbersInfo.create({
        data: {
          id: 1,
          service: Number(object.service),
          customer: Number(object.customer),
          takeService: Number(object.takeService),
        } as any,
      });
    } else {
      await prisma.numbersInfo.update({
        where: {
          id: 1,
        },
        data: {
          service: Number(object.service),
          customer: Number(object.customer),
          takeService: Number(object.takeService),
        },
      });
    }
    revalidatePath("/[lang]/admin/our-industries", "page");
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

const getInoNumbersData = async () =>
  prisma.numbersInfo.findUnique({
    where: {
      id: 1,
    },
  });

export { upsertAction, getInoNumbersData };
