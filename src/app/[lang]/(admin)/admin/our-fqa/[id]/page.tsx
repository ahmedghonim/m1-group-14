import { Button, Input } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import TextEditor from "@/app/_ui/text-editor";
import { deleteAction, getFqaById, upsertAction } from "../api-calls";

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
    ? ((await getFqaById(+id)) as any)
    : {
        question: { ar: "", en: "" },
        answer: { ar: "", en: "" },

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

        <div className="col-span-12 flex flex-1 flex-col gap-10 mt-10">
          <Input
            name="question.ar"
            label={common.ar_question}
            defaultValue={data?.question?.ar}
          />
          <Input
            name="question.en"
            label={common.en_question}
            defaultValue={data?.question?.en}
          />
          <TextEditor
            label={common.ar_answer}
            value={data?.answer?.ar}
            name="answer.ar"
          />
          <TextEditor
            label={common.en_answer}
            value={data?.answer?.en}
            name="answer.en"
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
