import React from "react";
import Image from "next/image";
import { FeatureCardProps } from "./FeatureCard.types";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageSrc,
  imageAlt = "Feature image",
}) => {
  const truncatedTitle = title.length > 10 ? title.slice(0, 10) + "..." : title;

  return (
    <div className="flex flex-col items-center justify-center w-[116px] h-[116px] bg-[#FCFDFD] border border-[#EEF3F7] shadow-[0px_24px_48px_rgba(0,46,37,0.12),0px_0px_0px_6px_#FFFFFF] rounded-xl p-4 mx-auto">
      <div className="relative w-[52px] h-[52px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain w-full h-full"
        />
      </div>
      <span className="mt-2 text-sm font-semibold text-description text-center leading-8 max-w-[91px]">
        {truncatedTitle}
      </span>
    </div>
  );
};
