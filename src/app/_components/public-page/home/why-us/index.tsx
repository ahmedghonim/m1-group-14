"use client";
import React, { useTransition } from "react";
import Vision from "@svg/vision-icon.svg";
import Mission from "@svg/mission.svg";
import Objective from "@svg/objective.svg";
import { Text } from "@/app/_ui";
import { useTranslation } from "@/i18n/client";

interface SingleCardType {
  title: string;
  Icon: React.ElementType;
  desc: string;
}

const SingleCard = ({ title, Icon, desc }: SingleCardType) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col items-center gap-3">
      <Icon />
      <Text font="bold" as="h2" className="text-[28px] font-Lato ">
        {t(title)}
      </Text>
      <p
        dangerouslySetInnerHTML={{ __html: t(desc) }}
        className="text-start text-sm font-Lato font-bold"
      />
    </div>
  );
};

export default function WhyUs() {
  const { t } = useTranslation("common");
  return (
    <div className="lg:mx-[120px] px-6 md:mt-[175px] mt-10">
      <Text
        as="h2"
        font="bold"
        className="!text-[28px] md:!text-[48px] font-Lato mb-6"
      >
        {t("why_us")}
      </Text>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <SingleCard title="vision" Icon={Vision} desc="vision_desc" />
        <SingleCard title="mission" Icon={Mission} desc="mission_desc" />
        <SingleCard title="objective" Icon={Objective} desc="objective_desc" />
      </div>
    </div>
  );
}
