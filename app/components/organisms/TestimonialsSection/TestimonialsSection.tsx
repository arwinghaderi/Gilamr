"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 bg-[#f5f8f8]">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto  mb-40 sm:mb-44">
          <div className="w-full flex items-center justify-center">
            <img
              src="/images/Icon Container.png"
              alt="Icon Container"
              className="pointer-events-none select-none w-12 sm:w-16 md:w-[84px] h-auto md:h-[52px] mb-4 md:mb-5"
            />
          </div>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-[32px] font-extrabold text-title tracking-[-1.4px] leading-[100%]">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-description font-medium max-w-[550px] mx-auto leading-8 px-4">
            {description}
          </p>
        </div>

        <div className="relative flex justify-center px-4 sm:px-0">
          <img
            src="/images/comment.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[95%] lg:w-[100%] max-w-[1100px]  pointer-events-none select-none z-0"
          />

      
          <div
            className="absolute z-20 rounded-full border-3    border-white shadow-lg "
            style={{
              width: "80px",
              height: "80px",
              left: "calc(50% - 40px)",
              top: "-40.03%",
              backgroundImage: "url('/images/user.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute z-20 rounded-full border-3 border-white shadow-lg hidden lg:block"
            style={{
              width: "64px",
              height: "64px",
              left: "8%",
              top: "15%",
              backgroundImage: "url('/images/user3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute z-20 rounded-full border-3 border-white shadow-lg hidden xl:block"
            style={{
              width: "44px",
              height: "44px",
              left: "18%",
              top: "8%",
              backgroundImage: "url('/images/user1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute z-20 rounded-full border-3 border-white shadow-lg hidden lg:block"
            style={{
              width: "48px",
              height: "48px",
              right: "8%",
              top: "12%",
              backgroundImage: "url('/images/user1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute z-20 rounded-full border-3 border-white shadow-lg hidden md:block"
            style={{
              width: "56px",
              height: "56px",
              left: "5%",
              bottom: "20%",
              backgroundImage: "url('/images/user2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute z-20 rounded-full border-3 border-white shadow-lg hidden lg:block"
            style={{
              width: "72px",
              height: "72px",
              right: "16%",
              bottom: "28%",
              backgroundImage: "url('/images/user3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute z-20 rounded-full border-3 border-white shadow-lg hidden xl:block"
            style={{
              width: "22px",
              height: "22px",
              right: "6%",
              bottom: "8%",
              backgroundImage: "url('/images/user.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 w-full max-w-[600px] mx-auto">
            <Swiper
              modules={[EffectCards, Pagination, Autoplay]}
              effect="cards"
              cardsEffect={{
                slideShadows: false,
                rotate: false,
                perSlideRotate: 0,
                perSlideOffset: 8,
              }}
              grabCursor={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              onSlideChange={(swiper: SwiperType) =>
                setActiveIndex(swiper.activeIndex)
              }
              onSwiper={(swiper: SwiperType) =>
                setActiveIndex(swiper.activeIndex)
              }
              className="!pb-12"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="!flex !h-[280px] sm:!h-[300px] !justify-center"
                >
                  <TestimonialCard {...item} isActive={index === activeIndex} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
