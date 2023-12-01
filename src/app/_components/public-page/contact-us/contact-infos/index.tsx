import React from "react";

import Address from "./location";
import ContactDetails from "./details";
import ContactCircles from "@svg/contact-circles.svg";
import Facebook from "@svg/facebook_w.svg";
import Linkedin from "@svg/linkedin_w.svg";
import Instagram from "@svg/instagram_w.svg";
import Twitter from "@svg/twitter_2_w.svg";
import Snap from "@svg/snap_w.svg";
import Link from "next/link";
import { Text } from "@/app/_ui";
import { getDictionary } from "@/dictionary";
import { getContactsData } from "@/app/[lang]/(admin)/admin/contacts/api-calls";

async function ContactUsForm({ lang }: { lang: "en" | "ar" }) {
  const { common } = await getDictionary(lang);
  const data = await getContactsData();
  // Contact Info Head
  const InfoHead = ({ text }: { text: string }) => {
    return (
      <Text
        as="h3"
        className="capitalize !text-start !text-[16px] sm:!text-[10px] lg:!text-[16px] !text-white opacity-75 font-inter"
      >
        {text}
      </Text>
    );
  };

  // contact social icons
  const SocialIcon = ({
    icon: Icon,
    href,
  }: {
    icon: React.ElementType;
    href: string;
  }) => {
    return (
      <Link
        href={href}
        target="_blank"
        className="lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]   grid place-items-center duration-150 hover:bg-secondary-100 hover:scale-125"
      >
        <Icon className="fill-white stroke-white lg:scale-90 duration-150 icon" />
      </Link>
    );
  };

  return (
    <div className="sm:w-[41%] pb-32 lg:h-[647px] m-2 sm:h-[480px] flex flex-col bg-[#DEBB5F] gap-8 lg:p-10 p-4 rounded-[10px] relative overflow-hidden">
      <div className="text-center sm:text-start">
        <Text
          as="h2"
          font="mid"
          className="!text-start !text-white lg:!text-[28px] sm:!text-sm !text-[20px] font-Lato"
        >
          {common.contact_info}
        </Text>
        <Text
          as="p"
          className="!text-start lg:text-[18px] text-[11px] !text-white !mt-3 font-Lato"
        >
          {common.say_something}
        </Text>
      </div>
      <Address data={data} lang={lang}>
        <InfoHead text={common.address} />
      </Address>
      <ContactDetails data={data}>
        <InfoHead text={common.contact_details} />
      </ContactDetails>

      <div className="w-full flex flex-col gap-6">
        <div className="flex gap-3 ">
          <SocialIcon
            href={data?.fb || "https://www.facebook.com/MRizkEgy1"}
            icon={Facebook}
          />

          <SocialIcon
            href={data?.insta || "https://www.instagram.com/mohamed.rezkbdah/"}
            icon={Instagram}
          />

          <SocialIcon
            href={
              data?.linked ||
              "http://linkedin.com/in/mohamed-rezk-group-7a4876269"
            }
            icon={Linkedin}
          />

          <SocialIcon
            href={data?.tw || "https://twitter.com/M1_GROUP"}
            icon={Twitter}
          />

          <SocialIcon
            href={
              data?.snap ||
              "http://linkedin.com/in/mohamed-rezk-group-7a4876269"
            }
            icon={Snap}
          />
        </div>
      </div>
      <div className="absolute lg:-bottom-8 lg:-right-8 sm:-bottom-10 sm:-right-10 -bottom-16 -right-16">
        <ContactCircles className="scale-75" />
      </div>
    </div>
  );
}
export default ContactUsForm;
