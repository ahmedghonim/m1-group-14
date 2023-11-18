"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export async function generateMetadata() {
  return {
    title: {
      template: ` %s`,
      // default: meta.title,
    },
    // description: meta.description,
    // keywords: meta.keywords,
    author: "m1-group",
    applicationName: "m1-group",
    metadataBase: new URL("https://www.m1-group.com"),
    alternates: {
      canonical: "/en",
      languages: {
        en: "/en",
        "en-US": "/en",
        "en-au": "/en",
        "en-bz": "/en",
        "en-ca": "/en",
        "en-ie": "/en",
        "en-jm": "/en",
        "en-nz": "/en",
        "en-za": "/en",
        "en-tt": "/en",
        "en-gb": "/en",
        "en-us": "/en",
        "ar-AR": "/ar",
        "ar-dz": "/ar",
        "ar-bh": "/ar",
        "ar-eg": "/ar",
        "ar-iq": "/ar",
        "ar-jo": "/ar",
        "ar-kw": "/ar",
        "ar-lb": "/ar",
        "ar-ly": "/ar",
        "ar-ma": "/ar",
        "ar-om": "/ar",
        "ar-qa": "/ar",
        "ar-sa": "/ar",
        "ar-sy": "/ar",
        "ar-tn": "/ar",
        "ar-ae": "/ar",
        "ar-ye": "/ar",
      },
    },

    openGraph: {
      // type: "website",
      // title: meta.title,
      // url: "https://namra10.com/",
      // site_name: "Namra10",
      // images: [
      //   {
      //     url: "https://images.namra10.com/apple-touch-icon-144x144.png",
      //     width: 800,
      //     height: 600,
      //     alt: "Namra10",
      //   },
      // ],
    },
    icons: {
      // icon: "https://images.namra10.com/apple-touch-icon-57x57.png",
    },

    twitter: {
      // card: "summary",
      // site: "@namra10com",
      // title: meta.title,
      // description: meta.description,
      // images: ["https://images.namra10.com/apple-touch-icon-144x144.png"],
      // siteId: "1676964166446514176",
      // creator: "@namra10com",
      // creatorId: "1676964166446514176",
    },

    facebook: {
      // appId: "106751785818106",
      // pages: "106751785818106",
      // page: "106751785818106",
    },
  };
}
const dictionaries: any = {
  ar: {
    site: "ام ١ جروب | خطأ 500",
    title: "خطأ 500",
    description: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى في وقت لاحق.",
    back: "العودة للصفحة الرئيسية",
  },
  en: {
    site: "Namra10 | Error 500",
    title: "Error 500",
    description: "An unexpected error occurred. Please try again later.",
    back: "Return to the home page",
  },
};

export default function GlobalError({
  error,
  reset,
}: {
  error: any;
  reset: any;
}) {
  const asPath = usePathname();

  const lang = asPath.split("/")[1];
  const { title, description, back, site } = dictionaries[lang];
  return (
    <>
      <head>
        <title>{site}</title>
        <link
          rel="icon"
          href="../favicon.ico"
          type="image/png"
          sizes="114x114"
        />
      </head>
      <section className="error-page">
        <div className="error-img-container">
          {/* <Image src={errorImg} alt="500 error" unoptimized /> */}
        </div>

        <div className="error-body">
          <h1 className="error-title">{title}</h1>

          <p className="error-desc">{description}</p>

          <Link className="button is-danger is-rounded" href="/">
            {back}
          </Link>
        </div>
      </section>
    </>
  );
}
