import FAQIntro from "@/app/_components/public-page/faq/intro-sec";
import FAQS from "@/app/_components/public-page/faq/single-faq";
import { translation } from "@/i18n";
import Head from "next/head";
import React from "react";
import { getFqaData } from "../../(admin)/admin/our-fqa/api-calls";

export default async function FAQ({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const questions = (await getFqaData()) as any;
  const { t } = await translation(lang, "common");

  return (
    <>
      <Head>
        <title>{t("pages-title:faq")}</title>
      </Head>
      <FAQIntro lang={lang} />
      <FAQS questions={questions} lang={lang} />
    </>
  );
}
