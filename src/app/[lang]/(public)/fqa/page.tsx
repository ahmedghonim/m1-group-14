import FAQIntro from "@/app/_components/public-page/faq/intro-sec";
import FAQS from "@/app/_components/public-page/faq/single-faq";
import { translation } from "@/i18n";
import Head from "next/head";
import React from "react";

export default async function FAQ({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { t } = await translation(lang, "common");

  const questions = [
    {
      ques: t("ques_1"),
      answer: t("answer_1"),
    },
    {
      ques: t("ques_2"),
      answer: t("answer_2"),
    },
    {
      ques: t("ques_3"),
      answer: t("answer_3"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("pages-title:faq")}</title>
      </Head>
      <FAQIntro lang={lang} />
      <FAQS questions={questions} />
    </>
  );
}
