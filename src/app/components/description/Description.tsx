import React from "react";
import Profile from "./components/Profile";
import MyInfo from "./components/MyInfo";
import Languages from "./components/Languages";
import ProgramingLang from "./components/ProgramingLang";
import ExtraSkills from "./components/ExtraSkills";

const Description = () => {
  return (
    <div className="flex-col p-8">
      <Profile />
      <hr className="mt-2 mb-2" />
      <MyInfo />
      <hr className="mt-4 mb-2" />
      <Languages />
      <hr className="mt-6 mb-4" />
      <ProgramingLang />
      <hr className="mt-6 mb-4" />
      <ExtraSkills />
    </div>
  );
};

export default Description;
