import React from "react";
import "@styles/globals.css";
import { languages } from "@/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
