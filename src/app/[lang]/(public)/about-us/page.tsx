import Head from "next/head";
import React from "react";
import AboutusCover from "@image/aboutus-cover.png";
import { translation } from "@/i18n";
import IntroSection from "@/app/_components/shared/intro-section";
import { Text } from "@/app/_ui";
import ContactUs from "@/app/_components/public-page/contact-us";

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { t } = await translation(lang, "common");
  return (
    <>
      <Head>
        <title>{t("pages-title:about-us")}</title>
      </Head>

      <IntroSection image={AboutusCover}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />
      </IntroSection>

      <div className="lg:px-[120px] px-6 lg:pt-12 pt-4 lg:pb-[147px] pb-[50px]">
        <div>
          <Text
            as="h1"
            font="bold"
            className="!text-start !text-[20px] lg:!text-[40px] !text-primary-100 font-Lato"
          >
            {t("about_us")}
          </Text>

          <div className="mt-[20px] flex flex-col gap-6 md:w-[85%]">
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] lg:!text-[21px]"
            >
              - {t("about_us_1")}
            </Text>
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] lg:!text-[21px]"
            >
              - {t("about_us_2")}
            </Text>
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] lg:!text-[21px]"
            >
              - {t("about_us_3")}
            </Text>
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] lg:!text-[21px]"
            >
              - {t("about_us_4")}
            </Text>
          </div>
        </div>
        <ContactUs onSubmit={() => {}} lang={lang} />
      </div>
    </>
  );
}
