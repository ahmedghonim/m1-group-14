import { getContactsData, upsertAction } from "./api-calls";
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
  const data = (await getContactsData()) as AboutTypes;
  const { common } = await getDictionary(lang);

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 flex flex-1 flex-col gap-10 mt-10">
          <Input
            name="phone[0]"
            label={common.phone}
            defaultValue={data?.phone[0]}
          />
          <Input
            name="phone[1]"
            label={common.phone}
            defaultValue={data?.phone[1]}
          />
          <Input
            name="email[0]"
            label={common.email}
            defaultValue={data?.email[0]}
          />
          <Input
            name="email[1]"
            label={common.email}
            defaultValue={data?.email[1]}
          />
          <Input label={common.fb} defaultValue={data?.fb} name="fb" />
          <Input label={common.tw} defaultValue={data?.tw} name="tw" />
          <Input label={common.insta} defaultValue={data?.insta} name="insta" />
          <Input
            label={common.linked}
            defaultValue={data?.linked}
            name="linked"
          />
          <Input label={common.snap} defaultValue={data?.snap} name="snap" />
          <TextEditor
            label={common.address}
            value={data?.address[0]}
            name="address[0]"
          />
          <TextEditor
            label={common.address}
            value={data?.address[1]}
            name="address[1]"
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
