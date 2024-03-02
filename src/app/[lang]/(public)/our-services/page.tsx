import Head from "next/head";
import React from "react";
import ServicesCover from "@image/services-cover.png";
import { getDictionary } from "@/dictionary";
import IntroSection from "@/app/_components/shared/intro-section";
import { LinkButton, Text } from "@/app/_ui";
import ServesView from "@/app/_components/public-page/our-serves";
import { getServiceData } from "../../(admin)/admin/our-services/api-calls";
import { getQuiteData } from "../../(admin)/admin/quite/api-calls";

async function OurService({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { common } = await getDictionary(lang);
  const data = await getServiceData();
  const quiteData = (await getQuiteData()) as any;
  return (
    <>
      <Head>
        <title>{common["our-services"]}</title>
      </Head>
      <IntroSection image={ServicesCover}>
        <div className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Text
            as="h1"
            font="bold"
            className="!text-[40px] !text-primary-100 font-Lato"
          >
            {common.our_services}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-[18px] !text-white font-Inter"
          >
            {common.our_services_sub}
          </Text>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />
      </IntroSection>

      <div className="md:px-[120px] md:space-y-[105px] px-6 space-y-6 text-center md:mt-[120px] my-[53px]">
        {data.map(
          ({ image, title, description, favoriteNum, id }: any, index) => (
            <ServesView
              key={id}
              src={image}
              desc={JSON.parse(description)[lang]}
              title={JSON.parse(title)[lang]}
              revers={index % 2 !== 0}
            />
          )
        )}
        <div className="rounded-3xl bg-[#F2E4BF] h-[282px] flex flex-col justify-center items-center gap-7 px-2">
          <Text as="p" size="md" font="bold" className="text-black md:w-3/5 ">
            {quiteData?.quite[lang]}
          </Text>
          <LinkButton lang={lang} href="/contact-us" rounded="full">
            {common.contact}
          </LinkButton>
        </div>
      </div>
    </>
  );
}

export default OurService;
