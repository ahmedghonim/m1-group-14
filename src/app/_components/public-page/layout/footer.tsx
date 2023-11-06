import React from "react";
import Logo from "@svg/text-logo.svg";
import { Button, Text } from "@/app/_ui";
import Link from "next/link";
import Phone from "@svg/phone-icon.svg";
import Location from "@svg/location.svg";
import Mail from "@svg/mail.svg";
import Facebook from "@svg/facebook.svg";
import Linkedin from "@svg/linkedin.svg";
import Instagram from "@svg/instagram.svg";
import Twitter from "@svg/twitter_2.svg";
import Snap from "@svg/snap.svg";
import { translation } from "@/i18n";

const Company = async ({ lang }: { lang: "en" | "ar" }) => {
  const { t } = await translation(lang, "common");

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("company")}
      </Text>
      <ul>
        <li>
          <Link href={`/${lang}/`} className="font-medium font-Lato">
            {t("home")}
          </Link>
        </li>

        <li>
          <Link href={`/${lang}/about-us`} className="font-medium font-Lato">
            {t("about_us")}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/contact-us`} className="font-medium font-Lato">
            {t("contact_us")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/our-services`}
            className="font-medium font-Lato"
          >
            {t("our_services")}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/terms-conditions`}
            className="font-medium font-Lato"
          >
            {t("terms-conditions")}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/blog`} className="font-medium font-Lato">
            {t("blog")}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/faq`} className="font-medium font-Lato">
            {t("fqa")}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/login`} className="font-medium font-Lato">
            {t("login_for_employee")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Contacts = async ({ lang }: { lang: "en" | "ar" }) => {
  const { t } = await translation(lang, "common");

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("contacts")}
      </Text>
      <div className="flex items-center gap-4 ">
        <Phone />
        <Text font="semi" className="font-Lato">
          01093000010
        </Text>
      </div>
      <div className="flex group items-center gap-4 my-[10px]">
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/SvRVmCnG3cD52rHWA?g_st=iwb"
        >
          <Location className="group-hover:fill-primary-100" />
        </Link>
        <address className="font-Lato font-semibold text-sm group-hover:text-primary-100 hover:underline">
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/SvRVmCnG3cD52rHWA?g_st=iwb"
          >
            {t("address_eg")}
          </Link>
          <br />
        </address>
      </div>
      <div className="flex items-center gap-4 my-[10px]">
        <div>
          <Location />
        </div>
        <address className="font-Lato font-semibold text-sm">
          {t("address_du")}
          <br />
        </address>
      </div>
      <div className="flex items-center gap-4">
        <Mail />
        <Text font="semi" className="font-Lato">
          info@m1group-mr.com
        </Text>
      </div>
    </div>
  );
};

const SocialIcons = async ({ lang }: { lang: "en" | "ar" }) => {
  const { t } = await translation("common");

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("get_in_touch")}
      </Text>

      <div className="flex items-center gap-5">
        <Link
          href="https://www.facebook.com/MRizkEgy1"
          className="duration-300 hover:scale-125"
          target="_blank"
        >
          <Facebook />
        </Link>
        <Link
          href="https://www.instagram.com/mohamed.rezkbdah/"
          className="duration-300 hover:scale-125"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href="http://linkedin.com/in/mohamed-rezk-group-7a4876269"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Linkedin />
        </Link>
        <Link
          href="https://twitter.com/M1_GROUP"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Twitter />
        </Link>
        <Link
          href="http://linkedin.com/in/mohamed-rezk-group-7a4876269"
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Snap />
        </Link>
      </div>
    </div>
  );
};

const NewsLetter = async ({ lang }: { lang: "en" | "ar" }) => {
  const { t } = await translation(lang, "common");
  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {t("news_litter")}
      </Text>

      <input
        type="email"
        placeholder={t("mail_placeholder")}
        className="bg-white rounded-[10px] py-[14px] w-full px-4 outline-none border-[1px] border-[#E4E4E7]"
      />
      <Button style="secondary" className="w-full !mt-4 py-3">
        {t("subscribe_now")}
      </Button>
    </div>
  );
};

export default async function Footer({ lang }: { lang: "en" | "ar" }) {
  const { t } = await translation(lang, "common");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="lg:px-[124px] px-6 pb-[30px] pt-10 !bg-[#FCF8DB]">
      {/* -------- top section ------- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-8 gap-5 lg:gap-6">
        {/* -------- col 1 ------- */}
        <div className="md:col-span-1">
          <Link href={`/${lang}/`}>
            <Logo />
          </Link>
        </div>

        {/* -------- col 2 ------- */}
        <div className="md:col-span-1">
          <Company lang={lang} />
        </div>

        {/* -------- col 3 ------- */}
        <div className="md:col-span-2">
          <Contacts lang={lang} />
        </div>

        {/* -------- col 4 ------- */}
        <div className="md:col-span-2">
          <SocialIcons lang={lang} />
        </div>

        {/* -------- col 5 ------- */}
        <div className="md:col-span-2">
          <NewsLetter lang={lang} />
        </div>
      </div>
      {/* -------- bottom section ------- */}
      <Text as="p" className="md:mt-[72px] mt-[42px]">{`${t(
        "copy_writes_start"
      )} ${currentYear} ,${t("copy_writes_end")}`}</Text>
    </footer>
  );
}
