import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import UploadImage from "@/app/_ui/upload-image";
import TextEditor from "@/app/_ui/text-editor";
import {
  deleteAction,
  deleteImage,
  getBlogById,
  upsertAction,
} from "../api-calls";

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
        attachment_0: "",
        attachment_1: "",
        attachment_2: "",
        attachment_3: "",
        attachment_4: "",
        id: null,
      };
  console.log("data >>>> ", data);
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
      <div className="flex gap-10">
        {data?.attachment_0 && (
          <form action={deleteImage}>
            <input type="hidden" name="id" value={+data?.id} />
            <input type="hidden" name="num" value={0} />
            <Button style="danger" type="submit" className="mb-10">
              {common.delete} {common.image} {common.number} 1
            </Button>
          </form>
        )}
        {data?.attachment_1 && (
          <form action={deleteImage}>
            <input type="hidden" name="id" value={+data?.id} />
            <input type="hidden" name="num" value={1} />
            <Button style="danger" type="submit" className="mb-10">
              {common.delete} {common.image} {common.number} 2
            </Button>
          </form>
        )}
        {data?.attachment_2 && (
          <form action={deleteImage}>
            <input type="hidden" name="id" value={+data?.id} />
            <input type="hidden" name="num" value={2} />
            <Button style="danger" type="submit" className="mb-10">
              {common.delete} {common.image} {common.number} 3
            </Button>
          </form>
        )}
        {data?.attachment_3 && (
          <form action={deleteImage}>
            <input type="hidden" name="id" value={+data?.id} />
            <input type="hidden" name="num" value={3} />
            <Button style="danger" type="submit" className="mb-10">
              {common.delete} {common.image} {common.number} 4
            </Button>
          </form>
        )}
        {data?.attachment_4 && (
          <form action={deleteImage}>
            <input type="hidden" name="id" value={+data?.id} />
            <input type="hidden" name="num" value={4} />
            <Button style="danger" type="submit" className="mb-10">
              {common.delete} {common.image} {common.number} 5
            </Button>
          </form>
        )}
      </div>
      <form action={upsertAction} className="grid grid-cols-12">
        <input type="hidden" name="id" value={+data?.id} />
        <div className="col-span-12 h-[650px] w-[350px]">
          <input type="file" name="image" />
          <UploadImage name="image" value={data?.image} />
        </div>
        <div className="flex col-span-12 h-[250px] gap-10 mt-10 me-20">
          <div>
            <label htmlFor="">
              {common.image} {common.number} 1
            </label>
            <input type="file" name="attachment_0" />
            <UploadImage name="attachment[0]" value={data?.attachment_0} />
          </div>
          <div>
            <label htmlFor="">
              {common.image} {common.number} 2
            </label>
            <input type="file" name="attachment_1" />
            <UploadImage name="attachment_1" value={data?.attachment_1} />
          </div>
          <div>
            <label htmlFor="">
              {common.image} {common.number} 3
            </label>
            <input type="file" name="attachment_2" />
            <UploadImage name="attachment_2" value={data?.attachment_2} />
          </div>
          <div>
            <label htmlFor="">
              {common.image} {common.number} 4
            </label>
            <input type="file" name="attachment_3" />
            <UploadImage name="attachment_3" value={data?.attachment_3} />
          </div>
          <div>
            <label htmlFor="">
              {common.image} {common.number} 5
            </label>
            <input type="file" name="attachment_4" />
            <UploadImage name="attachment_4" value={data?.attachment_4} />
          </div>
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
        </div>

        <Button style="primary" type="submit" className="mt-10">
          {common.submit}
        </Button>
      </form>
    </div>
  );
}

export default Page;
