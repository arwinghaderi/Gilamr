import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { AboutSection } from "./components/organisms/AboutSection";
import { RoomsSection } from "@/components/organisms/RoomsSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { VideoSection } from "@/components/organisms/VideoSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { ArticlesSection } from "@/components/organisms/ArticlesSection";
import { FAQSection } from "@/components/organisms/FAQSection";
import { Footer } from "@/components/organisms/Footer";
import { ICONS } from "@/components/icons/Icons";
import { RulesSection } from "@/components/organisms/RulesSection";

// import { Instagram, Telegram, Facebook } from "lucide-react";

// ===== گرفتن دیتا از API سمت سرور (SSR) =====
async function getHeroData() {
  // const res = await fetch('https://api.example.com/hero', { cache: 'no-store' });
  // return res.json();

  // دیتای موقت (برای نمونه)
  return {
    title: "اقدامات بومگردی گلیمار جایی که طبیعت خانه است",
    description: `اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.`,
    buttonText: "مهمان گلیمار شو",
  };
}

const rulesData = [
  {
    id: "1",
    title: "حفظ طبیعت و محیط زیست",
    description:
      "گلیمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه با باشید.",
    imageSrc: "/images/rule1.png",
  },
  {
    id: "2",
    title: "حفظ آرامش اقامتگاه",
    description:
      "برای حفظ فضای آرام و دلنشین گلیمار، لطفاً از ایجاد سروصدای زیاد به‌ویژه در ساعات شب خودداری کنید.",
    imageSrc: "/images/rule2.png",
  },
  {
    id: "3",
    title: "مراقبت از وسایل اقامتگاه",
    description:
      "مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.",
    imageSrc: "/images/rule1.png",
  },
];
const footerData = {
  description: `اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی گیلان فعالیت می‌کند.`,
  exploreLinks: [
    { label: "سوئیت‌ها و اقامت", href: "/suites" },
    { label: "راهنمای مهمان‌ها", href: "/guide" },
    { label: "درباره گیلمار", href: "/about" },
    { label: "مجله گیلمار", href: "/magazine" },
  ],
  contactInfo: {
    phone: "۰۱۳۳۴۷۵۴۱ - ۰۱۳۳۴۷۵۴۲",
    email: "info@Gilmar-Gilan.Com",
    address:
      "گیلان، جاده رشت به فومن، روستای مالمسرا، خیابان کوچه‌گران، اقامتگاه گیلمار",
  },
  mapImageSrc: "/images/Map image container.png",
  socialLinks: [
    {
      icon: ICONS.twitter,
      href: "https://twitter.com",
      label: "واتساپ",
    },
    {
      icon: ICONS.Telegram,
      href: "https://Telegram.com",
      label: "تلگرام",
    },
    {
      icon: ICONS.linkedin,
      href: "https://linkedin.org",
      label: "لینکدین",
    },
    {
      icon: ICONS.youtube,
      href: "https://youtube.com",
      label: "یوتیوب",
    },
  ],
};

const servicesData = [
  {
    id: "1",
    title: "پرده نگری",
    imageSrc: "/images/service2.jpg",
  },
  {
    id: "2",
    title: "قایق سواری",
    imageSrc: "/images/service1.jpg",
    isLarge: true,
  },
  {
    id: "3",
    title: "شتر سواری",
    imageSrc: "/images/service3.jpg",
  },
  {
    id: "4",
    title: "دوچرخه سواری",
    imageSrc: "/images/Hero.png",
  },
];

const roomsData = [
  {
    id: "1",
    title: "خانه‌ی چوبی گلیمار",
    description: "هر شب اقامت",
    price: "۱۳۰٬۰۰۰ تومان",
    imageSrc: "/images/Hero.png",
  },
  {
    id: "2",
    title: "خانه‌ی چوبی گلیمار",
    description: "هر شب اقامت منازل",
    price: "۱۳۰٬۰۰۰ تومان",
    imageSrc: "/images/Hero.png",
  },
  {
    id: "3",
    title: "خانه‌ی چوبی گلیمار",
    description: "هر شب اقامت",
    price: "۱۳۰٬۰۰۰ تومان",
    imageSrc: "/images/Hero.png",
  },
  {
    id: "4",
    title: "خانه‌ی چوبی کیلمار",
    description: "هر شب اقامت",
    price: "۱۳۰٬۰۰۰ تومان",
    imageSrc: "/images/Hero.png",
  },
];

