import { nunito, readexPro } from "@/utils/Font";
import React from "react";
import PricingCard from "./PricingCard/PricingCard";
const pricingItems = [
  {
    id: 1,
    items: [
      "4 meetings",
      "3 to 5 basic systems",
      "Unlimited automations",
      "Unlimited corrections ",
      "Training",
      "30 Days money back guarantee",
    ],
    buttonText: "Sign Up Now",
  },
  {
    id: 2,
    items: [
      "4 meetings",
      "5 to 8 advanced systems",
      "Unlimited automations",
      "Unlimited corrections ",
      "Training",
      "30 Days money back guarantee",
    ],
    buttonText: "Sign Up Now",
  },
  {
    id: 3,
    items: [
      "Build your custom plan",
      "Unlimited automations",
      "Unlimited corrections ",
      "Training",
      "30 Days money back guarantee",
    ],
    buttonText: "Book a Call",
  },
];

const Pricing = () => {
  return (
    <div className="py-[96px] lg:w-[1160px] mx-auto">
      <h2
        className={`text-center textColor font-bold text-[20px] ${readexPro.className} tracking-wider`}
      >
        {" "}
        choose your plan
      </h2>
      <h1
        className={`text-center text-[#4A326F] font-semibold text-[50px] ${readexPro.className} py-[20px]`}
      >
        Invest in Your Business’s Growth
      </h1>

      <p
        className={`text-center text-[#6F7782] font-medium text-[18px] ${nunito.className} leading-[24px] menuText`}
      >
        Scaling a business requires many steps, most of which are repetitive and
        unique. Our job is to analyze
      </p>
      <p
        className={`text-center text-[#6F7782] font-medium text-[18px] ${nunito.className} leading-[24px] menuText`}
      >
        these steps, establish systems to meet your scaling needs, and create
        automated solutions.
      </p>
      <p
        className={`text-center text-[#6F7782] font-medium text-[18px] ${nunito.className} leading-[24px] menuText pb-[36px]`}
      >
        Choose a package and let us build your systems and automation agents.
      </p>
      <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  rounded-[12px]">
        {pricingItems.map((item) => (
          <PricingCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
