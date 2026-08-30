"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/atom/Button/Button";
import { NavItem } from "@/components/molecules/NavItem";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/atom/Logo/Logo";

const navItems = [
  { label: "خانه", href: "/" },
  { label: "سوئیت‌ها و اقامت", href: "/suites" },
  { label: "درباره گلیمار", href: "/about" },
  { label: "راهنمای مهمان‌ها", href: "/guide" },
  { label: "مجله گلیمار", href: "/magazine" },
  { label: "تماس با ما", href: "/contact" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="relative w-full z-50">
      <div className="container-custom py-3 sm:pt-10">
        {/* ===== نوبار اصلی ===== */}
        <div
          className="
            flex items-center justify-between
            px-2 sm:px-4 md:px-6
            py-1.5 sm:py-2
            bg-navbar-bg
            border border-navbar-border
            shadow-[0px_0px_0px_6px_#FFFFFF]
            rounded-[800000px]
            transition-all duration-300
            hover:shadow-[0px_0px_0px_8px_#FFFFFF]
          "
        >
          {/* لوگو */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* دکمه همبرگر با انیمیشن چرخش */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-2 rounded-lg hover:bg-gray-100/70 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="burger-spin w-6 h-6 flex items-center justify-center">
              {isMenuOpen ? (
                <X size={24} className="burger-open" />
              ) : (
                <Menu size={24} className="burger-close" />
              )}
            </div>
          </button>

          {/* منوی دسکتاپ */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                label={item.label}
                href={item.href}
                isActive={item.href === "/"}
              />
            ))}
          </nav>

          {/* دکمه ورود/ثبت‌نام */}
          <div className="hidden lg:block">
            
            <Button size="sm" rightIconName="user" variant="primary">
              {" "}
              ورود یا ثبت‌نام
            </Button>
          </div>
        </div>

        {/* ===== منوی موبایل با انیمیشن کشویی ارتفاع ===== */}
        <div
          ref={menuRef}
          className="lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            maxHeight: isMenuOpen ? "500px" : "0px",
            opacity: isMenuOpen ? 1 : 0,
          }}
        >
          <div
            className={`
              mt-3 rounded-2xl 
              bg-white/95 backdrop-blur-sm 
              border border-navbar-border 
              shadow-xl
              ${isMenuOpen ? "drawer-open" : "drawer-close"}
            `}
          >
            <nav className="flex flex-col items-center gap-3 p-5">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  isActive={item.href === "/"}
                  className="text-base w-full text-center py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                />
              ))}
              <Button size="sm" fullWidth className="mt-3">
                ورود یا ثبت‌نام
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
