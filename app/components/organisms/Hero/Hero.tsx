import React from "react";
import Image from "next/image";
import { Button } from "@/components/atom/Button/Button";
import { ReservationCard } from "@/components/molecules/ReservationCard";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
  reservationCount?: number;
  reservationImages?: string[];
}



export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt = "Hero image",
  reservationCount = 120,
  reservationImages = [
    "/images/Hero.png",
    "/images/Hero.png",
    "/images/Hero.png",
  ],
}) => {
  return (
    <section className="relative w-full  ">
      <div className=" container-custom  py-12  lg:py-13">
        {/* محتوای متنی */}
        <div className="flex flex-col items-center lg:items-center text-center ">
          {/* تایتل */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] xl:tracking-[-2.4px] text-center xl:leading-[100%] font-extrabold text-title   max-w-4xl ">
            {title}
          </h1>

          {/* توضیحات */}
          <p className="mt-4 sm:mt-2 text-xs md:text-sm lg:tracking-normal  text-description leading-5.5 lg:leading-8 max-w-3xl">
            {description}
          </p>

          {/* دکمه */}
          <div className="mt-4 sm:mt-6">
            <Button
              className="min-w-[150px] sm:min-w-[174px] lg:min-w-[191px] pl-2  !py-4 sm:pl-3 lg:pl-1.5 justify-center sm:justify-between text-xs sm:text-sm  xl:text-base font-semibold sm:font-bold lg:font-extrabold"
              rightIconName="arrowBack"
              size="sm"
              rightIconClassName="w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#F7F8F8] shadow-[inset_-4px_-4px_6px_rgba(186,200,209,0.3)] rounded-full flex items-center justify-center"
            >
              {buttonText}
            </Button>
          </div>
        </div>

        {/* تصویر (اختیاری) */}
        {imageSrc && (
          <div className="relative w-full aspect-auto mt-8 sm:mt-10 lg:mt-12">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain !relative"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />

            {/* ===== کارت رزرو موفق (گوشه‌ی پایین چپ) ===== */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-2 sm:left-3 md:left-4 lg:-left-1">
              <ReservationCard
                count={reservationCount}
                images={reservationImages}
              />
            </div>
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-8 right-2 sm:right-3 md:right-4 lg:right-2">
              <p className="text-title font-semibold text-xs md:text-sm text-right leading-7 sm:leading-8  max-w-[250px] ">
                فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
