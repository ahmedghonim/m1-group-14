import * as yup from "yup";
import { getClientData } from "./api-calls";
import { Button } from "@/app/_ui";
import { translation } from "@/i18n";
import Link from "next/link";
import Image from "next/image";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { t } = await translation(lang, "common");
  const data = await getClientData();

  return (
    <div>
      <Button style="primary">
        <Link href={`/${lang}/admin/our-client/create`}>{t("create_new")}</Link>
      </Button>
      <div>
        {data.map(({ image, id }: any, index) => (
          <div
            key={index}
            className="shadow-md m-5  p-5 h-[200px] w-[200px] rounded-md hover:shadow-xl"
          >
            <Link href={`/${lang}/admin/our-client/${id}`}>
              <Image
                src={image}
                width={200}
                height={200}
                alt="image"
                className="h-full w-full"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
