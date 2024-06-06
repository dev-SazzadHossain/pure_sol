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
      <section className=" w-full ">
        <Hero />
      </section>
      {/* middle */}
      <section className="relative backgroundColor">
        <SubHero />
      </section>
      <section className="w-full">
        <div className="2xl:container xl:container lg:container md:container sm:container container relative py-[93px] px-4  mx-auto ">
          <Work />
          <Menu />
          <MoneyBack />
          <Pricing />
          <Faq />
        </div>
      </section>
    </div>
  );
}
