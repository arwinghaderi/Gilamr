import React from "react";
import Image from "next/image";

interface ReservationCardProps {
  count: number;
  images: string[];
}

export const ReservationCard: React.FC<ReservationCardProps> = ({
  count,
  images,
}) => {
  return (
    <div className=" shadow-[0px_2px_2px_0px_rgba(0,0,0,0.02),0px_10px_41px_0px_rgba(0,0,0,0.04)] flex items-center gap-0.5 sm:gap-1.5 bg-white px-1.5 py-1 xl:px-4.5 xl:py-3.5 rounded-full ">
      <div className="flex items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-3 h-3 sm:w-4 sm:h-4 xl:w-6 xl:h-6 rounded-full border border-white shadow-sm"
            style={{ marginRight: "-4px" }}
          >
            <Image
              src={src}
              alt={`user-${index}`}
              fill
              className="object-cover rounded-full"
            />
          </div>
        ))}
      </div>
      <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-title">
        +{count}
      </span>
      <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-title whitespace-nowrap">
        رزرو موفق
      </span>
    </div>
  );
};
