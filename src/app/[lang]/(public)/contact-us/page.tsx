import Head from "next/head";
import React from "react";
import ContactCover from "@image/contact-cover.png";
import { getDictionary } from "@/dictionary";
import IntroSection from "@/app/_components/shared/intro-section";
import { Button, Input, Text } from "@/app/_ui";
import { createMessagesAction } from "../../(admin)/admin/messages/api-calls";
import ContactInfo from "../../../_components/public-page/contact-us/contact-infos";
import clsx from "clsx";

export default async function ContactUsSSS({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { common } = await getDictionary(lang);

  return (
    <>
      <Head>
        <title>{common["contact-us"]}</title>
      </Head>
      <IntroSection image={ContactCover}>
        <div className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <Text
            as="h1"
            font="bold"
            className="!text-[40px] !text-primary-100 font-Lato"
          >
            {common["contact_us"]}
          </Text>
          <Text
            as="p"
            font="semi"
            className="!text-[18px] !text-white font-Inter"
          >
            {common["contact_us_sub"]}
          </Text>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[1]" />
      </IntroSection>

      <div className="md:px-[124px] px-6">
        <div className="relative md:-top-[125px] -top-[40px] bg-[#F2E4BF] md:py-[132px] py-4 px-6 rounded-[12px] z-[3]">
          <section
            className={clsx(
              "bg-white  contact-shadow mt-[80px] pb-[100px] md:pb-0 flex flex-col sm:flex-row justify-between items-start w-full rounded-[10px]"
            )}
          >
            <ContactInfo lang={lang} />
            <div className="sm:w-[55%] w-full lg:pt-12 pt-4 sm:pt-0">
              <form
                action={createMessagesAction}
                className="flex flex-col lg:gap-6 gap-6 sm:gap-3 lg:ltr:pr-[51px] sm:ltr:pr-[15px] lg:rtl:pl-[51px] sm:rtl:pl-[15px]"
              >
                <div className="grid md:grid-cols-2 md:gap-8 gap-4">
                  <ContactInput
                    name="first_name"
                    placeHolder={common["first_name"]}
                    label={common["first_name"]}
                  />
                  <ContactInput
                    name="last_name"
                    placeHolder={common["last_name"]}
                    label={common["last_name"]}
                  />
                  <ContactInput
                    name="email"
                    placeHolder={common["email"]}
                    type="email"
                    label={common["email"]}
                  />
                  <ContactInput
                    name="phone"
                    placeHolder={common["phone_number"]}
                    label={common["phone_number"]}
                  />
                  <ContactInput
                    name="subject"
                    placeHolder={common["subject"]}
                    label={common["subject"]}
                  />
                </div>
                <div className="bg-light-300 !rounded-[4px]">
                  <ContactInput
                    name="message"
                    placeHolder={common["message"]}
                    label={common["message"]}
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    style="secondary"
                    className="sm:!w-fit w-full ml-auto py-[15px] !px-[48px] !rounded !text-[16px] "
                    font="mid"
                  >
                    {common["send_message"]}
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const ContactInput = ({ placeHolder, name, label, type = "" }: any) => {
  return (
    <div className="w-full bg-light-300 !rounded-[4px]">
      <Input
        name={name}
        placeholder={placeHolder}
        type={type}
        label={label}
        className="!text-primary-100"
        labelStyle="!text-primary-100 font-normal"
      />
    </div>
  );
};
