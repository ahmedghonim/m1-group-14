import HomeIntro from "../../_components/public-page/home/intro-section";
import Statistics from "../../_components/public-page/home/statistics";
import AboutUS from "../../_components/public-page/home/about-us";
import WhyUs from "../../_components/public-page/home/why-us";
import Services from "../../_components/public-page/services";
import Link from "next/link";
import Clients from "../../_components/public-page/home/clients";
import { getDictionary } from "@/dictionary";
import { getHeroData } from "../(admin)/admin/api-calls";
import { HeroTypes } from "../(admin)/admin/page";
import { getInoNumbersData } from "../(admin)/admin/our-industries/api-calls";
import { NumbersInfo, quite } from "@prisma/client";
import { getAboutData } from "../(admin)/admin/about-us/api-calls";
import { AboutTypes } from "../(admin)/admin/about-us/page";
import { getServiceData } from "../(admin)/admin/our-services/api-calls";
import { getClientData } from "../(admin)/admin/our-client/api-calls";
import { getQuiteData } from "../(admin)/admin/quite/api-calls";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { common } = await getDictionary(lang);
  const heroData = (await getHeroData()) as HeroTypes;
  const inoNumbersData = (await getInoNumbersData()) as NumbersInfo;
  const aboutData = (await getAboutData()) as AboutTypes;
  const ServiceData = await getServiceData();
  const clientData = await getClientData();
  const quiteData = (await getQuiteData()) as quite;
  return (
    <div>
      <section className="w-full">
        <HomeIntro data={heroData} common={common} lang={lang} />
        <Statistics data={inoNumbersData} common={common} />
        <AboutUS lang={lang} data={aboutData} />
        <WhyUs common={common} />
        <Services
          className="bg-[#F2E4BF] md:pt-[70px] pt-10 md:pb-[108px] pb-10 px-6 rounded-[12px]"
          data={ServiceData as any}
          lang={lang}
        >
          <div className="flex justify-end">
            <Link
              href={`/${lang}/our-services`}
              className="bg-dark-100 !text-[16px] py-3 px-5 text-white hover:opacity-60 duration-200 rounded font-Lato font-bold mt-6"
            >
              {common.read_more}
            </Link>
          </div>
        </Services>
        <Clients
          common={common}
          data={clientData}
          quiteData={quiteData}
          lang={lang}
        />
      </section>
    </div>
  );
}
