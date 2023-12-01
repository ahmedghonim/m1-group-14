import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import UploadImage from "@/app/_ui/upload-image";
import TextEditor from "@/app/_ui/text-editor";
import { deleteAction, getBlogById, upsertAction } from "../api-calls";
import { Service } from "@prisma/client";

export type ServiceTypes = any;

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
    ? ((await getBlogById(+id)) as any)
    : {
        title: { ar: "", en: "" },
        description: { ar: "", en: "" },
        image: "",
        id: null,
      };
  const { common } = await getDictionary(lang);
  return (
    <div>
      {/* id          Int    @id @default(autoincrement())
  





  attachment  String */}
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
        <div className="col-span-12 h-[450px] w-[450px]">
          <input type="file" name="image" />
          <UploadImage name="image" value={data?.image} />
        </div>

        <div className="col-span-12 flex flex-1 flex-col gap-10 mt-10">
          <Input
            name="date"
            label={common.date}
            type="date"
            defaultValue={data?.date}
          />
          <Input
            name="author"
            label={common.author}
            defaultValue={data?.author}
          />
          <Input
            name="category"
            label={common.category}
            defaultValue={data?.category}
          />
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
          <Input
            name="attachment"
            label={common.attachment}
            defaultValue={data?.attachment}
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
