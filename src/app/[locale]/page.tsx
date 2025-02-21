import { getCurrentLocale, getI18n } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import MainCarousel from "./mainCarousel";
import Image from "next/image";

export default async function Home() {
  const locale = await getCurrentLocale();
  const t = await getI18n();
  return (
    <>
      <div className="">
        <I18nProviderClient locale={locale}>
          <MainCarousel />
        </I18nProviderClient>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 pt-6 lg:grid-cols-3 lg:px-28 lg:grid-cols-6">
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
      <div className="aspect-[10/7] w-full pt-6 lg:aspect-[21/7] lg:px-28">
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
    </>
  );
}
