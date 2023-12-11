import { getQuiteData, upsertAction } from "./api-calls";
import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";

export type AboutTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = (await getQuiteData()) as AboutTypes;
  const { common } = await getDictionary(lang);

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 flex flex-1 flex-col gap-10 mt-10">
          <Input
            name="quite.ar"
            label={common.ar_quite}
            defaultValue={data?.quite?.ar}
          />
          <Input
            name="quite.en"
            label={common.en_quite}
            defaultValue={data?.quite?.en}
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
