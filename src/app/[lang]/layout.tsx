import React from "react";
import "@styles/globals.css";
import { getDictionary } from "@/dictionary";

export async function generateMetadata({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const { meta } = await getDictionary(params.lang);

  return {
    title: {
      template: `${meta.title} | %s`,
      default: meta.title,
    },
    description: meta.description,
    keywords: meta.keywords,
    author: "m1group-mr",
    applicationName: "m1group-mr",
    metadataBase: new URL("https://m1group-mr.com"),
    alternates: {
      canonical: "/ar",
      languages: {
        ar: "/ar",
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
      type: "website",
      title: meta.title,
      url: "https://m1group-mr.com/",
      site_name: "m1group-mr",
      images: [
        {
          url: "./favicon.ico",
          width: 800,
          height: 600,
          alt: "m1group",
        },
      ],
    },
    icons: {
      icon: "../favicon.ico",
    },

    // twitter: {
    //   card: "summary",
    //   site: "@m1groupmrcom",
    //   title: meta.title,
    //   description: meta.description,
    //   images: ["./favicon.ico"],
    //   siteId: "1676964166446514176",
    //   creator: "@m1groupmrcom",
    //   creatorId: "1676964166446514176",
    // },

    // facebook: {
    //   // appId: "106751785818106",
    //   pages: "106751785818106",
    //   page: "106751785818106",
    // },
  };
}
export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: any };
}) {
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="../favicon.ico" sizes="any" />
        <title>
          مكتب محاسبة ومراجعة للاستشارات الضريبية والقانونية M1 GROUP
        </title>
        <meta
          name="keywords"
          content="محاسبون قانونيون و مراجعون و خدمات ضرائب, محاسب ضرائب, خبير ضرائب ، تأسيس مؤسسه ، مكتب محاسب قانوني ، فض منازعات, خبير مثمن ، محاسب ضرائب ، مستشار قانوني ، مراجعه حسابات، مقيم عقارات ،مراقب حسابات ، شهاده محاسب قانوني ،مراجع حسابات ، شهاده إدارة محاسب"
        />
        <meta
          name="description"
          content="مكتب محمد رزق و شركاه للمحاسبه القانونيه و الضرائب و كافه المهام الورقيه والاجراءات القانونيه مع المتابعه المستمرة وتخليص الاجراءات الحكوميه لتاسيس شركتك                     ."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="ar_AR,en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="مكتب محاسبة ومراجعة للاستشارات الضريبية والقانونية M1 GROUP"
        />
        <meta
          property="og:description"
          content="تعتبر مجموعه m1 محمد رزق للمحاسبه القانونيه ، مكنب محاسبهو مراجعه رائد في مجال العمل المحاسبي و الاعمال الضريبيه تمتاز بخبره اكثر من عشره اعوام في مجال المحاسبه و المراجعه."
        />
        <meta property="og:url" content="https://www.m1-group.com.eg/" />
        <meta
          property="og:site_name"
          content="مكتب محاسبة و ضرائب و تأسيس شركات M1 GROUP"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="مكتب محاسبة ومراجعة M1 GROUP للاستشارات الضريبية والقانونية"
        />
        <meta name="twitter:label1" content="Written by Ahmed Ghonim" />

        <meta
          name="google-site-verification"
          content="O3e44RBjvHwhcdVwBLbuKLh4qyYcX_d9lOx0AjHWtbM"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
