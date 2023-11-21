"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
