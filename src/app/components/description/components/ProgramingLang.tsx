import React from "react";
import ProgressBar from "@/app/common/ProgressBar";
import { Label } from "@/app/common/Label";

const ProgramingLang = () => {
  return (
    <div>
      <h1 className="font-bold mt-4 mb-2 text-black">Programming Languages</h1>

      <div className="flex justify-between">
        <Label text="Java:" className="text-black" />
        <Label text="90%:" className="text-black" />
      </div>
      <ProgressBar progress={90} height="h-1" color="bg-primary" />

      <div className="flex justify-between">
        <Label text="Spring Boot:" className="text-black" />
        <Label text="85%:" className="text-black" />
      </div>
      <ProgressBar progress={85} height="h-1" color="bg-primary" />

      <div className="flex justify-between">
        <Label text="SQL:" className="text-black" />
        <Label text="80%:" className="text-black" />
      </div>
      <ProgressBar progress={80} height="h-1" color="bg-primary" />

      <div className="flex justify-between">
        <Label text="Microsoft Power Platform" className="text-black" />
        <Label text="70%:" className="text-black" />
      </div>
      <ProgressBar progress={70} height="h-1" color="bg-primary" />
    </div>
  );
};

export default ProgramingLang;
