"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/atom/Button/Button";
import { FeatureCard } from "@/components/molecules/FeatureCard/FeatureCard";
import "swiper/css";
import "swiper/css/pagination";

interface FeatureCardProps {
  id: string;
  title: string;
  imageSrc: string;
}

interface PackageSectionProps {
  title: string;
  description: string;
  subtitle: string;
  subDescription: string;
  features: FeatureCardProps[];
  price: string;
  buttonText: string;
  sliderImages: string[];
  sliderTitle?: string;
}

export const PackageSection: React.FC<PackageSectionProps> = ({
  title,
  description,
  subtitle,
  subDescription,
  features,
  price,
  buttonText,
  sliderImages,
  sliderTitle = "پکیج‌های ویژه اقامت در گلیمار",
}) => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 bg-[#f5f8f8]">
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute right-[1vw] bottom-[75vh] w-[min(669.4px,35vw)] aspect-[669.4/393.8] pointer-events-none select-none"
      />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="text-center flex flex-col justify-center h-full lg:text-right order-1">
            <h2 className="text-xl md:text-2xl lg:text-[32px] leading-[100%] tracking-[-1.4px] font-extrabold text-title  mx-auto lg:mx-0">
              {title}
            </h2>
            <p className="mt-3 text-xs md:text-sm text-description font-semibold leading-8 max-w-[620px] mx-auto lg:mx-0">
              {description}
            </p>

            <div
              className="w-full w-full my-6 h-0 border-t border-dashed border-[#4C4C4D] opacity-10"
              style={{
                borderTopWidth: "1px",
                borderImage:
                  "repeating-linear-gradient(90deg, #4C4C4D, #4C4C4D 3px, transparent 3px, transparent 6px) 1",
              }}
            />
            <div className="">
              <h3 className="text-base font-extrabold text-title leading-8 max-w-[140px] mx-auto lg:mx-0">
                {subtitle}
              </h3>
              <p className="mt-2 text-sm md:text-base text-description font-semibold leading-8 max-w-[620px] mx-auto lg:mx-0">
                {subDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:max-w-[620px] lg:grid-cols-3   xl:grid-cols-4  gap-4 mt-6  justify-center lg: justify-between ">
              {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
              ))}
            </div>
            <div
              className="w-full  my-6 h-0 border-t border-dashed border-[#4C4C4D] opacity-10"
              style={{
                borderTopWidth: "1px",
                borderImage:
                  "repeating-linear-gradient(90deg, #4C4C4D, #4C4C4D 3px, transparent 3px, transparent 6px) 1",
              }}
            />

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4">
              <span className="text-base  font-extrabold text-[#43A047] ">
                {price}
              </span>
              <div className="mt-2  flex  justify-center lg:justify-start ">
                <Button
                  size="md"
                  className="min-w-[150px] sm:min-w-[174px] lg:min-w-[206px] pl-2 sm:pl-3 lg:pl-1.5 justify-between !text-xs lg:!text-sm    font-extrabold"
                  rightIconName="arrowBack"
                  rightIconClassName="icon-arrow-gradient w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>

          <div className="relative order-2 flex justify-center">
            <div className="relative w-full max-w-[620px] max-h-[750px] aspect-[620/815]">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  WebkitMaskImage: "url('/images/pattern 1.png')",
                  maskImage: "url('/images/pattern 1.png')",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              >
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="w-full h-full package-slider"
                >
                  {sliderImages.map((src, index) => (
                    <SwiperSlide key={index} className="!w-full !h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={src}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="absolute  -left-[15px] top-[89.5px] z-10  hidden xl:block ">
                <p className="text-sm font-semibold text-title leading-8 max-w-[137px] text-center">
                  {sliderTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
