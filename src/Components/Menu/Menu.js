import React from "react";
import SingleMenu from "./SingleMenu/SingleMenu";
import { nunito, readexPro } from "@/utils/Font";
import img1 from "../../../public/assets/Vector.png";
import img2 from "../../../public/assets/Vector (1).png";
import img3 from "../../../public/assets/Vector (2).png";
import img4 from "../../../public/assets/Vector (3).png";
import img5 from "../../../public/assets/Vector (4).png";
import img6 from "../../../public/assets/Success Rate.png";
import img7 from "../../../public/assets/Vector (6).png";
import img8 from "../../../public/assets/hand.png";

const menuItems = [
  {
    id: 1,
    img: img1,
    title: "CRM solutions",
    description:
      "Enhance client management and communication through our personalized CRM automation solutions.",
  },
  {
    id: 2,
    img: img2,
    title: "Leads & sales",
    description:
      "Automate lead capture and nurturing to optimize your sales pipeline and boost conversions.",
  },
  {
    id: 3,
    img: img3,
    title: "Project & tasks",
    description:
      "Enhance productivity by automating menuflows for simplified task tracking and project management.",
  },
  {
    id: 4,
    img: img4,
    title: "Content",
    description:
      "Automate content creation & distribution, social media posts, and marketing campaigns.",
  },
  {
    id: 5,
    img: img5,
    title: "eCom & inventory",
    description:
      "Enhance inventory management and order processing using our e-commerce automation solutions.",
  },
  {
    id: 6,
    img: img6,
    title: "Admin & financial",
    description:
      "Streamline operations by automating administrative and financial processes such as billing, payments, and scheduling.",
  },
  {
    id: 7,
    img: img7,
    title: "Data & AI solutions",
    description:
      "Gain insights with automated data analytics and AI-driven solutions tailored to your business needs.",
  },
  {
    id: 8,
    img: img8,
    title: "Customer support",
    description:
      "Use AI-powered support systems to improve customer service with faster and more efficient responses.",
  },
];

const Menu = () => {
  return (
    <div className="py-[64px]">
      <h3
        className={`text-center textColor font-bold text-[20px] ${readexPro.className} tracking-wider`}
      >
        {" "}
        we build what scales your business
      </h3>
      <h2
        className={`text-center text-[#4A326F] font-semibold text-[50px] ${readexPro.className} py-[20px]`}
      >
        How does it menu?
      </h2>

      <p
        className={`text-center text-[#6F7782] font-medium text-[16px] ${nunito.className} leading-[24px] menuText`}
      >
        Scaling your business is a challenge, especially when mundane tasks take
        up your time and resources. We create
      </p>
      <p
        className={`text-center text-[#6F7782] font-medium text-[16px] ${nunito.className} leading-[24px] menuText`}
      >
        smart agents and automations that handle repetitive tasks, as well as
        new features and ways to expand your
      </p>
      <p
        className={`text-center text-[#6F7782] font-medium text-[16px] ${nunito.className} leading-[24px] menuText pb-[36px]`}
      >
        business.
      </p>

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[24px] rounded-[10px]">
        {menuItems?.map((menu) => {
          return <SingleMenu key={menu?.id} menu={menu} />;
        })}
      </div>
    </div>
  );
};

export default Menu;
