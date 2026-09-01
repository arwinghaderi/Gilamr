import React from "react";
import Link from "next/link";
import { SocialIconProps } from "./SocialIcon.types";

export const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  href,
  label,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center shadow-[inset_0px_1px_0px_rgba(255,255,255,0.16)] text-white hover:scale-105 transition-transform duration-300"
      style={{
        background: `
          radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),
          radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),
          linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)
        `,
      }}
      aria-label={label}
    >
      {icon}
    </Link>
  );
};
