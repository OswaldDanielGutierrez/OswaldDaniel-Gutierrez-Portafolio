import React from "react";

interface cardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}
const Card = ({ icon, title, description, className }: cardProps) => {
  return (
    <div
      className={`h-[225px] bg-white flex-col flex justify-center items-center gap-2 cursor-pointer 
        ${className}`}
    >
      <div className="text-[80px] pt-2 text-primary">{icon}</div>
      <h1 className="font-bold text-center">{title}</h1>
      <h2 className="text-gray-500 text-center">{description}</h2>
    </div>
  );
};

export default Card;
