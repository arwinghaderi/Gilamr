import React from "react";
import { RuleCard } from "@/components/molecules/RuleCard";
import { RuleCardProps } from "@/components/molecules/RuleCard";

interface RulesSectionProps {
  title: string;
  description: string;
  rules: RuleCardProps[];
}

export const RulesSection: React.FC<RulesSectionProps> = ({
  title,
  description,
  rules,
}) => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 bg-background">
      <img
        src="/images/VectorCheckered.png"
        alt=""
        className="absolute left-[-70px] bottom-[170.2px] w-[800.4px] h-[393.8px] pointer-events-none select-none "
      />
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className=" flex items-center  justify-center ">
            <img
              src="/images/Icon Container.png"
              alt="Icon Container"
              className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
            />
          </div>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-[32px] font-extrabold text-title tracking-[-1.4px] leading-[100%] mx-auto">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-description font-semibold leading-8   mx-auto">
            {description}
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 justify-items-center">
          <img
            src="/images/dash line.png"
            alt=""
            className="  hidden  lg:block absolute top-1/3 left-[10%] -translate-y-1/2 w-[80%] h-auto pointer-events-none select-none z-0"
          />

          {rules.map((rule) => (
            <RuleCard key={rule.id} {...rule} />
          ))}
        </div>
      </div>
    </section>
  );
};
