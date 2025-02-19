import Image from "next/image";
import Link from "next/link";

export default async function CategoryCard({
  name,
  description,
  imageSrc,
  alt,
  href,
  className,
  priority,
}: {
  name: string;
  description: string;
  imageSrc: string;
  alt: string;
  href: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        "flex w-full flex-row items-center justify-center py-4 md:p-4 " +
        className
      }
    >
      <div className="border-1 h-full w-full overflow-hidden rounded-lg border border-gray-400 shadow-[5px_5px_0px_rgba(30,_30,_30,_1)] duration-300 hover:shadow-[0px_0px_0px_rgba(30,_30,_30,_1)]">
        <div className="relative aspect-[32/17] w-full">
          <Image
            priority={priority}
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex w-full flex-col items-start justify-start p-4 pb-16">
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
