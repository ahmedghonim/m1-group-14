import * as yup from "yup";
import { Button } from "@/app/_ui";
import { translation } from "@/i18n";
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
  const { t } = await translation(lang, "common");
  return (
    <div>
      {isUpdate && (
        <form action={deleteAction}>
          <input type="hidden" name="id" value={+data?.id} />
          <Button style="danger" type="submit" className="mb-10">
            {t("delete")}
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
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}

export default Page;
