import React from "react";
import { RoomCard } from "@/components/molecules/RoomCard";
import type { RoomCardProps } from "@/components/molecules/RoomCard";

interface RoomsSectionProps {
  title: string;
  description: string;
  rooms: RoomCardProps[];
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  title,
  description,
  rooms,
}) => {
  return (
    <section className="relative w-full overflow-hidden  py-12 md:py-16 lg:py-20">
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute left-[-65.6px] bottom-[341.2px] w-[800.4px] h-[393.8px] pointer-events-none select-none "
      />

      <div className="container-custom relative z-10">
        {/* ===== هدر سکشن ===== */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-10">
          <div className=" flex items-center  justify-center ">
            <img
              src="/images/Icon Container.png"
              alt="Icon Container"
              className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
            />
          </div>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-[32px] xl:tracking-[-1.4px] xl:leading-[100%] font-extrabold text-title">
            {title}
          </h2>
          <p className="mt-2 md:text-sm text-description  font-semibold leading-8 ">
            {description}
          </p>
        </div>

        {/* ===== گرید اتاق‌ها ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};
