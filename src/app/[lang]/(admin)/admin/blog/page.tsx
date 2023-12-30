import { getBlogData } from "./api-calls";
import { Button } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import Link from "next/link";
import BlogCard from "@/app/_components/shared/blog-card";
import { Blog } from "@prisma/client";

export type HeroTypes = any;

async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  const { common } = await getDictionary(lang);
  const data = await getBlogData();
  return (
    <div>
      <Button style="primary">
        <Link href={`/${lang}/admin/blog/create`}>{common.create_new}</Link>
      </Button>
      <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {data.map((item: Blog, index) => (
          <div key={index} className="shadow-md m-5 rounded-md hover:shadow-xl">
            <Link href={`/${lang}/admin/blog/${item.id}`}>
              <BlogCard data={item} lang={lang} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
