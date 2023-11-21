"use client";
import React, { useState } from "react";

import Plus from "@svg/plus.svg";
import clsx from "clsx";
import { Text } from "@/app/_ui";
import { getDictionary } from "@/dictionary";

interface SingleQuestionProps {
  number?: number;
  question: string;
  answer: string;
}

export const SingleQuestion = ({ question, answer }: SingleQuestionProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div
      className={`collapse py-3 md:py-5 ${
        clicked
          ? "border-primary-100 border-b-[2px]"
          : "border-[#C2BBFF] border-b-[1px]"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      <input type="checkbox" />
      <div className="collapse-title relative flex items-center">
        <Text
          font="mid"
          className="font-Inter text-black !text-[16px] md:!text-[24px]"
        >
          {question}
        </Text>
        <span
          className={clsx("absolute right-2 top-1/2 duration-300 ", {
            "-translate-y-1/2 rotate-[135deg]": clicked,
            "-translate-y-1/2": !clicked,
          })}
        >
          <Plus className="scale-[1.2] fill-black" />
        </span>
      </div>
      <div className="collapse-content">
        <p
          className="!text-start"
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      </div>
    </div>
  );
};

function FAQS({
  questions,
  lang,
  common,
}: {
  questions: SingleQuestionProps[];
  lang: string;
  common: any;
}) {
  return (
    <div className="my-14 px-6 md:px-[120px]">
      <Text
        as="h2"
        font="semi"
        className="!text-primary-100 font-Inter !text-3xl lg:!text-[48px] mb-4 md:!leading-[65px]"
      >
        {common.frequently_head}
      </Text>
      <div className="flex flex-col mx-auto lg:px-4">
        {questions.map(({ question, answer }, index) => {
          return (
            <SingleQuestion
              key={index}
              question={question[lang as any]}
              answer={answer[lang as any]}
              number={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQS;
