import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#C5D8FF]">
      <Header />

      <Hero
        title="اقدامات بومگردی گلیمار جایی که طبیعت خانه است"
        description="اقامتگاه بومگردی گلیمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد."
        buttonText="مهمان گلیمار شو"
        // imageSrc="/images/hero-image.jpg" // در صورت نیاز
      />

      {/* سایر بخش‌ها */}
    </div>
  );
}
