import React from "react";
import Image from "next/image";
import { RuleCardProps } from "./RuleCard.types";

export const RuleCard: React.FC<RuleCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt = "Rule image",
}) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[256px] mx-auto">
      <div className="relative w-full aspect-[256/245] rounded-[20px] overflow-hidden ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <h4 className=" text-base font-extrabold text-title text-center leading-8 w-full max-w-[256px]">
        {title}
      </h4>
      <p className="mt-0 text-sm font-semibold text-description text-center leading-8 w-full max-w-[256px]">
        {description}
      </p>
    </div>
  );
};
