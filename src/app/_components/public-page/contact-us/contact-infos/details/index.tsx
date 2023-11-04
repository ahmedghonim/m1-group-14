import React from "react";
import Mail from "@svg/contact-mail.svg";

function ContactDetails({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <Mail className="stroke-white relative top-1" />
      <div className="flex flex-col">
        {children}
        <div className="flex flex-col lg:text-[20px] sm:text-[12px] text-[18px]">
          <a className="text-white  font-bold" href="tel:0550558253">
            01093000010{" "}
          </a>
          <a
            className="text-white font-bold break-all"
            href="mailto:info@m1group-mr.com"
          >
            info@m1group-mr.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
