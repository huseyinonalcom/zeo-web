import CategoryCard from "@/components/categories/CategoryCard";
import { getI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const t = await getI18n();
  return (
    <>
      <div className="grid grid-cols-1 pt-2 md:grid-cols-3 md:px-24">
        <CategoryCard
          name={t("caravan")}
          imageSrc="/karavan-hp.jpg"
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
          name={t("tow-hitch")}
          imageSrc="/ceki-demiri.webp"
          alt={t("tow-hitch")}
          href="/ceki-demiri"
          description="Har marka model araç için çeki demiri montajı, proje ve tescil işlemleri profesyonel bir dokunuşla ..."
        />
      </div>

      <div className="grid w-full grid-cols-2 gap-8 pt-6 md:grid-cols-3 md:px-28 lg:grid-cols-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="relative aspect-[14/15] w-full overflow-hidden rounded-lg">
              <Image
                src={"/karavan2.webp"}
                alt={t("tow-hitch")}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33.3vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className="font-bold">Resim Örnek</p>
          </div>
        ))}
      </div>
      <div className="aspect-[21/7] w-full pt-6 md:px-28">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src={"/karavan2.webp"}
            alt={t("tow-hitch")}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <Link
        href={""}
        className="relative aspect-[21/7] w-full overflow-hidden rounded-lg md:px-28"
      ></Link>
    </>
  );
}
