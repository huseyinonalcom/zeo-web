import Image from "next/image";
import Link from "next/link";

export default async function CategoryCard({
  name,
  imageSrc,
  alt,
  href,
}: {
  name: string;
  imageSrc: string;
  alt: string;
  href: string;
}) {
  return (
    <div className="h-full w-full p-4 duration-300 hover:p-1">
      <div className="relative flex aspect-square w-full flex-col items-center justify-center gap-4">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
        <Link href={href} className="absolute bottom-10 z-10">
          <p className="text-xl font-medium">{name}</p>
        </Link>
      </div>
    </div>
  );
}
