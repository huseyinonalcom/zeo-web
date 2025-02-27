import Image from "next/image";
import Link from "next/link";
export default function CategoryCard({
  name,
  description,
  imageSrc,
  alt,
  href,
  className,
  buttonText,
  isCentered,
}: {
  name: string;
  description: string;
  imageSrc: string;
  alt: string;
  href: string;
  className?: string;
  buttonText?: string;
  isCentered?: boolean;
}) {
  return (
    <div
      className={
        "flex w-full flex-row items-center justify-center py-4 lg:p-4 " +
        className
      }
    >
      <div className="border-1 h-fit w-full overflow-hidden rounded-lg border border-gray-400 bg-white">
        <div className="relative aspect-[32/17] w-full">
          <Image
            priority
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div
          className={`flex w-full flex-col items-center justify-start p-4 transition-all duration-100 ${isCentered ? "pb-6" : "items-center"}`}
        >
          <h2 className="text-xl font-bold">{name}</h2>
          <div
            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isCentered ? "lg:h-[100px] h-fit" : "h-[1px]"}`}
          >
            <div className="flex w-full flex-col">
              <p>{description}</p>
              <Link
                href={href}
                className="mx-auto mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white duration-300 hover:bg-blue-600"
              >
                <p className="text-xl font-bold">{buttonText ?? name}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
