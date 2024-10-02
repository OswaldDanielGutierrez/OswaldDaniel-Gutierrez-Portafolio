import React from "react";
import Section from "@/app/common/Section";
import Card from "@/app/common/CardPortfolio";
import Flete from "@/app/assets/Flete.png";
import Invenrory from "@/app/assets/inventory.png";
import Bancolombia from "@/app/assets/bancolombia.jpg";
import Payroll from "@/app/assets/payroll.png";



const Portfolio = () => {
  return (
    <div className="mb-20 text-black">
      <Section
        title="Portfolio"
        description="Projects I have been involved in."
      />

      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block mr-20">
          <Card
            image={Invenrory}
            title="PC Inventory Management"
            description="Developed an inventory management application for laboratory computers with Spring Boot and Angular, utilizing MySQL for database management and collaborating on testing and debugging."
            url="https://github.com/OswaldDanielGutierrez?tab=repositories"
          />
        </div>
        <div className="inline-block mr-20">
          <Card
            image={Bancolombia}
            title="Bancolombia Fiduciary SMS"
            description="I developed an application that sends parameterized alert messages to Fiduciaria Bancolombia’s clients using the TWILIO messaging service."
            url="https://github.com/OswaldDanielGutierrez?tab=repositories"
          />
        </div>
        <div className="inline-block mr-20">
          <Card
            image={Payroll}
            title="Payroll Management"
            description="I developed the application using Java 17 and Spring Boot with microservices to manage employees, overtime, and payroll."
            url="https://github.com/OswaldDanielGutierrez/Proyecto-gestion-humana"
          />
        </div>
        <div className="inline-block mr-20">
          <Card
            image={Flete}
            title="Freight Administration"
            description="I created a Power Apps application for freight management that streamlines the process of tracking shipments, managing logistics, and optimizing transportation resources."
            url="https://github.com/OswaldDanielGutierrez?tab=repositories"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
