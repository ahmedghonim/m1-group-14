import React from "react";
import AddressIcon from "@svg/address.svg";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";
import { translation } from "@/i18n";

async function Address({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "en" | "ar";
}) {
  const { t } = await translation(lang, "common");
  return (
    <div className="flex gap-1">
      <span>
        <AddressIcon className="scale-75" />
      </span>
      <div className="flex flex-col">
        {children}
        <address>
          <span className="text-white lg:text-[20px] sm:text-[12px] text-[18px] font-bold">
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/SvRVmCnG3cD52rHWA?g_st=iwb"
              className="hover:underline"
            >
              - {t("address_eg")}
            </Link>
            <br />- {t("address_du")}
          </span>
        </address>
      </div>
    </div>
  );
}

export default Address;
