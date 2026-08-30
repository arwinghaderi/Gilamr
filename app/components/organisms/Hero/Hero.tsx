import React from "react";
import Image from "next/image";
import { Button } from "@/components/atom/Button/Button";

interface HeroProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt = "Hero image",
}) => {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* محتوای متنی */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right">
            {/* تایتل */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1a1a1a] leading-tight max-w-2xl">
              {title}
            </h1>

            {/* توضیحات */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#4c4c4d] leading-relaxed max-w-xl">
              {description}
            </p>

            {/* دکمه */}
            <div className="mt-6 sm:mt-8">
              <Button size="md">{buttonText}</Button>
            </div>
          </div>

          {/* تصویر (اختیاری) */}
          {imageSrc && (
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
