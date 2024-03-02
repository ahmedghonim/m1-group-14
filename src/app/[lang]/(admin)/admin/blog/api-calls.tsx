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
    let attachment_0 = "";
    let attachment_1 = "";
    let attachment_2 = "";
    let attachment_3 = "";
    let attachment_4 = "";

    if ((image as any).size !== 0) {
      const { url } = await uploadFile(image as any);
      imageUrl = url;
    }

    if ((value["attachment_0"] as File).size !== 0) {
      const { url } = await uploadFile(value["attachment_0"] as File);

      attachment_0 = url;
    }

    if ((value["attachment_1"] as File).size !== 0) {
      const { url } = await uploadFile(value["attachment_1"] as File);
      attachment_1 = url;
    }

    if ((value["attachment_2"] as File).size !== 0) {
      const { url } = await uploadFile(value["attachment_2"] as File);
      attachment_2 = url;
    }

    if ((value["attachment_3"] as File).size !== 0) {
      const { url } = await uploadFile(value["attachment_3"] as File);
      attachment_3 = url;
    }

    if ((value["attachment_4"] as File).size !== 0) {
      const { url } = await uploadFile(value["attachment_4"] as File);

      attachment_4 = url;
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
      date: value["date"],
      author: value["author"],
      category: value["category"],
      attachment_0,
      attachment_1,
      attachment_2,
      attachment_3,
      attachment_4,
    } as any;

    if (imageUrl === "") {
      delete values.image;
    }
    if (attachment_0 === "") {
      delete values.attachment_0;
    }
    if (attachment_1 === "") {
      delete values.attachment_1;
    }
    if (attachment_2 === "") {
      delete values.attachment_2;
    }
    if (attachment_3 === "") {
      delete values.attachment_3;
    }
    if (attachment_4 === "") {
      delete values.attachment_4;
    }

    if (+id !== 0) {
      await prisma.blog.update({
        where: {
          id: +id,
        },
        data: values,
      });
    } else {
      await prisma.blog.create({
        data: {
          ...values,
        },
      });
    }
    revalidatePath("/[lang]/admin/blog", "page");
    redirect("/admin/blog");
  } catch (error) {
    redirect("/admin/blog");
  }
};
const deleteImage = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { num, id } = object;

  try {
    await prisma.blog.update({
      where: {
        id: +id,
      },
      data: {
        [`attachment_${num}`]: "",
      },
    });
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

async function deleteAction(formData: FormData) {
  const object = Object.fromEntries(formData);
  const { id } = object;
  try {
    const data = await prisma.blog.delete({
      where: {
        id: +id,
      },
    });
    revalidatePath("/[lang]/admin/blog", "page");
    redirect("/admin/blog");
  } catch (error) {
    redirect("/admin/blog");
  }
}

const getBlogData = async () => prisma.blog.findMany();

const getBlogById = async (id: number) =>
  prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

export { upsertAction, deleteAction, getBlogData, getBlogById, deleteImage };
