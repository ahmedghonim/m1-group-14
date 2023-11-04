import { getHeroData, upsertAction } from "./api-calls";
import * as yup from "yup";
import { Button, Input } from "@/app/_ui";
import { translation } from "@/i18n";
import UploadImage from "@/app/_ui/upload-image";

export const validationSchema = yup.object({
  id: yup.string().optional(),
  image: yup.string().optional(),
  title: yup.object({
    ar: yup.string().min(1, { message: "" }).required(),
    en: yup.string().min(1, { message: "" }).required(),
  }),
  subtitle: yup.object({
    ar: yup.string().min(1, { message: "" }).required(),
    en: yup.string().min(1, { message: "" }).required(),
  }),
});

export type HeroTypes = yup.InferType<typeof validationSchema>;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const data = (await getHeroData()) as HeroTypes;
  const { t } = await translation(lang, "common");

  return (
    <div>
      <form action={upsertAction} className="grid grid-cols-12">
        <div className="col-span-12 h-[450px]">
          <input type="file" name="image" defaultValue={data?.image} />
          <UploadImage name="image" value={data?.image} />
        </div>

        <div className="col-span-12 flex flex-1 flex-col gap-6 mt-10">
          <Input
            name="title.ar"
            label={t("ar_title")}
            defaultValue={data?.title?.ar}
          />
          <Input
            name="title.en"
            label={t("en_title")}
            defaultValue={data?.title?.en}
          />

          <Input
            name="subtitle.ar"
            label={t("ar_subtitle")}
            defaultValue={data?.subtitle?.ar}
          />
          <Input
            name="subtitle.en"
            label={t("en_subtitle")}
            defaultValue={data?.subtitle?.en}
          />
        </div>

        <Button style="primary" type="submit" className="mt-10">
          {t("submit")}
        </Button>
      </form>
    </div>
  );
}

export default Page;
