import localFont from "next/font/local";

export const abarFaNum = localFont({
  src: [
    // وزن 400 (Regular)
    {
      path: "../../public/font/woff2/AbarMidFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // وزن 600 (SemiBold)
    {
      path: "../../public/font/woff2/AbarMidFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },

    // وزن 700 (Bold)
    {
      path: "../../public/font/woff2/AbarMidFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // وزن 800 (ExtraBold) – اگه وجود داره
    {
      path: "../../public/font/woff2/AbarMidFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/woff2/AbarMidFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-abar",
  display: "swap",
});
