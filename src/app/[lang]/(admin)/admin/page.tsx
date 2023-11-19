import { getHeroData, upsertAction } from "./api-calls";
import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import UploadImage from "@/app/_ui/upload-image";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = (await getHeroData()) as HeroTypes;
  const { common } = await getDictionary(lang);

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 h-[450px]">
          <input type="file" name="image" />
          <UploadImage name="image" value={data?.image} />
        </div>

        <div className="col-span-12 flex flex-1 flex-col gap-6 mt-10">
          <Input
            name="title.ar"
            label={common.ar_title}
            defaultValue={data?.title?.ar}
          />
          <Input
            name="title.en"
            label={common.en_title}
            defaultValue={data?.title?.en}
          />

          <Input
            name="subtitle.ar"
            label={common.ar_subtitle}
            defaultValue={data?.subtitle?.ar}
          />
          <Input
            name="subtitle.en"
            label={common.en_subtitle}
            defaultValue={data?.subtitle?.en}
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
