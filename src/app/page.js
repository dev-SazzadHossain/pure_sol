import Faq from "@/Components/Faq/Faq";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Components/Hero/Hero";
import Menu from "@/Components/Menu/Menu";
import MoneyBack from "@/Components/MoneyBack/MoneyBack";
import Pricing from "@/Components/Pricing/Pricing";
import SubHero from "@/Components/SubHero/SubHero";
import Work from "@/Components/Work/Work";

import { nunito } from "@/utils/Font";

export default function Home() {
  return (
    <div>
      {/* middle */}
      <div className="2xl:w-[1920px] xl:w-[1320px] lg:w-[1320px] md:w-full sm:w-full w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-5">
        {" "}
        <div className="py-[154px]">
          <Hero />
        </div>
      </div>
      {/* middle */}
      <div className=" relative">
        <SubHero />
      </div>
      <div className="py-[93px] 2xl:w-[1920px] xl:w-[1320px] lg:w-[1320px] md:w-full sm:w-full w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-5">
        <Work />
        <Menu />
        <MoneyBack />
        <Pricing />
        <Faq />
      </div>
    </div>
  );
}
