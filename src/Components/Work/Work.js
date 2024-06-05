import { nunito, readexPro } from "@/utils/Font";
import React from "react";
import SingleWork from "./SingleWork/SingleWork";

const singleWork = [
  {
    id: 1,
    title: "Identify your processes",
    description:
      "We examine your workflows to identify any inefficiencies and areas where productivity and sales can be improved.",
  },
  {
    id: 2,
    title: "Build digital systems",
    description:
      "Whether it’s enhancing your existing systems or starting from scratch, our goal is to optimize your processes and incorporate KPIs to gauge success.",
  },
  {
    id: 3,
    title: "Automate & run",
    description:
      "Press the ‘Run’ & watch your processes execute with AI-driven automations, tasks are handled independently.",
  },
];

const Work = () => {
  return (
    <div id="work">
      <h2
        className={`text-center textColor font-bold text-[20px] ${readexPro.className}`}
      >
        {" "}
        automate your business
      </h2>
      <h1
        className={`text-center text-[#4A326F] font-semibold text-[50px] ${readexPro.className} py-[24px]`}
      >
        How does it work?
      </h1>
      <p
        className={`text-center text-[#6F7782] font-medium text-[16px] ${nunito.className} leading-[24px] workText`}
      >
        We create smart agents and automations that handle repetitive tasks, as
        well as new features and ways to
      </p>
      <p
        className={`text-center text-[#6F7782]  text-[16px] font-medium ${nunito.className} leading-[24px] pb-[36px] workText`}
      >
        {" "}
        expand your business.
      </p>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-[20px] rounded-[10px]">
        {singleWork?.map((work) => {
          return <SingleWork key={work?.id} work={work} />;
        })}
      </div>
    </div>
  );
};

export default Work;
