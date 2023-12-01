"use server";
import prisma from "@/db_prisma/db";
import uploadFile from "@/db_prisma/uploadFile";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { image, id, ...value } = object;

  try {
    let imageUrl = "";

    if (image instanceof File && image.size !== 0) {
      const { url } = await put(image.name, image, {
        access: "public",
        token: "vercel_blob_rw_OBYfhkJQE6LLgeTe_tSgcL7V2GiNEIf7EsvIWwVygZdfVO2",
      });
      imageUrl = url;
    }

    const values = {
      title: {
        ar: value["title.ar"],
        en: value["title.en"],
      } as any,
      description: {
        ar: value["description.ar"],
        en: value["description.en"],
      } as any,
      image: imageUrl,
    } as any;
    if (imageUrl === "") {
      delete values.image;
    }
    if (+id !== 0) {
      await prisma.service.update({
        where: {
          id: +id,
        },
        data: values,
      });
    } else {
      await prisma.service.create({
        data: {
          ...values,
        },
      });
    }
    revalidatePath("/[lang]/admin/service-us", "page");
    redirect("/ar/admin/our-services");
  } catch (error) {
    redirect("/ar/admin/our-services");
  }
};

async function deleteAction(formData: FormData) {
  const object = Object.fromEntries(formData);
  const { id } = object;
  try {
    const data = await prisma.service.delete({
      where: {
        id: +id,
      },
    });
    revalidatePath("/[lang]/admin/our-services", "page");
    redirect("/admin/our-services");
  } catch (error) {
    redirect("/admin/our-services");
  }
}

const getServiceData = async () => prisma.service.findMany();

const getServiceById = async (id: number) =>
  prisma.service.findUnique({
    where: {
      id: id,
    },
  });

export { upsertAction, deleteAction, getServiceData, getServiceById };
