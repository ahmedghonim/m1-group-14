"use client";
import clsx from "clsx";
import { useTranslation } from "@/i18n/client";
import React from "react";
import { Text } from "@/app/_ui";
import { NumbersInfo } from "@prisma/client";

export default function Statistics({ data }: { data: NumbersInfo }) {
  const { t } = useTranslation("common");

  const numbers = [
    {
      count: data?.service + "+",
      name: t("services"),
    },
    {
      count: data?.customer + "%",
      name: t("usefully"),
    },

    {
      count: data?.takeService + "K+",
      name: t("client"),
    },
  ];

  return (
    <div className="flex justify-center items-center mx-auto mt-[35px] px-6">
      {numbers.map(({ name, count }, index) => (
        <div
          key={name}
          className={clsx("text-center", {
            "border-l border-r border-[#EAECF0] px-6": index === 1,
            "md:px-6": index !== 1,
          })}
        >
          <Text
            as="h2"
            font="semi"
            className="!text-primary-100 !text-2xl md:!text-6xl"
          >
            {count}
          </Text>
          <Text className="!text-sm md:!text-lg">{name}</Text>
        </div>
      ))}
    </div>
  );
}
