import { Text } from "@/app/_ui";
import React from "react";
import Logo from "@svg/larg-text-logo.svg";
import MobileLogo from "@svg/mob-large-text-logo.svg";
import Link from "next/link";
import { getDictionary } from "@/dictionary";
import { AboutTypes } from "@/app/[lang]/(admin)/admin/about-us/page";
import dynamic from "next/dynamic";
const Paragraph = dynamic(() => import("./Paragraph"), { ssr: false });

export default async function AboutUS({
  lang,
  data,
  aboutPage,
}: {
  lang: "en" | "ar";
  data: AboutTypes;
  aboutPage?: boolean;
}) {
  const { common } = await getDictionary(lang);

  return (
    <div className="px-6 lg:px-[120px] pt-[41px] md:pt-[68px]">
      <Text
        as="h1"
        font="bold"
        className="!text-start !text-2xl md:!text-[40px] !text-primary-100 font-Lato mb-4"
      >
        {data?.title[lang]}
      </Text>
      <div className="flex justify-between items-center flex-col lg:flex-row  gap-5 md:gap-0">
        <div className="lg:w-[60%] order-2 lg:order-1">
          {!aboutPage && (
            <div className="mb-3 flex flex-col gap-2">
              {data?.description[lang] && (
                <Paragraph description={data?.description[lang]} />
              )}
            </div>
          )}
          {aboutPage && (
            <Text
              as="p"
              className="!text-start leading-8 font-Lato !text-[16px] lg:!text-[21px] "
            >
              <span
                dangerouslySetInnerHTML={{ __html: data?.description[lang] }}
              ></span>
            </Text>
          )}
          {!aboutPage && (
            <Link
              href="/about-us"
              className="bg-dark-100 !text-[16px] py-3 px-5 rounded text-white hover:opacity-60 duration-200"
            >
              {common.read_more}
            </Link>
          )}
        </div>

        <div className="w-full lg:w-fit order-1 lg:order-2 flex justify-center">
          <span className="hidden md:block">
            <MobileLogo />
          </span>
          <span className="md:hidden">
            <Logo />
          </span>
        </div>
      </div>
    </div>
  );
}
