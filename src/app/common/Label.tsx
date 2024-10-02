import React from "react";

interface LabelProps {
  text: string;
  // htmlFor?: string; //opcional xd
  className?: string;
}
export const Label = ({ text, className }: LabelProps) => {
  return <label className={`${className}`}>{text}</label>;
};
