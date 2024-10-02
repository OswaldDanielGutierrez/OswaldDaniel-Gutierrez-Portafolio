import React from "react";
import Card from "@/app/common/Card";
import { SiPowerapps } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { PiMonitorFill } from "react-icons/pi";
import Section from "@/app/common/Section";

const MyKnowledge = () => {
  return (
    <div className="flex flex-col justify-center text-black">
      <Section
        title="My Knowledge"
        description=" A demonstration of my skills in backend development and Power Apps, utilizing modern tools and technologies."
      />
      <div className="grid grid-cols-3 gap-4" >
        <Card icon={<PiMonitorFill  />} title="Backend Development" description="Specializing in backend development, I create robust server-side applications and APIs using Spring Boot." />
        <Card icon={<FaDatabase />} title="Database" description="Proficient in backend development with SQL, I build and integrate databases to support dynamic web applications and ensure efficient data handling." />
        <Card icon={<SiPowerapps />} title="Power Platform" description="Skilled in Power Platform development, I build applications and automate workflows to streamline business processes and enhance productivity." />

      </div>
    </div>
  );
};

export default MyKnowledge;
