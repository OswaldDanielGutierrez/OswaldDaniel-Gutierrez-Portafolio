import React from "react";
import { Label } from "@/app/common/Label";
import ProgressBar from "@/app/common/ProgressBar";

const Languages = () => {
  return (
    <div>
      <h1 className="font-bold mt-4 mb-2 text-black">Languages</h1>
      <div className="flex justify-between">
        <Label text="English:" className="text-black" />
        <Label text="60%:" className="text-black" />
      </div>
      <ProgressBar progress={50} height="h-1" color="bg-primary" />
      <div className="flex justify-between">
        <Label text="Spanish:" className="text-black" />
        <Label text="100%:" className="text-black" />
      </div>
      <ProgressBar progress={100} height="h-1" color="bg-primary" />
    </div>
  );
};

export default Languages;
