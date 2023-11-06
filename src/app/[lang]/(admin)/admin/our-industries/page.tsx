import { getInoNumbersData, upsertAction } from "./api-calls";
import * as yup from "yup";
import { Button, Input } from "@/app/_ui";
import { translation } from "@/i18n";

export type NumbersInfo = any;
async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = (await getInoNumbersData()) as any;
  const { t } = await translation(lang, "common");

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 flex flex-1 flex-col gap-6 mt-10">
          <Input
            name="service"
            label={t("service")}
            type="number"
            defaultValue={data?.service}
          />

          <Input
            name="customer"
            type="number"
            label={t("usefully")}
            max={100}
            defaultValue={data?.customer}
          />
          <Input
            name="takeService"
            type="number"
            label={t("client")}
            defaultValue={data?.takeService}
          />
        </div>

        <Button style="primary" type="submit" className="mt-10">
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}

export default Page;
