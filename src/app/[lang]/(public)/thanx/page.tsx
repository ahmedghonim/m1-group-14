import { LinkButton, Text } from "@/app/_ui";
import { translation } from "@/i18n";
import Head from "next/head";
import React from "react";

async function Thanx({ params: { lang } }: { params: { lang: "en" | "ar" } }) {
  const { t } = await translation(lang, "common");

  return (
    <>
      <Head>
        <title>{t("pages-title:our-services")}</title>
      </Head>

      <div className="py-20 justify-center flex flex-col items-center gap-4">
        <Text
          as="h1"
          font="bold"
          className="!text-[40px] !text-primary-100 font-Lato"
        >
          {t("thank_you")}
        </Text>
        <Text as="h2" font="bold" className="!text-[18px]  font-Inter">
          {t("for_contacting_us")}
        </Text>
        <LinkButton href="/">{t("back_to_home")}</LinkButton>
      </div>
    </>
  );
}

export default Thanx;
