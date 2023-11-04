import Image from "next/image";
import React from "react";

interface Props {
  children?: React.ReactNode;
  image: string | any;
}

export default function IntroSection({ children, image }: Props) {
  return (
    <div className="relative w-full md:h-[calc(100vh-125px)] h-[250px]">
      <Image
        src={image}
        alt=""
        width={1000}
        height={1000}
        className="w-full !h-full"
      />
      {children}
    </div>
  );
}
