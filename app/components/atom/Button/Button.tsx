// src/components/Button.tsx
import React from "react";
import { twMerge } from "tailwind-merge";
import { ICONS, IconName } from "@/components/icons/Icons";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  leftIconName?: IconName; 
  rightIconName?: IconName; 
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  leftIconName,
  rightIconName,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-x-[10px] font-extrabold !leading-9 text-sm transition-all duration-200 ease-in-out cursor-pointer border-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ADF7]";

  const gradientClasses = `
    bg-[radial-gradient(27.92%_100%_at_50%_0%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%)]
    bg-[radial-gradient(27.92%_100%_at_50%_0%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%)]
    bg-[linear-gradient(229.52deg,#02ADF7_-18.98%,#26E05A_121.29%)]
  `;

  const hoverPrimaryClasses =
    "hover:brightness-110 hover:shadow-[0px_4px_12px_-4px_rgba(2,173,247,0.5),inset_0px_1px_0px_rgba(255,255,255,0.24)]";

  const shadowClasses =
    "shadow-[0px_1px_2px_-1px_rgba(146,146,146,0.4)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.16)]";

  const roundedClasses = "rounded-full";

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs sm:px-[15px] sm:py-[15px] sm:text-sm h-8 sm:h-[52px] min-w-[80px] sm:min-w-[154px]",
    md: "px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base h-10 sm:h-[52px] min-w-[120px] sm:min-w-[154px]",
    lg: "px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg h-12 sm:h-16 min-w-[140px] sm:min-w-[180px]",
  };

  const variantClasses = {
    primary: `${gradientClasses} ${hoverPrimaryClasses}`,
    outline:
      "bg-transparent border-2 border-[#02ADF7] text-[#02ADF7] hover:bg-[#02ADF7]/10",
    ghost: "bg-transparent text-[#02ADF7] hover:bg-[#02ADF7]/10",
  };

  const textColorClass = variant === "primary" ? "text-white" : "";
  const widthClass = fullWidth ? "w-full" : "";

  const finalClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    shadowClasses,
    roundedClasses,
    textColorClass,
    sizeClasses[size],
    widthClass,
    className,
  );

  const leftIcon = leftIconName ? ICONS[leftIconName] : null;
  const rightIcon = rightIconName ? ICONS[rightIconName] : null;

  return (
    <button className={finalClasses} {...props}>
      {leftIcon && (
        <span className="  flex items-center justify-center">{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className="flex items-center justify-center">{rightIcon}</span>
      )}
    </button>
  );
};
