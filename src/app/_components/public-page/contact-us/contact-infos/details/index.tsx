import React from "react";
import Mail from "@svg/contact-mail.svg";
import { Contact } from "@prisma/client";

function ContactDetails({
  children,
  data,
}: {
  children: React.ReactNode;
  data: Contact | null;
}) {
  return (
    <div className="flex gap-2">
      <Mail className="stroke-white relative top-1" />
      <div className="flex flex-col">
        {children}
        <div className="flex flex-col lg:text-[20px] sm:text-[12px] text-[18px]">
          {data?.phone?.map((phone, index) => {
            return (
              <a
                key={index}
                className="text-white font-bold break-all"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            );
          })}
          {data?.email?.map((email, index) => {
            return (
              <a
                key={index}
                className="text-white font-bold break-all"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
