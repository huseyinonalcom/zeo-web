import FlipCard from "@/components/two-stage/FlipCard";
import { getI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

const subcategories = [
  {
    id: 1,
    name: "125 x 200",
    parent: "romork",
    description: "ATV Taşımaya uygun Römork",
    files: [
      {
        name: "img.png",
        url: "/atv.jpeg",
      },
    ],
  },
  {
    id: 2,
    name: "135 x 215",
    parent: "romork",
    description: "ATV Taşımaya uygun Römork",
    files: [
      {
        name: "img.png",
        url: "/atv.jpeg",
      },
    ],
  },
  {
    id: 3,
    name: "250 x 150",
    parent: "romork",
    description: "ATV Taşımaya uygun Römork",
    files: [
      {
        name: "img.png",
        url: "/atv.jpeg",
      },
    ],
  },
  {
    id: 4,
    name: "330 x 180",
    parent: "romork",
    description: "ATV Taşımaya uygun Römork",
    files: [
      {
        name: "img.png",
        url: "/atv.jpeg",
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
  const { category } = await params;

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">{t("En Böy Ölçüleri")}</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {subcategories
          .map((subcategory) => (
            <Link
              key={subcategory.id}
              href={encodeURI(`/konfigurasyon/${category}/${subcategory.name}`)}
            >
              <FlipCard
                key={subcategory.id}
                front={
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={subcategory.files[0].url}
                        alt={subcategory.name}
                        fill
                        style={{
                          objectFit: "contain",
                        }}
                        className="absolute"
                        sizes="100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    <p className="text-xl font-medium">
                      {t(subcategory.name as keyof typeof t)}
                    </p>
                  </div>
                }
                back={
                  <div className="relative flex h-full w-full flex-col items-center justify-center p-6">
                    {subcategory.description}
                  </div>
                }
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
