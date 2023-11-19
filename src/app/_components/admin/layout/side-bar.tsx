import React from "react";
import AboutUs from "@svg/about-us.svg";
import OurIndustries from "@svg/our-industries.svg";
import OurServes from "@svg/our-serves.svg";
import OurClient from "@svg/our-client.svg";
import Faq from "@svg/fqa.svg";
import Messages from "@svg/messages.svg";
import VerticalBar from "../../shared/vertical-bar";
import { getDictionary } from "@/dictionary";

async function SideBar({ params }: { params: any }) {
  const { lang } = params;
  const { common } = await getDictionary(lang);
  const sideBar = [
    { name: "about-us", link: "/admin", icon: AboutUs },
    {
      name: "our-industries",
      link: "admin/our-industries",
      icon: OurIndustries,
    },
    { name: "our-services", link: "/admin/our-services", icon: OurServes },
    { name: "our-client", link: "/admin/our-client", icon: OurClient },
    { name: "fqa", link: "/admin/our-fqa", icon: Faq },
    { name: "messages", link: "/admin/messages", icon: Messages },
  ];

  return (
    <nav className="flex flex-col gap-16 w-[299px] rounded-s-none rounded-3xl shadow-2xl h-screen sticky top-0 overflow-hidden">
      <VerticalBar common={common} navBar={sideBar} className="relative" />
    </nav>
  );
}

export default SideBar;
