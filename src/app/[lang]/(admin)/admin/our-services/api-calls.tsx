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
    if ((image as any).size !== 0) {
      const { url } = await uploadFile(image as File);
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
const updateFavorite = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { favoriteNum, id } = object;

  const oldService = await prisma.service.findMany({
    where: {
      favoriteNum: +favoriteNum,
    },
  });

  try {
    if (oldService.length > 0) {
      await prisma.service.update({
        where: {
          id: oldService[0].id,
        },
        data: {
          favoriteNum: null,
        },
      });
    }

    await prisma.service.update({
      where: {
        id: +id,
      },
      data: {
        favoriteNum: +favoriteNum,
      },
    });

    revalidatePath("/admin/service-us", "page");
  } catch (error) {
    console.log("error >>>> ", error);
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
    redirect("/ar/admin/our-services");
  } catch (error) {
    redirect("/ar/admin/our-services");
  }
}

const getServiceData = async () =>
  prisma.service.findMany({
    orderBy: {
      favoriteNum: "asc", // 'asc' for ascending order
    },
  });

const getServiceById = async (id: number) =>
  prisma.service.findUnique({
    where: {
      id: id,
    },
  });

export {
  upsertAction,
  deleteAction,
  getServiceData,
  getServiceById,
  updateFavorite,
};
