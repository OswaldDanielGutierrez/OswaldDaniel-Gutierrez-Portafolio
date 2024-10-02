import React from "react";
import Hero from "./components/Hero";
import MyKnowledge from "./components/MyKnowledge";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const Information = () => {
  return (
    <div>
      <Hero />
      <MyKnowledge />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Information;
