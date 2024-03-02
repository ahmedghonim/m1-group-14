import React from "react";
import AddressIcon from "@svg/address.svg";

import Link from "next/link";
import { getDictionary } from "@/dictionary";
import { Contact } from "@prisma/client";

async function Address({
  children,
  lang,
  data,
}: {
  children: React.ReactNode;
  lang: "en" | "ar";
  data: Contact | null;
}) {
  const { common } = await getDictionary(lang);
  return (
    <div className="flex gap-1">
      <span>
        <AddressIcon className="scale-75" />
      </span>
      <div className="flex flex-col">
        {children}
        <address>
          <span className="lg:text-[20px] sm:text-[12px] text-[18px] font-bold flex">
            -{" "}
            {
              <span
                dangerouslySetInnerHTML={{
                  __html: data?.address[0] || common.address,
                }}
              ></span>
            }
          </span>
          <span className="lg:text-[20px] sm:text-[12px] text-[18px] font-bold flex">
            -{" "}
            <span
              dangerouslySetInnerHTML={{
                __html: data?.address[1] || common.address,
              }}
            ></span>
          </span>
        </address>
      </div>
    </div>
  );
}

export default Address;
