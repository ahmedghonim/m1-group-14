"use server";
import prisma from "@/db_prisma/db";
import uploadFile from "@/db_prisma/uploadFile";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { image, id, ...value } = object;

  try {
    let imageUrl = "";

    if (image instanceof File && image.size !== 0) {
      const { url } = await uploadFile(image);
      imageUrl = url;
    }

    const values = {
      image: imageUrl,
    } as any;
    if (imageUrl === "") {
      delete values.image;
    }

    if (+id !== 0) {
      await prisma.client.update({
        where: {
          id: +id,
        },
        data: values,
      });
    } else {
      await prisma.client.create({
        data: {
          ...values,
        },
      });
    }
    revalidatePath("/[lang]/admin/client-us", "page");
    redirect("/ar/admin/our-client");
  } catch (error) {
    redirect("/ar/admin/our-client");
  }
};

async function deleteAction(formData: FormData) {
  const object = Object.fromEntries(formData);
  const { id } = object;
  try {
    const data = await prisma.client.delete({
      where: {
        id: +id,
      },
    });
    revalidatePath("/[lang]/admin/our-client", "page");
    redirect("/admin/our-client");
  } catch (error) {
    redirect("/admin/our-client");
  }
}

const getClientData = async () => prisma.client.findMany();

const getClientById = async (id: number) =>
  prisma.client.findUnique({
    where: {
      id: id,
    },
  });

export { upsertAction, deleteAction, getClientData, getClientById };
