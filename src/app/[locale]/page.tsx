import CategoryCard from "@/components/categories/CategoryCard";
import { getI18n } from "@/locales/server";
import Image from "next/image";

export default async function Home() {
  const t = await getI18n();
  return (
    <>
      <div className="grid grid-cols-1 pt-2 md:grid-cols-3 md:px-24">
        <CategoryCard
          name={t("caravan")}
          imageSrc="/karavan.webp"
          alt={t("caravan")}
          href="/karavan"
          description="Her şeyi ile size özel, adeta üzerinize dikilmiş bir takım elbise gibi karavan yaptırmaksa düşünceniz bizim kahvemiz acı, muhabbetimiz koyudur."
        />
        <CategoryCard
          name={t("trailer")}
          imageSrc="/trailer.png"
          alt={t("trailer")}
          href="/konfigurasyon/romork"
          description="Her aracın arkasına yakışır, hep sizi takip eder, daha ne yapsın ..."
        />
        <CategoryCard
          name={t("tow-arm")}
          imageSrc="/ceki-demiri.webp"
          alt={t("tow-arm")}
          href="/ceki-demiri"
          description="Har marka model araç için çeki demiri montajı, proje ve tescil işlemleri profesyonel bir dokunuşla ..."
        />
      </div>

      <div className="grid w-full grid-cols-2 gap-8 pt-6 md:grid-cols-3 md:px-28 lg:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="relative aspect-[14/15] w-full">
              <Image
                src={"/karavan2.webp"}
                alt={t("tow-arm")}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="font-bold">Resim Örnek</p>
          </div>
        ))}
      </div>
    </>
  );
}
