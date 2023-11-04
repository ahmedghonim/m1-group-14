import HomeIntro from "../../_components/public-page/home/intro-section";
import Statistics from "../../_components/public-page/home/statistics";
import AboutUS from "../../_components/public-page/home/about-us";
import WhyUs from "../../_components/public-page/home/why-us";
import Services from "../../_components/public-page/services";
import Link from "next/link";
import Clients from "../../_components/public-page/home/clients";
import { translation } from "@/i18n";
import servesData from "../../_components/public-page/our-serves/mockdata";
import { getHeroData } from "../(admin)/admin/api-calls";
import { HeroTypes } from "../(admin)/admin/page";
import { getInoNumbersData } from "../(admin)/admin/our-industries/api-calls";
import { NumbersInfo } from "@prisma/client";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "ar" };
}) {
  const { t } = await translation(lang, "common");
  const heroData = (await getHeroData()) as HeroTypes;
  const inoNumbersData = (await getInoNumbersData()) as NumbersInfo;
  return (
    <div>
      <section className="w-full">
        <HomeIntro data={heroData} />
        <Statistics data={inoNumbersData} />
        <AboutUS lang={lang} />
        <WhyUs />
        <Services
          className="bg-[#F2E4BF] md:pt-[70px] pt-10 md:pb-[108px] pb-10 px-6 rounded-[12px]"
          data={servesData as any}
          lang={lang}
        >
          <div className="flex justify-end">
            <Link
              href="/our-services"
              className="bg-dark-100 !text-[16px] py-3 px-5 text-white hover:opacity-60 duration-200 rounded font-Lato font-bold mt-6"
            >
              {t("read_more")}
            </Link>
          </div>
        </Services>
        <Clients />
      </section>
    </div>
  );
}
