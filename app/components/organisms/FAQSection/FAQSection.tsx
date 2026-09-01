"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AccordionItem } from "@/components/molecules/AccordionItem";
import { AccordionItemProps } from "@/components/molecules/AccordionItem";

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: AccordionItemProps[];
  imageSrc: string;
  imageAlt?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs,
  imageSrc,
  imageAlt = "FAQ image",
}) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 bg-background">
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute -right-[1vw] bottom-[48vh] w-[min(669.4px,50vw)] aspect-[669.4/393.8] pointer-events-none select-none "
      />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          <div className="text-center lg:text-right order-1">
            <div className=" flex items-center lg:justify-start justify-center ">
              <img
                src="/images/Icon Container.png"
                alt="Icon Container"
                className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
              />
            </div>
            <h2 className="text-base md:text-xl lg:text-[32px] leading-[100%] tracking-[-1.4px] font-extrabold text-title  mx-auto lg:mx-0">
              {title}
            </h2>

            <p className="mt-3 text-xs md:text-sm text-description font-semibold leading-8 max-w-[620px] mx-auto lg:mx-0">
              {description}
            </p>

            <div className="mt-6  relative w-full max-w-[420px] max-h-[362px] mx-auto aspect-[420/382]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover rounded-2xl "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          <div className="order-2 space-y-4 md:space-y-5">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                {...faq}
                isOpen={openId === faq.id}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
