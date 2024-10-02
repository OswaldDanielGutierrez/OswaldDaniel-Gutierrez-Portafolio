import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  url: string;
}

const CardPortfolio = ({ image, title, description, url }: CardProps) => {
  return (
    <div className="mb-5 cursor-pointer flex flex-col items-start pt-10 bg-white w-80 h-[550px]">
      <Image className="w-full h-60 object-contain" src={image} alt={title} />
      <div className="flex-col p-5">
        <h1 className="text-xl font-bold ">{title}</h1>
        <p className="text-gray-600 mt-2 h-auto whitespace-normal text-justify">
          {description}
        </p>{" "}
      </div>
      <Link
        href={url}
        className="text-primary font-bold items-center flex gap-x-2 mt-auto p-5"
      >
        Learn more <MdKeyboardArrowRight />
      </Link>
    </div>
  );
};

export default CardPortfolio;
