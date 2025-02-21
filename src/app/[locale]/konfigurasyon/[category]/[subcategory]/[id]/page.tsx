import { getI18n } from "@/locales/server";

export default async function Category({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const t = await getI18n();
  const { subcategory } = await params;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{t(subcategory as keyof typeof t)}</h1>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    </div>
  );
}
