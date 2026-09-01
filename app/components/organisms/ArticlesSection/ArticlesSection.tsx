import React from "react";
import { ArticleCard } from "@/components/molecules/ArticleCard";
import { ArticleCardProps } from "@/components/molecules/ArticleCard";

interface ArticlesSectionProps {
  title: string;
  description: string;
  articles: ArticleCardProps[];
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  title,
  description,
  articles,
}) => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 ">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-10">
          <div className=" flex items-center  justify-center ">
            <img
              src="/images/Icon Container.png"
              alt="Icon Container"
              className="pointer-events-none select-none w-full max-w-[84px] h-auto md:w-[84px] md:h-[52px]  mb-5 "
            />
          </div>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-[32px] xl:tracking-[-1.4px] xl:leading-[100%] font-extrabold text-title">
            {title}
          </h2>
          <p className="mt-2 md:text-sm text-description  font-semibold leading-8 ">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};
