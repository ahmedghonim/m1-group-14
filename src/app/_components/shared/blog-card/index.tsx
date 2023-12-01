import React from "react";
import Image from "next/image";

function BlogCard({ data, lang = "ar" }: { data: any; lang: any }) {
  return (
    <section className="group cursor-pointer">
      <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 ">
        <Image
          alt="Thumbnail"
          decoding="async"
          data-nimg="fill"
          className="object-cover transition-all h-[400px]"
          width={800}
          height={500}
          src={data?.image || ""}
        />
      </div>

      <div className="flex gap-3">
        <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
          {data?.category}
        </span>
      </div>
      <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2">
        <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]  ">
          {data?.title[lang]}
        </span>
      </h2>
      <div className="hidden">
        <p
          className="mt-2 line-clamp-3 text-sm text-gray-500 "
          dangerouslySetInnerHTML={{
            __html: data?.description[lang] || "",
          }}
        ></p>
      </div>
      <div className="mt-3 flex items-center space-x-3 text-gray-500 ">
        <div className="flex items-center gap-3">
          <span className="truncate text-sm">{data?.author}</span>
        </div>
        <span className="text-xs text-gray-300 ">•</span>
        <time className="truncate text-sm">
          {new Date(data?.date).toLocaleDateString()}
        </time>
      </div>
    </section>
  );
}

export default BlogCard;
