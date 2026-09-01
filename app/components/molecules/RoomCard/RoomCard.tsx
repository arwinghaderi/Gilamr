import React from "react";
import Image from "next/image";
import { RoomCardProps } from "./RoomCard.types";

export const RoomCard: React.FC<RoomCardProps> = ({
  id,
  title,
  description,
  price,
  imageSrc,
  imageAlt = "Room image",
}) => {
  return (
    <div className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0px_24px_48px_rgba(0,46,37,0.12),inset_0px_10px_30px_rgba(0,0,0,0.32)] transition-shadow duration-300 hover:shadow-[0px_24px_48px_rgba(0,46,37,0.2),inset_0px_10px_30px_rgba(0,0,0,0.4)] aspect-square">
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className=" z-0 absolute inset-0 bg-gradient-to-t from-[rgba(7,7,8,0.72)] via-[rgba(7,7,8,0.2)] to-transparent" />

        <div className="absolute bottom-0 right-0 z-10  p-2  md:p-4  text-right text-white">
          <h3 className=" text-sm  font-extrabold md:text-base leading-8 ">
            {title}
          </h3>
          <p className="  text-xs mt-2 md:text-sm font-semibold sm:text-sm text-white/80   ">
            {description} {price}
          </p>
        </div>
      </div>
    </div>
  );
};
