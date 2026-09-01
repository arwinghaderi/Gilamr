import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { AboutSection } from "./components/organisms/AboutSection";
import { RoomsSection } from "@/components/organisms/RoomsSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { VideoSection } from "@/components/organisms/VideoSection";
import { TestimonialsSection } from "@/components/organisms/TestimonialsSection";
import { ArticlesSection } from "@/components/organisms/ArticlesSection";


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
      {/* ===== سایر بخش‌ها (بدون بک‌گراند) ===== */}
      <AboutSection
        subtitle="گلیمار"
        title=" گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
        description={`گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است.`}
        buttonText="اقامت در گلیمار"
        imageSrc="/images/About-section.png"
      />{" "}
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
      <p className="mt-20">Hajnalkndlkadnkal</p>
    </div>
  );
}
