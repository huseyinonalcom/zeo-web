import CategoryCard from "@/components/categories/CategoryCard";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  return (
    <div className="grid grid-cols-1 pt-8 md:grid-cols-3">
      <CategoryCard
        name={t("caravan")}
        imageSrc="/karavan.webp"
        alt={t("caravan")}
        href="/karavan"
      />
      <CategoryCard
        name={t("trailer")}
        imageSrc="/trailer.jpeg"
        alt={t("trailer")}
        href="/konfigurasyon/römork"
      />
      <CategoryCard
        name={t("tow-arm")}
        imageSrc="/ceki-demiri.webp"
        alt={t("tow-arm")}
        href="/ceki-demiri"
      />
    </div>
  );
}
