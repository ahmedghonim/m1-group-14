import React from "react";
import FAQCover from "@image/contact-cover.png";
import Search from "@svg/search.svg";
import IntroSection from "@/app/_components/shared/intro-section";
import { Button, Text } from "@/app/_ui";
import { getDictionary } from "@/dictionary";

export default async function FAQIntro({ lang }: { lang: "en" | "ar" }) {
  const { common } = await getDictionary(lang);
  return (
    <IntroSection image={FAQCover}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col justify-center items-center w-full">
        <Text
          as="h1"
          font="bold"
          className="!text-primary-100 lg:!text-[40px] font-Lato"
        >
          {common.have_ques}
        </Text>
        <Text
          as="p"
          font="semi"
          className="!text-white lg:!text-base font-Inter"
        >
          {common.faq_sub}
        </Text>
        <div className="flex items-center justify-center w-1/2 lg:w-1/4 mx-auto mt-5">
          <div className="w-full flex items-center gap-4 border-[1px] border-[#ffffff33] px-4 py-2">
            <button className="cursor-pointer duration-300 hover:scale-125">
              <Search />
            </button>
            <input
              className="bg-transparent outline-none text-white [&::placeHolder]:capitalize"
              placeholder={common.search}
            />
          </div>
          <Button style="secondary" className="!rounded-none">
            {common.search}
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[1]" />
    </IntroSection>
  );
}
