"use client";

import Image from "next/image";
import ProfilePic from "@/app/assets/profilepic.png";
import React from "react";
import "../style/hero.css";
import Button from "@/app/common/Button";
import { BsArrowRightShort } from "react-icons/bs";

export const handleClick = () => {};

const Hero = () => {
  return (
    <div className="grid grid-cols-7 bg-white">
      <div className="col-span-4 flex justify-start items-center pl-20 pt-20 pb-20">
        <div className="flex flex-col  sm:gap-8">
          <h1 className="text-5xl font-bold leading-[4rem] text-black">
          I&apos;m Daniel Gutiérrez{" "}
            <span
              className="inline-block bg-gradient-to-r from-primary via-black to-primary bg-clip-text text-transparent"
              style={{
                animation: "gradient 3s linear infinite",
                backgroundSize: "200% auto",
                display: "inline-block",
              }}
            >
              Back-End
            </span>{" "}
            Developer
          </h1>
          <p className="text-black text-base  ">
            Ninth semester student of Systems Engineering with knowledge in
            backend development, using the Java language and Spring Boot
            framework. Experience developing in dynamic environments and
            collaborating with cross-functional teams, delivering quality
            solutions that meet the stated requirements.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/oswald-daniel-gutierrez-cortina-152366297/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text="Hire me"
                icon={<BsArrowRightShort />}
                iconPosition="right" onClick={function (): void {
                  throw new Error("Function not implemented.");
                } }              ></Button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <Image
          className="w-[70%] rounded-full"
          src={ProfilePic}
          alt="profilepic"
        />
      </div>
    </div>
  );
};

export default Hero;
