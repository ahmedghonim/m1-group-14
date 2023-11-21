"use client";
import React from "react";
import NotFoundImg from "../app/_assets/svg/not_found_img.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { getDictionary } from "@/dictionary";

const NotFoundPage = () => {
  const dictionaries: any = {
    ar: {
      site: "ام ١ جروب | خطأ 404",
      title: "خطأ 404",
      description:
        "لا يمكن العثور على الصفحة التي تبحث عنها. ربما تمت إزالتها أو تغيير اسمها أو أنها غير متوفرة مؤقتًا.",
      back: "العودة للصفحة الرئيسية",
    },
    en: {
      site: "M1 Group | Error 404",
      title: "Error 404",
      description:
        "Can not find the page you are looking for. It may have been removed, its name changed, or it may be temporarily unavailable.",
      back: "Return to the home page",
    },
    fr: {
      site: "M1 Group | Error 404",
      title: "Erreur 404",
      description:
        "Vous ne trouvez pas la page que vous recherchez. Il a peut-être été supprimé, son nom a changé ou il est peut-être temporairement indisponible.",
      back: "Retour à la page d'accueil",
    },
    es: {
      site: "M1 Group | Error 404",
      title: "Error 404",
      description:
        "No puedo encontrar la página que estás buscando. Es posible que se haya eliminado, que se haya cambiado su nombre o que no esté disponible temporalmente.",
      back: "Regresar a la página de inicio",
    },
  };
  const asPath = usePathname();
  const lang = asPath.split("/")[1] || "en";
  const { title, description, back, site } =
    dictionaries?.[lang] || dictionaries.en;

  return (
    <>
      <head>
        <title>{site}</title>
        <link
          rel="icon"
          href="https://images.namra10.com/apple-touch-icon-114x114-precomposed.png"
          type="image/png"
          sizes="114x114"
        />
        <link
          rel="icon"
          href="../favicon.ico"
          type="image/png"
          sizes="114x114"
        />
        <link
          rel="icon"
          href="https://images.namra10.com/apple-touch-icon-72x72-precomposed.png"
          type="image/png"
          sizes="72x72"
        />
        <link
          rel="icon"
          href="https://images.namra10.com/apple-touch-icon-57x57-precomposed.png"
          type="image/png"
          sizes="57x57"
        />
        <link
          rel="icon"
          href="https://images.namra10.com/apple-touch-icon-precomposed.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <section className="flex flex-col justify-center items-center h-screen">
        <NotFoundImg className="w-full h-full" />

        <div className="flex flex-col gap-3 items-center justify-center w-full pb-28">
          <h1 className="text-2xl font-bold">{title}</h1>

          <p className="error-desc">{description}</p>

          <Link className="btn btn-primary" href="/">
            {back}
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
