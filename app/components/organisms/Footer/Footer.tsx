import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/atom/Logo/Logo";
import { SocialIcon } from "@/components/molecules/SocialIcon";

interface FooterProps {
  description: string;
  exploreLinks: Array<{ label: string; href: string }>;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  mapImageSrc: string;
  socialLinks: Array<{ icon:React.ReactNode ,href: string; label: string }>;
}

export const Footer: React.FC<FooterProps> = ({
  description,
  exploreLinks,
  contactInfo,
  mapImageSrc,
  socialLinks,
}) => {
  return (
    <footer className=" relative w-full py-4 md:py-6 ">
      <div
        className="absolute bottom-0 right-0 w-full h-full -z-10"
        style={{
          background: "#C5D8FF",
          filter: "blur(210px)",
          maskImage: `
      linear-gradient(to top, black 0%, transparent 80%),
      linear-gradient(to left, black 0%, transparent 80%)
    `,
          maskComposite: "intersect",
          WebkitMaskImage: `
      linear-gradient(to top, black 0%, transparent 80%),
      linear-gradient(to left, black 0%, transparent 80%)
    `,
          WebkitMaskComposite: "intersect",
        }}
      />
      <div className="container-custom">
        {/* ===== فوتر اصلی ===== */}
        <div className="w-full bg-[#FCFDFD] border border-[#EEF3F7] shadow-[0px_0px_0px_6px_#FFFFFF] rounded-[20px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
            <div className="py-6 md:py-8 lg:py-11.5 px-2 md:pr-4 lg:pr-6">
              <Logo size="md" />
              <p className="mt-2 text-sm font-semibold text-description leading-8 max-w-[314px] tracking-normal text-justify">
                {description}
              </p>
            </div>

            <div className="py-6 md:py-8 lg:py-11.5 pr-2 md:pr-4 lg:pr-15">
              <h4 className="text-base font-extrabold text-title leading-[29px] mb-3">
                کاوش در گیلمار
              </h4>
              <ul className="space-y-2">
                {exploreLinks.map((link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-description flex-shrink-0" />
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-description leading-8 hover:text-[#02ADF7] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== بخش ۳: راه‌های ارتباطی ===== */}
            <div className="py-6 md:py-8 lg:py-11.5 pr-2 md:pr-4 lg:pr-6">
              <h4 className="text-base font-extrabold text-title leading-[29px] mb-3">
                راه‌های ارتباط با گیلمار
              </h4>
              <div className="space-y-2 text-sm font-semibold text-description leading-8 max-w-[370px]">
                <p>تلفن پشتیبانی: {contactInfo.phone}</p>
                <p>ایمیل: {contactInfo.email}</p>
                <p className="leading-8">
                  موقعیت گیلمار: {contactInfo.address}
                </p>
              </div>
            </div>

            <div className="h-full w-full md:w-[364px] flex-shrink-0">
              <div className="relative w-full h-full aspect-[364/276]">
                <Image
                  src={mapImageSrc}
                  alt="نقشه موقعیت گیلمار"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 364px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 w-full bg-[#FCFDFD] border border-[#EEF3F7] shadow-[0px_0px_0px_6px_#FFFFFF] rounded-[800000px] px-4 md:px-6 py-2 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs md:text-sm font-semibold text-description text-center sm:text-right order-2 sm:order-1">
            © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
          </p>
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} {...social} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
