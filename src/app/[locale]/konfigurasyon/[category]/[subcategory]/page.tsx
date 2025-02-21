import FlipCard from "@/components/two-stage/FlipCard";
import { getI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Römork 250",
    category: "trailer-atv",
    description:
      "2,50 metre uzunluğu olan römork, dilediğiniz konfigürasyona göre birinci sınıf malzemeler ile tamamen yerli firmalarca üretilir.",
    files: [
      {
        name: "img.png",
        url: "/img.jpeg",
      },
    ],
  },
];

export default async function Category({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const t = await getI18n();
  const { category, subcategory } = await params;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{t(subcategory as keyof typeof t)}</h1>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products
          .filter((product) => product.category === subcategory)
          .map((product) => (
            <Link
              key={product.id}
              href={encodeURI(
                `/konfigurasyon/${category}/${subcategory}/${product.id}`,
              )}
            >
              <FlipCard
                front={
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={product.files[0].url}
                        alt={product.name}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                        className="absolute"
                        sizes="100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    <p className="text-xl font-medium">{product.name}</p>
                  </div>
                }
                back={
                  <div className="relative flex h-full w-full flex-col items-center justify-center p-6">
                    {product.description}
                  </div>
                }
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
