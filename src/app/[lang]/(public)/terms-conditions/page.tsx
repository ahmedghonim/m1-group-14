import { Text } from "@/app/_ui";
import { translation } from "@/i18n";
import Head from "next/head";
import React from "react";

async function OurService({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { t } = await translation(lang, "common");

  return (
    <>
      <Head>
        <title>{t("pages-title:our-services")}</title>
      </Head>

      <div className="py-20">
        <Text
          as="h1"
          font="bold"
          className="!text-[40px] !text-primary-100 font-Lato"
        >
          {t("terms-conditions")}
        </Text>
      </div>

      <div className="flex flex-col justify-start items-start gap-5 sm:p-14 p-4">
        <div className="flex flex-col justify-start items-start gap-5">
          <Text
            as="h1"
            font="bold"
            className="sm:!text-[32px] text-xl !text-start font-Lato"
          >
            {t("PERSONAL_INFORMATION")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("PERSONAL_INFORMATION_TEXT_1")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("PERSONAL_INFORMATION_TEXT_2")}
          </Text>
          <ul className="list-disc sm:ps-16 ps-4">
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7"
            >
              {t("PERSONAL_INFORMATION_UL_1")}
            </Text>
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7"
            >
              {t("PERSONAL_INFORMATION_UL_2")}
            </Text>
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7"
            >
              {t("PERSONAL_INFORMATION_UL_3")}
            </Text>
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7"
            >
              {t("PERSONAL_INFORMATION_UL_4")}
            </Text>
          </ul>
          <Text
            as="h1"
            font="bold"
            className="sm:!text-[32px] text-xl !text-start font-Lato"
          >
            {t("PERSONAL_INFORMATION_EXAMPLES")}
          </Text>
          <ul className="list-disc sm:ps-8 ps-4">
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 "
            >
              {t("PERSONAL_INFORMATION_EXAMPLES_UL_1")}
            </Text>
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 "
            >
              {t("PERSONAL_INFORMATION_EXAMPLES_UL_2")}
            </Text>
            <Text
              as="li"
              font="semi"
              className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 "
            >
              {t("PERSONAL_INFORMATION_EXAMPLES_UL_3")}
            </Text>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-5">
          <Text
            as="h1"
            font="bold"
            className="sm:!text-[32px] text-xl !text-start font-Lato"
          >
            {t("POLICY")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("POLICY_TEXT_1")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("POLICY_TEXT_2")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("POLICY_TEXT_3")}
          </Text>
        </div>
        <div className="flex flex-col justify-start items-start gap-5">
          <Text
            as="h1"
            font="bold"
            className="sm:!text-[32px] text-xl !text-start font-Lato"
          >
            {t("INTELLECTUAL_PROPERTY")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("INTELLECTUAL_PROPERTY_TEXT_1")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-start sm:!text-[18px] text-sm font-Inter leading-7 sm:ps-8"
          >
            {t("INTELLECTUAL_PROPERTY_TEXT_2")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="sm:!text-[18px] text-sm font-Inter leading-7 !text-start sm:ps-8"
          >
            {t("INTELLECTUAL_PROPERTY_TEXT_3")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="sm:!text-[18px] text-sm font-Inter leading-7 !text-start sm:ps-8"
          >
            {t("INTELLECTUAL_PROPERTY_TEXT_4")}
          </Text>
        </div>
      </div>
    </>
  );
}

export default OurService;
