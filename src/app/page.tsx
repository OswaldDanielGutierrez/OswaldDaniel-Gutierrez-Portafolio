import React from "react";
import Description from "./components/description/Description";
import Information from "./components/information/Information";
import Links from "./components/links/Links";

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-background">
      <div className="col-span-2 flex flex-col h-screen bg-white sticky top-0 overflow-y-auto">
        <Description />
      </div>

      <div className="col-span-9 ml-5 h-auto overflow-y-auto">
        <Information />
      </div>

      <div className="col-span-1 bg-white ml-6 h-screen sticky top-0">
        <Links />
      </div>
    </div>
  );
};

export default Home;
