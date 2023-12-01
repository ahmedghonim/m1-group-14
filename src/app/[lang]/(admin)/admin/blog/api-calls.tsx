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

    if (typeof image !== "string") {
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
      date: value["date"],
      author: value["author"],
      category: value["category"],
      attachment: value["attachment"],
    } as any;
    if (imageUrl === "") {
      delete values.image;
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
    redirect("/ar/admin/blog");
  } catch (error) {
    redirect("/ar/admin/blog");
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
    revalidatePath("/[lang]/admin/our-blogs", "page");
    redirect("/admin/our-blogs");
  } catch (error) {
    redirect("/admin/our-blogs");
  }
}

const getBlogData = async () => prisma.blog.findMany();

const getBlogById = async (id: number) =>
  prisma.blog.findUnique({
    where: {
      id: id,
    },
  });

export { upsertAction, deleteAction, getBlogData, getBlogById };
