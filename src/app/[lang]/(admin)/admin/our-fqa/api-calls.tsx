"use server";
import prisma from "@/db_prisma/db";
import uploadFile from "@/db_prisma/uploadFile";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { id, ...value } = object;

  try {
    const values = {
      answer: {
        ar: value["answer.ar"],
        en: value["answer.en"],
      } as any,
      question: {
        ar: value["question.ar"],
        en: value["question.en"],
      } as any,
    } as any;

    if (+id !== 0) {
      await prisma.fqa.update({
        where: {
          id: +id,
        },
        data: values,
      });
    } else {
      await prisma.fqa.create({
        data: {
          ...values,
        },
      });
    }
    revalidatePath("/[lang]/admin/our-fqa", "page");
    redirect("/ar/admin/our-fqa");
  } catch (error) {
    redirect("/ar/admin/our-fqa");
  }
};

async function deleteAction(formData: FormData) {
  const object = Object.fromEntries(formData);
  const { id } = object;
  try {
    const data = await prisma.fqa.delete({
      where: {
        id: +id,
      },
    });
    revalidatePath("/[lang]/admin/our-fqa", "page");
    redirect("/admin/our-fqa");
  } catch (error) {
    redirect("/admin/our-fqa");
  }
}

const getFqaData = async () => prisma.fqa.findMany();

const getFqaById = async (id: number) =>
  prisma.fqa.findUnique({
    where: {
      id: id,
    },
  });

export { upsertAction, deleteAction, getFqaData, getFqaById };
