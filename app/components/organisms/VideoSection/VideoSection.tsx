"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atom/Button/Button";
import { ICONS } from "@/components/icons/Icons";

interface VideoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  videoSrc?: string;
  videoPoster?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  buttonText,
  videoSrc = "/video/sample.mp4",
  videoPoster = "/images/service1.jpg",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 bg-[#f5f8f8]">
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute -right-[1vw] bottom-[35vh] w-[min(669.4px,50vw)] aspect-[669.4/393.8] pointer-events-none select-none "
      />

      <img
        src="/images/Astrolabe.png"
        alt="Astrolabe"
        className="absolute hidden  lg:visible left-1/2 -translate-x-1/2 bottom-0 pointer-events-none select-none  -rotate-45 "
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="text-center lg:text-right order-1">
            <div className=" flex items-center lg:justify-start justify-center ">

            <img
              src="/images/Icon Container.png"
              alt="Icon Container"
              className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
            />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-[100%] tracking-[-1.4px] font-extrabold text-title max-w-[400px] mx-auto lg:mx-0">
              {title}
            </h2>
            <p className="mt-3 sm:mt-4 text-xs md:text-sm text-description leading-8 max-w-[502px] mx-auto lg:mx-0 font-semibold">
              {description}
            </p>
            <div className="mt-6 sm:mt-8">
              <div className="mt-2 sm:mt-4 flex  justify-center lg:justify-start ">
                <Button
                  size="md"
                  className="min-w-[150px] sm:min-w-[174px] lg:min-w-[191px] pl-2 sm:pl-3 lg:pl-1.5 justify-between text-xs sm:text-sm xl:text-sm font-semibold sm:font-bold lg:font-extrabold"
                  rightIconName="arrowBack"
                  rightIconClassName="icon-arrow-gradient w-6.5 h-6.5 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>

          {/* ===== سمت چپ: ویدیو که دقیقاً به شکل وکتور (PNG) ماسک می‌شود ===== */}
          {/* عرض بیشتر و ارتفاع ۶۹۰ پیکسل */}
          <div className="relative order-2 flex justify-center">
            <div className="relative w-full max-w-[800px] h-[690px]">
              {/* ویدیو: بدون کنترل‌های پیش‌فرض */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  WebkitMaskImage: "url('/images/Rectangle 1912.png')",
                  maskImage: `url('/images/Rectangle 1912.png')`,
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
                src={videoSrc}
                poster={videoPoster}
                playsInline
                onClick={handlePlay}
              />

              {/* دکمه پلی کاستوم - فقط وقتی نمایش داده می‌شود که پخش نشده */}
              {!isPlaying && (
                <div className="absolute top-65 left-20 flex items-center justify-center z-20 pointer-events-none">
                  <button
                    onClick={handlePlay}
                    className="w-[120px] h-[120px] rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300 cursor-pointer pointer-events-auto"
                  >
                    <div className="w-[78.125px] h-[78.125px] rounded-full bg-white flex items-center justify-center pt-[27px] pr-[26px] pb-[26px] pl-[30px] shadow-xl">
                      {ICONS.playCustom}
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
