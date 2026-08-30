import React from "react";
import Link from "next/link";
import { NavItemProps } from "./NavItem.types";

export const NavItem: React.FC<NavItemProps> = ({
  label,
  href,
  isActive = false,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`
        relative text-base font-semibold   !leading-9  transition-colors duration-200
        hover:text-[#02ADF7]
        ${isActive ? "text-[#02ADF7]" : " text-title "}
        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
        after:bg-[#02ADF7] after:transition-all after:duration-300
        hover:after:w-full
        ${isActive ? "after:w-full" : ""}
        ${className}
      `}
    >
      {label}
    </Link>
  );
};
