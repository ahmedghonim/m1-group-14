import * as yup from "yup";
import { deleteAction, getMessagesData } from "./api-calls";
import { Button } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import Link from "next/link";
import { Service } from "@prisma/client";
import ServesView from "@/app/_components/public-page/our-serves";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { common } = await getDictionary(lang);
  const data = await getMessagesData();

  return (
    <div>
      <div>
        {data.map(
          (
            { first_name, last_name, email, phone, subject, message, id }: any,
            index
          ) => (
            <div
              key={index}
              className="shadow-md m-5 rounded-md hover:shadow-xl"
            >
              <form action={deleteAction} className="w-full flex justify-end">
                <input type="hidden" name="id" value={+id} />
                <Button style="danger" type="submit">
                  {common.delete}
                </Button>
              </form>
              <div className="flex justify-between items-center p-5">
                <div className="flex items-center gap-5">
                  <div className="flex flex-col  gap-2">
                    <div className="text-sm text-dark-100 font-bold">
                      {common.client_name}: {first_name} {last_name}
                    </div>
                    <div className="text-sm text-dark-200">
                      {common.email}: {email}
                    </div>

                    <div className="text-sm text-dark-100 font-bold">
                      {common.phone}: {phone}
                    </div>
                    <div className="text-sm text-dark-100 font-bold">
                      {common.subject}: {subject}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center p-5">
                <div className="flex items-center gap-5">
                  <div className="text-sm text-dark-100 font-bold">
                    {message}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Page;
