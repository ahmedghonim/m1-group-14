import { LinkButton, Text } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import Head from "next/head";
import React from "react";

async function Thanx({ params: { lang } }: { params: { lang: "en" | "ar" } }) {
  const { common } = await getDictionary(lang);

  return (
    <>
      <Head>
        <title>{common["our-services"]}</title>
      </Head>

      <div className="py-20 justify-center flex flex-col items-center gap-4">
        <Text
          as="h1"
          font="bold"
          className="!text-[40px] !text-primary-100 font-Lato"
        >
          {common.thank_you}
        </Text>
        <Text as="h2" font="bold" className="!text-[18px]  font-Inter">
          {common.for_contacting_us}
        </Text>
        <LinkButton href="/">{common.back_to_home}</LinkButton>
      </div>
    </>
  );
}

export default Thanx;
