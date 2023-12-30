"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "./utils";

interface Props {
  images: string[];
}
export function SliderThumb({ images }: Props) {
  const [currentImg, setCurrentImg] = useState(0);
  const btnClass =
    "absolute disabled:opacity-50 sm:hidden sm:flex justify-center items-center disabled:cursor-not-allowed translate-x-1/2 top-1/2 -translate-y-1/2  p-[14px]  z-10";

  return (
    <div className="flex max-w-full gap-2">
      <div className=" hidden h-[600px] flex-col gap-2 sm:flex overflow-hidden">
        {images.map((image, index) =>
          image ? (
            <div
              key={index}
              onClick={() => setCurrentImg(index)}
              className={cn(
                "flex h-[210px] cursor-pointer items-center justify-center bg-natural-600/60 px-5",
                { "rounded border-2 border-primary-100": currentImg === index }
              )}
            >
              <Image
                width={600}
                height={600}
                src={image}
                alt=""
                className="h-[200px]  w-fit object-contain"
              />
            </div>
          ) : null
        )}
      </div>
      <div className="relative  w-full bg-natural-600/60 overflow-auto h-[600px]">
        <button
          onClick={() => {
            if (currentImg === images.length - 1) {
              return setCurrentImg(0);
            }
            setCurrentImg((prev) => prev + 1);
          }}
          className={cn(btnClass, "right-2 !translate-x-0 sm:right-5")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-5 w-5 -translate-y-1/2 translate-x-1/2 sm:h-9 sm:w-9 sm:translate-x-0 sm:translate-y-0"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M12.9206 24.9185L11.0821 23.08L18.1629 15.9992L11.0821 8.91846L12.9206 7.07998L21.8398 15.9992L12.9206 24.9185Z"
              fill="#545353"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            if (currentImg === 0) return;
            setCurrentImg((prev) => prev - 1);
          }}
          className={cn(btnClass, "left-0 translate-x-0 ")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 -translate-y-1/2 translate-x-1/2 sm:h-9 sm:w-9 sm:translate-x-0 sm:translate-y-0"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M19.0794 7.08154L20.9179 8.92002L13.8371 16.0008L20.9179 23.0815L19.0794 24.92L10.1602 16.0008L19.0794 7.08154Z"
              fill="#545353"
            />
          </svg>
        </button>
        <Image
          width={800}
          height={800}
          src={images[currentImg]}
          alt=""
          className="h-[234px]  w-full object-contain sm:h-[600px]"
        />
      </div>
    </div>
  );
}
