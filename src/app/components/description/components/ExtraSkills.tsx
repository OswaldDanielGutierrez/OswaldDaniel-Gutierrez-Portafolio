import { Label } from "@/app/common/Label";
import React from "react";
import { FaGitAlt, FaFileExcel } from "react-icons/fa";
import { HiMiniCube } from "react-icons/hi2";

const ExtraSkills = () => {
  return (
    <div>
      <h1 className="font-bold mt-4 mb-2 text-black">Extra Skills</h1>

      <div className="flex gap-2 p-2">
        <FaGitAlt className="text-primary" />
        <Label text="Git" className="text-black" />
      </div>

      <div className="flex gap-2 p-2">
        <FaFileExcel className="text-primary" />
        <Label text="Excel" className="text-black" />
      </div>

      <div className="flex gap-2 p-2">
        <HiMiniCube className="text-primary" />
        <Label text="JWT" className="text-black" />
      </div>

      <div className="flex gap-2 p-2">
        <HiMiniCube className="text-primary" />
        <Label text="SCRUM" className="text-black" />
      </div>

      <div className="flex gap-2 p-2">
        <HiMiniCube className="text-primary" />
        <Label text="SonarCloud" className="text-black" />
      </div>
    </div>
  );
};

export default ExtraSkills;