const articlesData = [
  {
    id: "1",
    title: "لورم ایپسوم متن ساختگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    imageSrc: "/images/Hero.png",
  },
  {
    id: "2",
    title: "لورم ایپسوم متن ساختگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    imageSrc: "/images/Hero.png",
  },
  {
    id: "3",
    title: "لورم ایپسوم متن ساختگی",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    imageSrc: "/images/Hero.png",
  },
];

const faqsData = [
  {
    id: "1",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    id: "2",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    id: "3",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    id: "4",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    id: "5",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
  {
    id: "6",
    question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
    answer:
      "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
  },
];

export default async function Home() {
  const heroData = await getHeroData();

  return (
    <div className="min-h-screen   ">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "#C5D8FF",
            filter: "blur(210px)",
            maskImage: `
      linear-gradient(to bottom, black 60%, transparent 100%),
      linear-gradient(to right, black 0%, transparent 50%, black 100%)
    `,
            maskComposite: "intersect",
            WebkitMaskImage: `
      linear-gradient(to bottom, black 60%, transparent 100%),
      linear-gradient(to right, black 0%, transparent 50%, black 100%)
    `,
            WebkitMaskComposite: "intersect",
          }}
        />

        <div className="mt-5 sm:mt-10">
          <Header />
        </div>

        <Hero
          title={heroData.title}
          description={heroData.description}
          buttonText={heroData.buttonText}
          imageSrc="/images/Hero.png"
        />
      </section>
      <AboutSection
        subtitle="گلیمار"
        title=" گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
        description={`گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است.`}
        buttonText="اقامت در گلیمار"
        imageSrc="/images/About-section.png"
      />{" "}
      <RulesSection
        title="هم‌راهی برای حفظ آرامش و طبیعت گلیمار"
        description="برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گلیمار را پیش از رزرو مطالعه و رعایت فرمایید."
        rules={rulesData}
      />
      <RoomsSection
        title="انواع اتاق‌های اقامتگاه گلیمار"
        description="اتاق‌های گلیمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند."
        rooms={roomsData}
      />
      <ServicesSection
        title="خدمات رفاهی گلیمار برای اقامتی دلنشین"
        description="در گلیمار آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به یادماندنی آماده شده است."
        services={servicesData}
      />
      <VideoSection
        title="تور ویدیویی اقامتگاه گلیمار"
        description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گلیمار را از نزدیک تماشا کنید و پیش از سفر حال‌وهای دلنشین آن را تجربه کنید."
        buttonText="اقامت در گلیمار"
        videoSrc="/video/sample.mp4"
        videoPoster="/images/Forest.png"
      />
      <TestimonialsSection
        title="نظرات مهمانان گلیمار"
        description="آنچه مسافران درباره‌ی تجربه‌ی اقامت خود در گلیمار می‌گویند."
        testimonials={[
          {
            id: "1",
            comment: "اقامت فوق‌العاده‌ای بود. طبیعت بکر و خدمات عالی.",
            name: "احمد رضایی",
            role: "مهمان",
          },
          {
            id: "2",
            comment: "محیطی آرام و دلنشین، حتماً دوباره می‌آیم.",
            name: "سارا محمدی",
            role: "مهمان",
          },
          {
            id: "3",
            comment: "بهترین تجربه‌ی اقامتی که تا حالا داشتم.",
            name: "علی کریمی",
            role: "مهمان",
          },
        ]}
      />
      <ArticlesSection
        title={`مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش`}
        description={`در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید.`}
        articles={articlesData}
      />
      <FAQSection
        title={`سوالات متداول مهمانان گیلمار`}
        description={`پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.`}
        faqs={faqsData}
        imageSrc="/images/faq-image.png"
      />
      <Footer {...footerData} />
    </div>
  );
}
