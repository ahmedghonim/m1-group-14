"use client";
import { useTranslation } from "@/i18n/client";
import React, { useRef } from "react";
import SwiperArrow from "@svg/swiper-arrow.svg";

/* ------- Swiper Imports ------ */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import { Text } from "@/app/_ui";

export default function Clients() {
  const { t } = useTranslation("common");

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const clientsImages = [
    "/clients/2.png",
    "/clients/3.jpg",
    "/clients/4.jpeg",
    "/clients/5.png",
    "/clients/6.jpg",
    "/clients/7.jpg",
    "/clients/8.jpeg",
    "/clients/9.jpeg",
    "/clients/10.jpeg",
  ];
  return (
    <div className="lg:px-[120px] px-6 md:pt-[100px] pt-8 md:pb-[126px] pb-[60px]">
      <Text
        as="h3"
        font="bold"
        className="!text-[28px] md:!text-[48px] md:mb-[30px] lg:w-3/4 mx-auto"
      >
        {t("our_clients")}
      </Text>

      {/* -------- our clients -------- */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1.5}
          autoplay={{ delay: 3000 }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          className="!items-center flex"
          breakpoints={{
            768: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.5 },
            1200: { slidesPerView: 5 },
          }}
        >
          {clientsImages.map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} width={200} height={200} alt="client" />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-1/2 -translate-y-1/2 -left-6 rotate-180 hidden lg:block"
          ref={navigationPrevRef}
        >
          <SwiperArrow />
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 -right-6 hidden lg:block"
          ref={navigationNextRef}
        >
          <SwiperArrow />
        </button>
      </div>
      <Text as="p" font="bold" className="mt-8 !text-[20px]">
        {t("client_sub_word")}
      </Text>
    </div>
  );
}
