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
    <div className="shadow-[0px_2px_2px_0px_rgba(0,0,0,0.02),0px_10px_41px_0px_rgba(0,0,0,0.04)] flex items-center gap-0 bg-white px-1 py-0.5 rounded-full sm:gap-0.5 sm:px-1.5 sm:py-1 md:gap-1 md:px-2 md:py-1 xl:gap-1.5 xl:px-4.5 xl:py-3.5">
      <div className="flex items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-2 h-2   -mr-[2px]  md:-mr-[10px] rounded-full border border-white shadow-sm sm:w-3 sm:h-3 md:w-4 md:h-4 xl:w-6 xl:h-6"
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
      <span className="text-[6px] font-semibold text-title sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm">
        +{count}
      </span>
      <span className="text-[6px] font-semibold text-title whitespace-nowrap sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm">
        رزرو موفق
      </span>
    </div>
  );
};
