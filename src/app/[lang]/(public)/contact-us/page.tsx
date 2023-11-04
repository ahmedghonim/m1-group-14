import Head from "next/head";
import React, { useState } from "react";
import ContactCover from "@image/contact-cover.png";
// import { useRouter } from "next/router";
import { translation } from "@/i18n";
import { ContactFormProps } from "@/app/_components/public-page/contact-us/form";
import IntroSection from "@/app/_components/shared/intro-section";
import { Text } from "@/app/_ui";
import ContactUsForm from "@/app/_components/public-page/contact-us";

export default async function ContactUsSSS({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { t } = await translation(lang, "pages-title");
  const { t: commonT } = await translation(lang, "common");
  // const { push } = useRouter();
  // const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value: ContactFormProps) => {
    // setIsLoading(true);
    try {
      // await axios.post("/api/contact-us", value);
      // push("/thanx");
    } catch (error) {
      console.log("error >>>> ", error);
    }
  };
  return (
    <>
      <Head>
        <title>{t("contact-us")}</title>
      </Head>
      <IntroSection image={ContactCover}>
        <div className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Text
            as="h1"
            font="bold"
            className="!text-[40px] !text-primary-100 font-Lato"
          >
            {commonT("contact_us")}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-[18px] !text-white font-Inter"
          >
            {commonT("contact_us_sub")}
          </Text>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[1]" />
      </IntroSection>

      <div className="md:px-[124px] px-6">
        <div className="relative md:-top-[125px] -top-[40px] bg-[#F2E4BF] md:py-[132px] py-4 px-6 rounded-[12px] z-[3]">
          <ContactUsForm
            lang={lang}
            // isLoading={isLoading}
            className="!mt-0 relative z-[5]"
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
}
