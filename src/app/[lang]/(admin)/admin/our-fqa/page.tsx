import { getFqaData } from "./api-calls";
import { Button } from "@/app/_ui";
import { translation } from "@/i18n";
import Link from "next/link";
import { SingleQuestion } from "@/app/_components/public-page/fqa/single-fqa";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { t } = await translation(lang, "common");
  const data = await getFqaData();
  return (
    <div>
      <Button style="primary">
        <Link href={`/${lang}/admin/our-fqa/create`}>{t("create_new")}</Link>
      </Button>
      <div>
        {data.map(({ answer, question, id }: any, index) => (
          <div key={index} className=" p-5">
            <Link
              className="text-green-500 px-6 hover:text-green-700"
              href={`/${lang}/admin/our-fqa/${id}`}
            >
              {t("edit")}
            </Link>
            <SingleQuestion question={question[lang]} answer={answer[lang]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
