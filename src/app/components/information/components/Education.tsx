import React from "react";
import Section from "@/app/common/Section";

const Education = () => {
  return (
    <div className="text-black">
      <Section
        title="Education"
        description="I am a passionate and self-motivated individual who thrives on continuous learning and development. My enthusiasm for my work drives me to constantly seek new knowledge and skills."
      />
      <div className="p-[50px] bg-white">
        <div className="grid grid-cols-7">
          <div className="col-span-3 flex flex-col gap-y-6 mt-3">
            <h1 className="font-bold text-black">University of Antioquia</h1>
            <div className="flex gap-x-6">
              <div className="flex items-center">
                <h2 className="text-[15px] bg-primary text-white p-1 rounded-md">
                  June 2019 - Present
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-y-6 mt-3">
            <h1 className="text-[20px] font-bold text-black">System Engineering</h1>
            <h2 className="text-black gap-y-4 text-justify">
            I am a dedicated Systems Engineering student at the University of Antioquia, focused on developing technical skills in software development, data structures, algorithms, and systems architecture. With a strong foundation in programming languages such as Java, I have experience using frameworks like Spring Boot to build scalable applications. 
            </h2>
          </div>
        </div>
      </div>

      <hr className="my-4 border-t-2 border-gray-300" />


    </div>
  );
};

export default Education;
