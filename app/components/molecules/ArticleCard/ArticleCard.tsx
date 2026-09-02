import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleCardProps } from "./ArticleCard.types";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt = "Article image",
}) => {
  return (
    <Link
      href={`/articles/${id}`}
      className="group relative bg-white rounded-[20px] overflow-hidden shadow-[0px_24px_48px_rgba(0,46,37,0.12),inset_0px_10px_30px_rgba(0,0,0,0.32)] transition-shadow duration-300 hover:shadow-[0px_24px_48px_rgba(0,46,37,0.2),inset_0px_10px_30px_rgba(0,0,0,0.4)] aspect-[408/482] w-full max-w-[408px] mx-auto block"
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,7,8,0.88)] via-[rgba(7,7,8,0.3)] to-transparent" />

        <div className="absolute bottom-0 z-10 p-4 md:p-6 text-right text-white">
          <h3 className="text-white text-base font-extrabold leading-[100%] max-w-full">
            {truncateText(title, 25)}
          </h3>
          <p className="text-xs sm:text-sm mt-2 text-white/72 font-semibold leading-8 ml-auto max-w-full">
            {truncateText(description, 90)}
          </p>
        </div>
      </div>
    </Link>
  );
};
