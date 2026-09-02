import React from "react";
import { ICONS } from "@/components/icons/Icons";
import { TestimonialCardProps } from "./TestimonialCard.types";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  role,
  comment,
  isActive = false,
}) => {
  const activeClasses = isActive
    ? "w-full max-w-[500px] h-[264px] bg-[#FCFDFD] border border-[#EEF3F7] shadow-[0px_24px_48px_rgba(0,46,37,0.12),0px_0px_0px_6px_#FFFFFF] rounded-2xl p-6 gap-4"
    : "w-full max-w-[400px] h-[220px] bg-white/80 border border-[#EEF3F7]/50 rounded-2xl p-5 gap-3 scale-95 opacity-70";

  return (
    <div
      className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${activeClasses}`}
    >
      <div className="flex-shrink-0">{ICONS.quote}</div>

      <p className="text-sm font-semibold text-center text-description leading-8 max-w-[452px]">
        {truncateText(comment, 80)}
      </p>

      <div className="text-center">
        <h4 className="text-sm font-extrabold text-title leading-8">
          {truncateText(name, 20)}
        </h4>
        <p className="text-sm font-semibold text-description leading-8">
          {truncateText(role, 20)}
        </p>
      </div>
    </div>
  );
};
