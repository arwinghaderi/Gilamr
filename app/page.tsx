import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";

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
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
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
      <p className=" mt-20 ">Hajnalkndlkadnkal</p>
    </div>
  );
}
