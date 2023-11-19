import { Text } from "@/app/_ui";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import { getDictionary } from "@/dictionary";

interface ServicesCardProps {
  image: string;
  title: string;
  description: string;
  lang: string;
}

const ServicesCard = ({ image, title, lang }: ServicesCardProps) => {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="image"
        className="h-full w-full"
      />
      <div className="absolute bottom-0  left-0 w-full bg-primary-100 bg-opacity-60 py-3 duration-300 name">
        <Text
          font="bold"
          as="h3"
          className="font-Lato !text-[28px] !text-white"
        >
          {title[lang as any]}
        </Text>
      </div>
    </div>
  );
};

interface ServicesProps {
  data: [];
  children: React.ReactNode;
  headStyle?: string;
  className?: string;
  lang: string;
}

export default async function Services({
  data,
  className,
  headStyle,
  children,
  lang,
}: ServicesProps) {
  const { common } = await getDictionary(lang);
  return (
    <div className="md:pt-[124px] pt-[40px]">
      <Text
        as="h2"
        font="bold"
        className={clsx("!mb-10 !text-3xl lg:!text-[48px]", headStyle)}
      >
        {common.our_services}
      </Text>

      {/* -------- our services ------- */}
      <div className={clsx("lg:px-[120px]", className)}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14">
          {data.slice(0, 6).map((service, index) => (
            <ServicesCard
              key={index}
              //@ts-ignore
              lang={lang}
              {...(service as ServicesCardProps)}
            />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
