"use server";
import prisma from "@/db_prisma/db";
import { revalidatePath } from "next/cache";

const upsertAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData);
  const { ...value } = object;
  const data = await getContactsData();
  try {
    const values = {
      phone: [value["phone[0]"], value["phone[1]"]],
      email: [value["email[0]"], value["email[1]"]],
      address: [value["address[0]"], value["address[1]"]],
      fb: value["fb"],
      tw: value["fb"],
      insta: value["insta"],
      linked: value["linked"],
      snap: value["snap"],
    } as any;

    if (data?.id === undefined) {
      await prisma.contact.create({
        data: {
          id: 1,
          ...values,
        },
      });
    } else {
      await prisma.contact.update({
        where: {
          id: 1,
        },
        data: values,
      });
    }
    revalidatePath("/[lang]/admin/contacts", "page");
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

const getContactsData = async () =>
  prisma.contact.findUnique({
    where: {
      id: 1,
    },
  });

export { upsertAction, getContactsData };
