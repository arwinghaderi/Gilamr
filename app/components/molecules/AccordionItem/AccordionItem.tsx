"use client";

import React from "react";
import { AccordionItemProps } from "./AccordionItem.types";

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div
      className={`
  flex flex-col w-full max-w-[620px] mx-auto
  bg-[#FCFDFD] border border-[#EEF3F7]
  transition-[max-height,box-shadow,padding,border-radius] duration-500 ease-in-out
  overflow-hidden cursor-pointer
  ${
    isOpen
      ? "p-6 rounded-[20px] shadow-[0px_24px_48px_rgba(0,46,37,0.12),0px_0px_0px_6px_#FFFFFF] max-h-[500px]"
      : "p-4 rounded-[50px] shadow-[0px_0px_0px_6px_#FFFFFF] max-h-[64px]"
  }
`}
      onClick={() => onToggle?.(id)}
    >
      <div className="flex items-center justify-between w-full gap-3">
        <h4 className="text-sm md:text-base font-extrabold leading-8 tracking-normal text-title text-right flex-1">
          {question}
        </h4>

        <div
          className={`
            relative w-[30px] h-[30px] flex-shrink-0 rounded-full
            bg-[linear-gradient(229.52deg,#02ADF7_-18.98%,#26E05A_121.29%)]
            shadow-[0px_0px_0px_1px_#FFFFFF,0px_1px_0px_0px_#FFFFFF29_inset,0px_1px_2px_-1px_#09063F66]
            flex items-center justify-center
            [border-image:linear-gradient(180deg,rgba(15,107,41,0)_73.52%,#0F6B29_100%)_1]
          `}
        >
          <span className="text-white text-xl font-bold leading-none">
            {isOpen ? "-" : "+"}
          </span>
        </div>
      </div>

      <div
        className={`
          w-full transition-[max-height,opacity,margin-top] duration-500 ease-in-out
          ${isOpen ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-xs md:text-sm font-semibold text-description text-right leading-8 max-w-[588px] mx-auto">
          {answer}
        </p>
      </div>
    </div>
  );
};
