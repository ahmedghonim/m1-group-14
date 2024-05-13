import Head from "next/head";
import React from "react";
import { getDictionary } from "@/dictionary";
import { LinkButton, Text } from "@/app/_ui";
import BlogCard from "@/app/_components/shared/blog-card";
import Link from "next/link";
import { getBlogData } from "../../(admin)/admin/blog/api-calls";
import { getQuiteData } from "../../(admin)/admin/quite/api-calls";

async function OurBlog({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { common } = await getDictionary(lang);
  const data = await getBlogData();
  const quiteData = (await getQuiteData()) as any;
  return (
    <>
      <Head>
        <title>{common["our-services"]}</title>
      </Head>
      <div className="">
        <Text
          as="h1"
          font="bold"
          className="!text-[40px] !text-primary-100 font-Lato"
        >
          {common.blogs}
        </Text>
        <Text
          as="p"
          font="semi"
          className="!text-[18px] !text-dark-100 font-Inter"
        >
          {common.blog_sub}
        </Text>
      </div>
      <div className="w-full h-full" />

      <div className="md:px-[120px] md:space-y-[105px] px-6 space-y-6 text-center md:mt-[120px] my-[53px]">
        <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {data.map((item: any, index) => (
            <div
              key={index}
              className="shadow-md m-5 rounded-md hover:shadow-xl"
            >
              <LinkButton href={`/blog/${item.id}`} className="!bg-transparent">
                <BlogCard data={item} lang={lang} />
              </LinkButton>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-[#F2E4BF] h-[282px] flex flex-col justify-center items-center gap-7 px-2">
          <Text
            as="p"
            size="md"
            font="bold"
            className="text-dark-100 md:w-3/5 "
          >
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

export default OurBlog;
