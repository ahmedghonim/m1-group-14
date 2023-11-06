"use server";
import prisma from "@/db_prisma/db";
import uploadFile from "@/db_prisma/uploadFile";
import { revalidatePath } from "next/cache";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { image, ...value } = object;
  const data = await getAboutData();
  console.log("value >>>> ", value);
  try {
    let imageUrl = "";

    if (image instanceof File && image.size !== 0) {
      const { url } = await uploadFile(image);
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
    if (data?.id === undefined) {
      await prisma.about.create({
        data: {
          id: 1,
          ...values,
        },
      });
    } else {
      await prisma.about.update({
        where: {
          id: 1,
        },
        data: values,
      });
    }
    revalidatePath("/[lang]/admin/about-us", "page");
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

const getAboutData = async () =>
  prisma.about.findUnique({
    where: {
      id: 1,
    },
  });

export { upsertAction, getAboutData };
