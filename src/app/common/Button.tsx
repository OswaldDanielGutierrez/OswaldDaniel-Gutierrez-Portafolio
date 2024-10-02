import React from "react";

interface Props {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode; // Ícono opcional
  iconPosition?: "left" | "right"; // Posición del ícono (izquierda o derecha)
  className?: string; // Clases adicionales opcionales
}

const Button = ({
  text,
  onClick,
  icon,
  iconPosition = "left",
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-primary border-2 border-primary text-white py-2 px-6 rounded-lg text-base hover:bg-white hover:text-primary transition-transform duration-500 ${className}`}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {text}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
