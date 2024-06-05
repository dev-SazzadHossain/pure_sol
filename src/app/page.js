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
    <div className="container mx-auto lg:px-0 px-5">
      {/* middle */}
      <section className=" w-full ">
        {" "}
        <div className="py-[154px]">
          <Hero />
        </div>
      </section>
      {/* middle */}
      <section className=" relative">
        <SubHero />
      </section>
      <section className="w-full">
        <Work />
        <Menu />
        <MoneyBack />
        <Pricing />
        <Faq />
      </section>
    </div>
  );
}
