"use client";
import React, { useState } from "react";
import TextLogo from "@svg/text-logo.svg";
import clsx from "clsx";
import MenuIcon from "@svg/menu.svg";
import AboutIcon from "@svg/about-us.svg";
import OurServesIcon from "@svg/our-serves.svg";
import FQAIcon from "@svg/fqa.svg";
import LogoIcon from "@svg/logo.svg";
import { useTranslation } from "@/i18n/client";
import { Button } from "@/app/_ui";
import ChangeLang from "../../shared/change-lang";
import VerticalBar from "../../shared/vertical-bar";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavBar() {
  const { t } = useTranslation("pages-title");
  const { t: tCommon } = useTranslation("common");
  const asPath = usePathname();
  const lang = asPath.split("/")[1];
  const [openMenu, setOpenMenu] = useState(false);
  const navBar = [
    { name: "home", link: "/", icon: LogoIcon },
    { name: "our-services", link: "/our-services", icon: OurServesIcon },
    { name: "about-us", link: "/about-us", icon: AboutIcon },
    { name: "blog", link: "/blog", icon: FQAIcon },
    { name: "contact-us", link: "/contact-us", icon: AboutIcon },
    { name: "fqa", link: "/fqa", icon: FQAIcon },
    { name: "terms-conditions", link: "/terms-conditions", icon: FQAIcon },
  ];

  const isActiveTab = (_link: string) => asPath === _link;

  return (
    <nav className="flex justify-between lg:my-[35px] lg:mx-[120px] mx-7 my-7 items-center relative z-[6]">
      <div className="flex flex-col justify-start items-center gap-2">
        <TextLogo />
      </div>

      {/* ------ Hidden In Mobile ----- */}
      <div className="lg:flex gap-8 xl:gap-14 hidden">
        {navBar.map(({ link, name }) => (
          <Link
            key={link}
            href={`/${lang}/${link}`}
            className={clsx(
              "relative text-dark-200 text-lg h-fit [&:hover>.line]:w-full",
              {
                "font-bold [&>.line]:w-full": isActiveTab(link),
              }
            )}
          >
            {t(name)}

            <div className="absolute -bottom-3 left-0 h-1 w-0 bg-primary-100 rounded-full duration-300 line" />
          </Link>
        ))}
      </div>
      <div className="lg:flex items-center gap-3 hidden">
        <Button
          style="secondary"
          rounded="full"
          size="sm"
          font="bold"
          className="!h-fit"
        >
          {tCommon("contact")}
        </Button>
        <ChangeLang />
      </div>

      <span className="lg:hidden" onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </span>

      {openMenu && <VerticalBar setOpenMenu={setOpenMenu} navBar={navBar} />}
    </nav>
  );
}

export default NavBar;
