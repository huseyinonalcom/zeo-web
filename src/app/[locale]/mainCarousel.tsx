"use client";
import CategoryCard from "@/components/categories/CategoryCard";
import { useI18n } from "@/locales/client";
import { useState } from "react";

export default function MainCarousel() {
  const t = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      name: t("trailer"),
      imageSrc: "/trailer.png",
      alt: t("trailer"),
      href: "/konfigurasyon/romork",
      description:
        "Her aracın arkasına yakışır, hep sizi takip eder, daha ne yapsın ...",
    },
    {
      name: t("caravan"),
      imageSrc: "/karavan-hp.jpg",
      alt: t("caravan"),
      href: "/karavan",
      description:
        "Her şeyi ile size özel, adeta üzerinize dikilmiş bir takım elbise gibi karavan yaptırmaksa düşünceniz bizim kahvemiz acı, muhabbetimiz koyudur.",
    },
    {
      name: t("tow-hitch"),
      imageSrc: "/ceki-demiri.webp",
      alt: t("tow-hitch"),
      href: "/ceki-demiri",
      description:
        "Her marka model araç için çeki demiri montajı, proje ve tescil işlemleri profesyonel bir dokunuşla ...",
    },
  ];

  return (
    <>
      <div className="relative hidden aspect-[45/17] w-full items-center justify-center overflow-hidden px-28 lg:flex">
        {items.map((item, index) => {
          const relativeIndex =
            (index - currentIndex + items.length) % items.length;
          return (
            <div
              key={item.name}
              className={`absolute transform cursor-pointer transition-all duration-500 ease-in-out ${relativeIndex === 0 ? "z-10 w-1/2 opacity-100 cursor-default" : relativeIndex == 1 ? "z-5 w-1/3 -translate-x-full opacity-50" : "z-5 w-1/3 translate-x-full opacity-50"} `}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex aspect-[22/17] w-full">
                <CategoryCard {...item} isCentered={relativeIndex === 0} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 lg:hidden">
        {items.map((item) => (
          <CategoryCard key={item.name} {...item} isCentered={true} />
        ))}
      </div>
    </>
  );
}
