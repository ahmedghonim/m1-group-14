import React from "react";

function Paragraph({ description }: { description: string }) {
  return (
    <p
      className="!text-start leading-8 font-Lato !text-[16px] md:text-[21px]"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}

export default Paragraph;
