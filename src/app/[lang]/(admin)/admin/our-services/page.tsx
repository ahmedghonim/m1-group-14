import * as yup from "yup";
import { deleteAction, getServiceData } from "./api-calls";
import { Button } from "@/app/_ui";
import { translation } from "@/i18n";
import Link from "next/link";
import { Service } from "@prisma/client";
import ServesView from "@/app/_components/public-page/our-serves";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { t } = await translation(lang, "common");
  const data = await getServiceData();

  return (
    <div>
      <Button style="primary">
        <Link href={`/${lang}/admin/our-services/create`}>
          {t("create_new")}
        </Link>
      </Button>
      <div>
        {data.map(
          ({ image, title, description, favoriteNum, id }: any, index) => (
            <div
              key={index}
              className="shadow-md m-5 rounded-md hover:shadow-xl"
            >
              <Link href={`/${lang}/admin/our-services/${id}`}>
                <ServesView
                  src={image}
                  desc={description[lang]}
                  title={title[lang]}
                />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Page;
