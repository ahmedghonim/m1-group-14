import React from "react";
import Vision from "@svg/vision-icon.svg";
import Mission from "@svg/mission.svg";
import Objective from "@svg/objective.svg";
import { Text } from "@/app/_ui";
import { getDictionary } from "@/dictionary";

interface SingleCardType {
  title: string;
  Icon: React.ElementType;
  desc: string;
  common: any;
}

const SingleCard = async ({ common, title, Icon, desc }: SingleCardType) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Icon />
      <Text font="bold" as="h2" className="text-[28px] font-Lato ">
        {common.title}
      </Text>
      <p
        // dangerouslySetInnerHTML={{ __html: common.desc }}
        className="text-start text-sm font-Lato font-bold"
      />
    </div>
  );
};

export default function WhyUs({ common }: { common: any }) {
  return (
    <div className="lg:mx-[120px] px-6 md:mt-[175px] mt-10">
      <Text
        as="h2"
        font="bold"
        className="!text-[28px] md:!text-[48px] font-Lato mb-6"
      >
        {common.why_us}
      </Text>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <SingleCard
          common={common}
          title="vision"
          Icon={Vision}
          desc="vision_desc"
        />
        <SingleCard
          common={common}
          title="mission"
          Icon={Mission}
          desc="mission_desc"
        />
        <SingleCard
          common={common}
          title="objective"
          Icon={Objective}
          desc="objective_desc"
        />
      </div>
    </div>
  );
}
