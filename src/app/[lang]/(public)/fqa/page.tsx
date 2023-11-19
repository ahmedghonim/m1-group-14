import { getDictionary } from "@/dictionary";
import Head from "next/head";
import React from "react";
import { getFqaData } from "../../(admin)/admin/our-fqa/api-calls";
import FAQIntro from "@/app/_components/public-page/faq/intro-sec";
import FAQS from "@/app/_components/public-page/faq/single-faq";

export default async function FAQ({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const questions = (await getFqaData()) as any;
  const { common } = await getDictionary(lang);

  return (
    <>
      <Head>
        <title>{common["fqa"]}</title>
      </Head>
      <FAQIntro lang={lang} />
      <FAQS common={common} questions={questions} lang={lang} />
    </>
  );
}
