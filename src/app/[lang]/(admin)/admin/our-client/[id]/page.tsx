import * as yup from "yup";
import { Button } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import UploadImage from "@/app/_ui/upload-image";
import { deleteAction, getClientById, upsertAction } from "../api-calls";
import { Client } from "@prisma/client";

export type ClientTypes = any;

async function Page({
  params: { lang, id },
}: {
  params: {
    lang: string;
    id: number | "create";
  };
}) {
  const isUpdate = id !== "create";
  const data = isUpdate
    ? ((await getClientById(+id)) as any)
    : {
        image: "",
        id: null,
      };
  const { common } = await getDictionary(lang);
  return (
    <div>
      {isUpdate && (
        <form action={deleteAction}>
          <input type="hidden" name="id" value={+data?.id} />
          <Button style="danger" type="submit" className="mb-10">
            {common.delete}
          </Button>
        </form>
      )}
      <form action={upsertAction} className="grid grid-cols-12">
        <input type="hidden" name="id" value={+data?.id} />
        <div className="col-span-12 h-[450px]">
          <input type="file" name="image" />
          <UploadImage name="image" value={data?.image} />
        </div>

        <Button style="primary" type="submit" className="mt-10">
          {common.submit}
        </Button>
      </form>
    </div>
  );
}

export default Page;
