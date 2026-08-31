"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { ICONS } from "@/components/icons/Icons";
import "swiper/css";

interface ServiceItem {
  id: string;
  title: string;
  imageSrc: string;
  isLarge?: boolean;
}

interface ServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  title,
  description,
  services,
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(services.length / 2),
  );

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute -right-[1vw] -bottom-[-15vh] w-[min(869.4px,46vw)] aspect-[869.4/393.8] pointer-events-none select-none"
      />

      <div className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="container-custom flex justify-center  flex-col xl:justify-start xl:items-center text-center lg:text-right order-1">
            <div className=" w-full flex items-center xl:justify-start justify-center ">
              <img
                src="/images/Icon Container.png"
                alt="Icon Container"
                className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
              />
            </div>
            <h2 className="text-xl text-center w-full  xl:text-right  md:text-2xl lg:text-[32px] leading-[100%] tracking-[-1.4px] font-extrabold text-title xl:max-w-[550px]">
              {title}
            </h2>
            <p className="mt-3 sm:mt-4 text-xs md:text-sm text-description text-center xl:text-right leading-8 max-w-2xl mx-auto xl:mx-0">
              {description}
            </p>
          </div>

          <div className="relative  z-0 order-2">
            <div className="relative overflow-hidden">
              <div className="relative -mx-4 sm:mx-0">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={1.2}
                  centeredSlides={false}
                  breakpoints={{
                    315: { slidesPerView: 1.2, spaceBetween: 5 },
                    390: { slidesPerView: 2.5, spaceBetween: 16 },
                    640: { slidesPerView: 3, spaceBetween: 20 },
                    1024: { slidesPerView: 3.5, spaceBetween: 24 },
                    1280: { slidesPerView: 2.5, spaceBetween: 24 },
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsEnd(swiper.isEnd);
                    setActiveIndex(swiper.activeIndex);
                  }}
                  onSlideChange={(swiper) => {
                    setIsEnd(swiper.isEnd);
                    setActiveIndex(swiper.activeIndex);
                  }}
                  className="!overflow-visible"
                >
                  {services.map((service, index) => (
                    <SwiperSlide
                      key={service.id}
                      className="!min-h-[350px] !h-auto !flex !items-center !justify-center"
                    >
                      <ServiceCard
                        {...service}
                        isLarge={index === activeIndex + 1}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {!isEnd && (
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute -right-0   sm:right-1  lg:right-4  xl:-right-5  top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#02ADF7] to-[#26E05A] border-2 sm:border-3 border-[#F5F8FA] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                aria-label="اسلاید بعدی"
              >
                <div className="relative flex items-center rotate-180 justify-center w-[16px] h-[16px] sm:w-[20.4px] sm:h-[20.4px]    ">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(173.81% 173.81% at 50% -4.76%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                      boxShadow: "0px 2.23px 5.19px 0px rgba(41, 61, 61, 0.12)",
                      borderImage:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0) 73.52%, #FFFFFF 100%) 1",
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4">
                    {ICONS.arrowBack}
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
