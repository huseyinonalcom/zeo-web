import { getI18n } from "@/locales/server";

export default async function SubCategory({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const t = await getI18n();
  const { subcategory } = await params;
  console.log(subcategory);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{t("configuration")}</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    </div>
  );
}
