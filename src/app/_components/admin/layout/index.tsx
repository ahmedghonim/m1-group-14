import VerticalBar from "../../shared/vertical-bar";
import AboutUs from "@svg/about-us.svg";
import OurIndustries from "@svg/our-industries.svg";
import OurServes from "@svg/our-serves.svg";
import OurClient from "@svg/our-client.svg";
import Faq from "@svg/fqa.svg";
import Messages from "@svg/messages.svg";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export default async function DashboardLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const headersList = headers();

  const referer = headersList.get("referer");

  if (referer) {
    const request = new NextRequest(referer);
    console.log(request.nextUrl.pathname);
  }

  const sideBar = [
    {
      name: "hero",
      link: `/${lang}/admin`,
      icon: <AboutUs className="fill-current" />,
    },
    {
      name: "about-us",
      link: `/${lang}/admin/about-us`,
      icon: <AboutUs className="fill-current" />,
    },
    {
      name: "our-industries",
      link: `/${lang}/admin/our-industries`,
      icon: <OurIndustries className="fill-current" />,
    },
    {
      name: "our-services",
      link: `/${lang}/admin/our-services`,
      icon: <OurServes className="fill-current" />,
    },
    {
      name: "our-client",
      link: `/${lang}/admin/our-client`,
      icon: <OurClient className="fill-current" />,
    },
    {
      name: "fqa",
      link: `/${lang}/admin/our-fqa`,
      icon: <Faq className="fill-current" />,
    },
    {
      name: "messages",
      link: `/${lang}/admin/messages`,
      icon: <Messages className="fill-current" />,
    },
  ];
  return (
    <div className="flex flex-row gap-8">
      <nav className="flex flex-col gap-16 w-[299px] rounded-s-none rounded-3xl shadow-2xl h-screen sticky top-0 overflow-hidden">
        <VerticalBar navBar={sideBar} className="relative" />
      </nav>
      <main className=" flex flex-col gap-6 py-12 pe-9 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
