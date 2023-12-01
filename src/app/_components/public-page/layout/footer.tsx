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
import { getDictionary } from "@/dictionary";
import { getContactsData } from "@/app/[lang]/(admin)/admin/contacts/api-calls";
import { Contact } from "@prisma/client";

const Company = async ({ lang }: { lang: "en" | "ar" }) => {
  const { common } = await getDictionary(lang);
  const data = await getContactsData();
  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {common.company}
      </Text>
      <ul>
        <li>
          <Link href={`/${lang}/`} className="font-medium font-Lato">
            {common.home}
          </Link>
        </li>

        <li>
          <Link href={`/${lang}/about-us`} className="font-medium font-Lato">
            {common.about_us}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/contact-us`} className="font-medium font-Lato">
            {common.contact_us}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/our-services`}
            className="font-medium font-Lato"
          >
            {common.our_services}
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/terms-conditions`}
            className="font-medium font-Lato"
          >
            {common["terms-conditions"]}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/blog`} className="font-medium font-Lato">
            {common.blog}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/fqa`} className="font-medium font-Lato">
            {common.fqa}
          </Link>
        </li>
        <li>
          <Link href={`/${lang}/login`} className="font-medium font-Lato">
            {common.login_for_employee}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Contacts = async ({
  lang,
  data,
}: {
  lang: "en" | "ar";
  data: Contact | null;
}) => {
  const { common } = await getDictionary(lang);

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {common.contacts}
      </Text>
      <div className="flex items-start gap-4 flex-col">
        {data?.phone.map((phone, index) => (
          <div key={index} className="flex gap-4">
            <Phone />
            <Link
              href={"tell:" + phone}
              className="font-Lato text-dark-100 text-center gap-3 font-semibold "
            >
              {phone}
            </Link>
          </div>
        ))}
      </div>
      {
        <div className="flex items-start gap-4 flex-col mt-4">
          {data?.email.map((email, index) => (
            <div key={index} className="flex gap-4">
              <Mail />
              <Link
                href={`mailto:${email}`}
                className="font-Lato text-dark-100 text-center gap-3 font-semibold "
              >
                {email}
              </Link>
            </div>
          ))}
        </div>
      }
      {
        <div className="flex items-start flex-col mt-4">
          {data?.address.map((address, index) => (
            <div key={index} className="flex group items-center gap-4">
              <Link
                target="_blank"
                href={
                  address ||
                  "https://maps.app.goo.gl/SvRVmCnG3cD52rHWA?g_st=iwb"
                }
              >
                <Location className="group-hover:fill-primary-100" />
              </Link>
              <address className="font-Lato font-semibold text-sm group-hover:text-primary-100 hover:underline">
                <Link
                  target="_blank"
                  href={
                    address ||
                    "https://maps.app.goo.gl/SvRVmCnG3cD52rHWA?g_st=iwb"
                  }
                >
                  {common.address_eg}
                </Link>
                <br />
              </address>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

const SocialIcons = async ({
  lang,
  data,
}: {
  lang: "en" | "ar";
  data: Contact | null;
}) => {
  const { common } = await getDictionary(lang);

  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {common.get_in_touch}
      </Text>

      <div className="flex items-center gap-5">
        <Link
          href={data?.fb || "https://www.facebook.com/MRizkEgy1"}
          className="duration-300 hover:scale-125"
          target="_blank"
        >
          <Facebook />
        </Link>
        <Link
          href={data?.insta || "https://www.instagram.com/mohamed.rezkbdah/"}
          className="duration-300 hover:scale-125"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          href={
            data?.linked ||
            "http://linkedin.com/in/mohamed-rezk-group-7a4876269"
          }
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Linkedin />
        </Link>
        <Link
          href={data?.tw || "https://twitter.com/M1_GROUP"}
          target="_blank"
          className="duration-300 hover:scale-125"
        >
          <Twitter />
        </Link>
        <Link
          href={
            data?.snap || "http://linkedin.com/in/mohamed-rezk-group-7a4876269"
          }
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
  const { common } = await getDictionary(lang);
  return (
    <div>
      <Text
        as="h4"
        font="semi"
        className="!text-start !text-[13px] uppercase !text-[#454545] !font-Lato md:mb-10 mb-4"
      >
        {common.news_litter}
      </Text>

      <input
        type="email"
        placeholder={common.mail_placeholder}
        className="bg-white rounded-[10px] py-[14px] w-full px-4 outline-none border-[1px] border-[#E4E4E7]"
      />
      <Button style="secondary" className="w-full !mt-4 py-3">
        {common.subscribe_now}
      </Button>
    </div>
  );
};

export default async function Footer({ lang }: { lang: "en" | "ar" }) {
  const { common } = await getDictionary(lang);
  const data = await getContactsData();
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
          <Contacts data={data} lang={lang} />
        </div>

        {/* -------- col 4 ------- */}
        <div className="md:col-span-2">
          <SocialIcons data={data} lang={lang} />
        </div>

        {/* -------- col 5 ------- */}
        <div className="md:col-span-2">
          <NewsLetter lang={lang} />
        </div>
      </div>
      {/* -------- bottom section ------- */}
      <Text
        as="p"
        className="md:mt-[72px] mt-[42px]"
      >{`${common.copy_writes_start} ${currentYear} , ${common.copy_writes_end}`}</Text>
    </footer>
  );
}
