import React from "react";
import Image from "next/image";
import { Button } from "@/components/atom/Button/Button";

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  imageAlt = "About image",
}) => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* وکتور پس‌زمینه */}
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute right-[-1vw] bottom-[50vh] w-[min(669.4px,35vw)] aspect-[669.4/393.8] pointer-events-none select-none"
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
          <div className="order-2 lg:order-1 text-center text-right ">
            <div className=" flex items-center lg:justify-start justify-center ">
              <img
                src="/images/Icon Container.png"
                alt="Icon Container"
                className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
              />
            </div>
            <h2 className="text-base text-center lg:text-right sm:text-xl md:text-2xl lg:text-[32px] xl:leading-[100%] xl:tracking-[-1.4px] font-extrabold text-title ">
              {title}
            </h2>
            <p className=" mt-2 text-xs text-center leading-7 lg:leading-8 md:text-sm text-description  max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>

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

          <div className="order-1 lg:order-2 relative w-full">
            <div className="relative w-full max-w-[620px] aspect-[620/642] lg:max-w-none lg:w-[620px] lg:h-[662px] lg:rounded-r-none animate-[float_6s_ease-in-out_infinite] will-change-transform">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
