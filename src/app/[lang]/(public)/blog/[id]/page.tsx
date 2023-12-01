import { getBlogById } from "@/app/[lang]/(admin)/admin/blog/api-calls";
import { getDictionary } from "@/dictionary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Page({
  params: { lang, id },
}: {
  params: {
    lang: string;
    id: number | "create";
  };
}) {
  const data = (await getBlogById(+id)) as any;
  const { common } = await getDictionary(lang);
  return (
    <div className="px-96">
      <div className="relative z-0 mx-auto aspect-video lg:rounded-lg">
        <Image
          alt="Thumbnail"
          className="object-cover w-full"
          width={1000}
          height={500}
          src={data?.image || ""}
        />
      </div>
      <div className="container px-8 xl:px-5  py-5 lg:py-8 !pt-0">
        <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
          {data?.title[lang]}
        </h1>
        <div className="mt-3 flex  space-x-3 text-gray-500 ">
          <div className="flex gap-3">
            <div>
              <p className="text-gray-800">{data?.author}</p>
              <div className="flex space-x-2 text-sm">
                <time className="text-gray-500">
                  {new Date(data?.date).toLocaleDateString()}
                </time>
                <span>· {data.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg ">
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            <p
              dangerouslySetInnerHTML={{ __html: data?.description[lang] }}
            ></p>
          </div>
          <div className="mb-7 mt-7 flex ">
            <Link
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
              href={lang === "ar" ? "/ar/blog" : "/en/blog"}
            >
              ← {common.view_all_blogs}
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Page;
