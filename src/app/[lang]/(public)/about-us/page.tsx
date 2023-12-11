import Head from "next/head";
import React from "react";
import AboutusCover from "@image/aboutus-cover.png";
import { getDictionary } from "@/dictionary";
import IntroSection from "@/app/_components/shared/intro-section";
import { Text } from "@/app/_ui";
import ContactUsForm from "@/app/_components/public-page/contact-us/contact-infos";
import { getAboutData } from "../../(admin)/admin/about-us/api-calls";
import { AboutTypes } from "../../(admin)/admin/about-us/page";
import AboutUS from "@/app/_components/public-page/home/about-us";
// import ContactUs from "@/app/_components/public-page/contact-us";

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { common } = await getDictionary(lang);
  const aboutData = (await getAboutData()) as AboutTypes;
  return (
    <>
      <Head>
        <title>{common["about-us"]}</title>
      </Head>

      <IntroSection image={AboutusCover}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />
      </IntroSection>

      <div className="lg:px-[120px] px-6 lg:pt-12 pt-4 lg:pb-[147px] pb-[50px]">
        <AboutUS lang={lang} data={aboutData} aboutPage />
        <ContactUsForm lang={lang} />
      </div>
    </>
  );
}
