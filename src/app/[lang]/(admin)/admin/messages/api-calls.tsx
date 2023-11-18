"use server";
import prisma from "@/db_prisma/db";
import { redirect } from "next/navigation";

const createMessagesAction = async (formData: FormData) => {
  const object = Object.fromEntries(formData) as any;

  try {
    await prisma.messages.create({
      data: {
        first_name: object.first_name,
        last_name: object.last_name,
        email: object.email,
        phone: object.phone,
        subject: object.subject,
        message: object.message,
      },
    });

    redirect(`/thanx`);
  } catch (error) {
    console.log("error >>>> ", error);
  }
};

async function deleteAction(formData: FormData) {
  const object = Object.fromEntries(formData);
  const { id } = object;
  try {
    const data = await prisma.messages.delete({
      where: {
        id: +id,
      },
    });
  } catch (error) {}
}

const getMessagesData = async () => prisma.messages.findMany();

export {
  createMessagesAction,
  deleteAction,
  getMessagesData as getContactData,
};
