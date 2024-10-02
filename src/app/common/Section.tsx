import React from "react";

interface Props {
  title: string;
  description: string;
}

const Section = ({ title, description }: Props) => {
  return (
    <div className="p-[50px] ">
      <h2 className="text-4xl font-bold mb-4 text-center gap-5">{title}</h2>
      <p className="text-gray-600 text-base leading-relaxed break-words text-center">
        {description}
      </p>
    </div>
  );
};

export default Section;
