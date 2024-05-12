import { getDictionary } from "@/dictionary";
import "@styles/globals.css";
import { Noto_Kufi_Arabic } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const cairo_font = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

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
      icon: "./favicon.ico",
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

export default async function RootLayout({
  children,
  params,
}: {
  children: any;
  params: {
    lang: string;
  };
}) {
  return (
    <html
      lang={params.lang}
      className={`${cairo_font.variable} font-Lato`}
      // suppressHydrationWarning={false}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${cairo_font.variable} font-Lato`}>{children}</body>
      <GoogleAnalytics gaId="G-H36G0XE1N1" />
      <GoogleTagManager gtmId="GTM-KLSCJTZ2" />
    </html>
  );
}
