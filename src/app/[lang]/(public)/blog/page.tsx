import Head from "next/head";
import React from "react";
import ServicesCover from "@image/services-cover.png";
import { getDictionary } from "@/dictionary";
import IntroSection from "@/app/_components/shared/intro-section";
import { LinkButton, Text } from "@/app/_ui";
import ServesView from "@/app/_components/public-page/our-serves";
import { getServiceData } from "../../(admin)/admin/our-services/api-calls";
import BlogCard from "@/app/_components/shared/blog-card";
import Link from "next/link";
import { getBlogData } from "../../(admin)/admin/blog/api-calls";

async function OurBlog({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { common } = await getDictionary(lang);
  const data = await getBlogData();
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
          className="!text-[18px] !text-black font-Inter"
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
              <Link href={`/${lang}/blog/${item.id}`}>
                <BlogCard data={item} lang={lang} />
              </Link>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-[#F2E4BF] h-[282px] flex flex-col justify-center items-center gap-7 px-2">
          <Text as="p" size="md" font="bold" className="text-black md:w-3/5 ">
            {common.ourServiceDesc}
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
