import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RoomCardProps } from "./RoomCard.types";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const RoomCard: React.FC<RoomCardProps> = ({
  id,
  title,
  description,
  price,
  imageSrc,
  imageAlt = "Room image",
}) => {
  return (
    <Link
      href={`/rooms/${id}`}
      className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0px_24px_48px_rgba(0,46,37,0.12),inset_0px_10px_30px_rgba(0,0,0,0.32)] transition-shadow duration-300 hover:shadow-[0px_24px_48px_rgba(0,46,37,0.2),inset_0px_10px_30px_rgba(0,0,0,0.4)] aspect-square block"
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,8,0.72)] via-[rgba(7,7,8,0.2)] to-transparent z-0" />

        <div className="absolute bottom-0 right-0 z-10 p-2 md:p-4 text-right text-white">
          <h3 className="text-sm font-extrabold md:text-base leading-8 max-w-full">
            {truncateText(title, 25)}
          </h3>
          <p className="text-xs mt-2 md:text-sm font-semibold text-white/80 max-w-full">
            {truncateText(description, 30)} {price}
          </p>
        </div>
      </div>
    </Link>
  );
};
