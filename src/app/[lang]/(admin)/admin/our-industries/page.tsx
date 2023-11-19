import { getInoNumbersData, upsertAction } from "./api-calls";
import * as yup from "yup";
import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";

export type NumbersInfo = any;
async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = (await getInoNumbersData()) as any;
  const { common } = await getDictionary(lang);

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 flex flex-1 flex-col gap-6 mt-10">
          <Input
            name="service"
            label={common.service}
            type="number"
            defaultValue={data?.service}
          />

          <Input
            name="customer"
            type="number"
            label={common.usefully}
            max={100}
            defaultValue={data?.customer}
          />
          <Input
            name="takeService"
            type="number"
            label={common.client}
            defaultValue={data?.takeService}
          />
        </div>

        <Button style="primary" type="submit" className="mt-10">
          {common.submit}
        </Button>
      </form>
    </div>
  );
}

export default Page;
