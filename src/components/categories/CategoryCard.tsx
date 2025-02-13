import Image from "next/image";
import Link from "next/link";

export default async function CategoryCard({
  name,
  description,
  imageSrc,
  alt,
  href,
}: {
  name: string;
  description: string;
  imageSrc: string;
  alt: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex w-full flex-row items-center justify-center p-4"
    >
      <div className="border-1 h-full w-full rounded-lg overflow-hidden border bg-slate-800 border-gray-400 duration-300">
        <div className="relative aspect-[32/17] w-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start p-6 text-white">
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
