import { getServiceData } from "./api-calls";
import { Button } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import Link from "next/link";
import ServesView from "@/app/_components/public-page/our-serves";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { common } = await getDictionary(lang);
  const data = await getServiceData();

  return (
    <div>
      <Button style="primary">
        <Link href={`/${lang}/admin/our-services/create`}>
          {common.create_new}
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
