import React from "react";
import { Label } from "@/app/common/Label";

const MyInfo = () => {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <Label text="Age:" className="text-black" />
        <Label text="22" className="text-black" />
      </div>
      <div className="flex justify-between mt-2">
        <Label text="Recidence:" className="text-black" />
        <Label text="Medellín" className="text-black" />
      </div>
      <div className="flex justify-between mt-2">
        <Label text="Phone:" className="text-black" />
        <Label text="3102580351" className="text-black" />
      </div>
    </div>
  );
};

export default MyInfo;
