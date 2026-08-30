import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoProps } from "./Logo.types";

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  className = "",
  asLink = true,
  src = "/images/Logo.png",
  alt = "GILMAR Ecological Resort Logo",
}) => {
  const sizeClasses = {
    sm: {
      width: 80,
      height: 40,
      container: "w-20 h-10 sm:w-24 sm:h-12",
    },
    md: {
      width: 120,
      height: 60,
      container: "w-30 h-15 sm:w-36 sm:h-18 md:w-40 md:h-20",
    },
    lg: {
      width: 180,
      height: 90,
      container: "w-45 h-22.5 sm:w-52 sm:h-26 md:w-60 md:h-30",
    },
  };

  const currentSize = sizeClasses[size];

  const content = (
    <div className={`relative ${currentSize.container} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 80px, (max-width: 768px) 120px, 180px"
        quality={100}
        priority
        unoptimized
      />
    </div>
  );

  if (asLink) {
    return <Link href="/">{content}</Link>;
  }

  return content;
};
