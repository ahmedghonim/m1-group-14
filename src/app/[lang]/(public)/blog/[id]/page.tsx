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
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <div className="flex gap-3">
              <a href="/category/technology">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Technology
                </span>
              </a>
            </div>
          </div>
          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            Escape Fantasies of the Tech Billionaires
          </h1>
          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  {data?.author}
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time className="text-gray-500 dark:text-gray-400">
                    {new Date(data?.date).toLocaleDateString()}
                  </time>
                  <span>· {data.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-0 mx-auto aspect-video lg:rounded-lg">
        <Image
          alt="Thumbnail"
          className="object-cover w-full"
          width={1000}
          height={500}
          src={data?.image || ""}
        />
      </div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
            <p
              dangerouslySetInnerHTML={{ __html: data?.description[lang] }}
            ></p>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <a
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
              href="/"
            >
              ← {common.view_all_blogs}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Page;
