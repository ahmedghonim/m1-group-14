import { getServiceData, updateFavorite } from "./api-calls";
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
              <form action={updateFavorite} className="flex gap-3 pb-2">
                <select name="favoriteNum" defaultValue={favoriteNum}>
                  <option value="null">{common.favorite}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                </select>
                <input type="hidden" name="id" value={id} />
                <Button
                  style="primary"
                  type="submit"
                  className="rounded-lg !px-2 !py-1 "
                >
                  {common.save}
                </Button>
              </form>
              <Link href={`/${lang}/admin/our-services/${id}`}>
                <ServesView
                  src={image}
                  desc={JSON.parse(description)[lang]}
                  title={JSON.parse(title)[lang]}
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
