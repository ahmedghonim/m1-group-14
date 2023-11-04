"use server";
import prisma from "@/db_prisma/db";
import uploadFile from "@/db_prisma/uploadFile";
import { revalidatePath } from "next/cache";
import { validationSchema } from "./page";
import { toast } from "react-toastify";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { image, ...value } = object;
  const data = await getHeroData();

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
      subtitle: {
        ar: value["subtitle.ar"],
        en: value["subtitle.en"],
      } as any,
      image: imageUrl,
    } as any;
    validationSchema.validateSync(values, { abortEarly: false });
    if (imageUrl === "") {
      delete values.image;
    }
    if (data?.id === undefined) {
      await prisma.hero.create({
        data: {
          id: "1",
          ...values,
        },
      });
    } else {
      await prisma.hero.update({
        where: {
          id: "1",
        },
        data: values,
      });
    }
    revalidatePath("/[lang]/admin", "page");
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

const getHeroData = async () =>
  prisma.hero.findUnique({
    where: {
      id: "1",
    },
  });

export { upsertAction, getHeroData };
