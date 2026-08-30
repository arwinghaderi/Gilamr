import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ICONS, IconName } from "@/components/icons/Icons";

export interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "ref"
> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  leftIconName?: IconName;
  rightIconName?: IconName;
  leftIconClassName?: string;
  rightIconClassName?: string;
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  leftIconName,
  rightIconName,
  leftIconClassName = "",
  rightIconClassName = "",
  asLink = false,
  href = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-4 font-extrabold leading-9 text-sm transition-all duration-200 ease-in-out cursor-pointer border-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ADF7]";

  const shadowClasses =
    "shadow-[0px_1px_0px_0px_#FFFFFF29_inset,_0px_1px_2px_-1px_#92929266]";

  const roundedClasses = "rounded-full";

  const sizeClasses = {
    sm: "w-[154px] h-[52px] px-4 py-1.5 text-xs sm:px-[15px] sm:py-[15px] sm:text-sm",
    md: "w-[191px] h-[52px] px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-base",
    lg: "w-[191px] h-[52px] px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg",
  };

  const variantClasses = {
    primary: `hover:brightness-110 hover:shadow-[0px_4px_12px_-4px_rgba(2,173,247,0.5),_inset_0px_1px_0px_rgba(255,255,255,0.24)]`,
    outline:
      "bg-transparent border-2 border-[#02ADF7] text-[#02ADF7] hover:bg-[#02ADF7]/10",
    ghost: "bg-transparent text-[#02ADF7] hover:bg-[#02ADF7]/10",
  };

  const textColorClass = variant === "primary" ? "text-white" : "";
  const widthClass = fullWidth ? "w-full" : "";

  const finalClasses = twMerge(
    baseClasses,
    shadowClasses,
    roundedClasses,
    textColorClass,
    sizeClasses[size],
    variantClasses[variant],
    widthClass,
    className,
  );

  const backgroundStyle: React.CSSProperties = {
    background: `
      radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),
      radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)
    `,
  };

  const leftIcon = leftIconName ? ICONS[leftIconName] : null;
  const rightIcon = rightIconName ? ICONS[rightIconName] : null;

  const content = (
    <>
      {leftIcon && (
        <span
          className={twMerge(
            "flex items-center justify-center",
            leftIconClassName,
          )}
        >
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span
          className={twMerge(
            "flex items-center justify-center w-10 h-10 bg-[#F7F8F8] shadow-[inset_-4px_-4px_6px_rgba(186,200,209,0.3)] rounded-full",
            rightIconClassName,
          )}
        >
          {rightIcon}
        </span>
      )}
    </>
  );

  if (asLink && href) {
    return (
      <Link href={href} className={finalClasses} style={backgroundStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button className={finalClasses} style={backgroundStyle} {...props}>
      {content}
    </button>
  );
};
