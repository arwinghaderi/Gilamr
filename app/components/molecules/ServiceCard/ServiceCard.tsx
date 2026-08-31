import React from "react";
import Image from "next/image";
import { ServiceCardProps } from "./ServiceCard.types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  imageSrc,
  imageAlt = "Service image",
  isLarge = false,
}) => {
  // ابعاد بر اساس حالت اکتیو (با واحد px برای دقت، اما با max-width محدود میشه)
  const baseWidth = isLarge ? 288 : 254;
  const baseHeight = isLarge ? 346 : 304;

  return (
    <div
      className="relative flex-shrink-0 rounded-[20px] overflow-hidden w-full max-w-[288px] aspect-[254/304]"
      style={{
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        maxWidth: "100%",
        transition:
          "width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-in-out"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,8,0.64)] via-[rgba(7,7,8,0.1)] to-transparent" />
      <span className="text-white absolute bottom-0 pr-4 pb-4 right-0 font-extrabold text-base leading-[100%] text-right">
        {title}
      </span>
    </div>
  );
};
