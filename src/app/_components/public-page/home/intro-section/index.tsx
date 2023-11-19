"use client";
import HomeCover from "@image/home-cover.png";
import React from "react";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import IntroSection from "@/app/_components/shared/intro-section";
import { HeroTypes } from "@/app/[lang]/(admin)/admin/page";

export default function HomeIntro({
  data,
  lang,
  common,
}: {
  data: HeroTypes | undefined;
  lang: string;
  common: any;
}) {
  return (
    <IntroSection image={data?.image}>
      <div className="flex flex-col absolute top-1/2 ltr:left-0 rtl:right-0 lg:px-[120px] px-6 -translate-y-1/2 md:gap-6">
        <h1
          style={{ color: "#E7BB4C", fontWeight: "bold" }}
          className="!text-[28px] md:!text-[48px]"
        >
          <Typewriter
            words={[data?.title[lang] || ""]}
            loop
            cursor
            cursorStyle="."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <h1
          className="md:text-5xl text-2xl font-bold md:leading-[55px]"
          dangerouslySetInnerHTML={{ __html: data?.subtitle[lang] || "" }}
        />
        <Link
          href={`${lang}/contact-us`}
          className="mt-4 bg-dark-100 !text-[16px] py-3 px-5 rounded text-white hover:opacity-60 duration-200 w-fit"
        >
          {common.get_in_touch}
        </Link>
      </div>
    </IntroSection>
  );
}
