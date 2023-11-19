import { getAboutData, upsertAction } from "./api-calls";
import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import UploadImage from "@/app/_ui/upload-image";
import TextEditor from "@/app/_ui/text-editor";

export type AboutTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = (await getAboutData()) as AboutTypes;
  const { common } = await getDictionary(lang);

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 h-[450px]">
          <input type="file" name="image" />
          <UploadImage name="image" value={data?.image} />
        </div>

        <div className="col-span-12 flex flex-1 flex-col gap-10 mt-10">
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
          <TextEditor
            label={common.ar_desc}
            value={data?.description?.ar}
            name="description.ar"
          />
          <TextEditor
            label={common.en_desc}
            value={data?.description?.en}
            name="description.en"
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
