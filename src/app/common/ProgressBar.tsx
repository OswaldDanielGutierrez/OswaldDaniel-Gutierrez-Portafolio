import React from "react";
interface ProgressBarProps {
  progress: number; // Un valor entre 0 y 100
  height?: string; // Altura de la barra
  color?: string; // Color de la barra (clases de Tailwind)
}
const ProgressBar = ({
  progress,
  height = "h-5",
  color = "bg-blue-500",
}: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 rounded mt-2 mb-2">
      <div
        className={`${color} ${height} rounded`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
