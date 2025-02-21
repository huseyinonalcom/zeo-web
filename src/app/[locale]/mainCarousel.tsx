"use client";
import CategoryCard from "@/components/categories/CategoryCard";
import { cloneElement, useState } from "react";
import { useI18n } from "@/locales/client";
import { motion } from "framer-motion";

export default function MainCarousel() {
  const t = useI18n();
  const [currentIndex, setCurrentIndex] = useState(1);

  const items = [
    <CategoryCard
      key={"tow"}
      name={t("tow-hitch")}
      imageSrc="/ceki-demiri.webp"
      alt={t("tow-hitch")}
      href="/ceki-demiri"
      description="Her marka model araç için çeki demiri montajı, proje ve tescil işlemleri profesyonel bir dokunuşla ..."
    />,
    <CategoryCard
      key={"trailer"}
      name={t("trailer")}
      imageSrc="/trailer.png"
      alt={t("trailer")}
      href="/konfigurasyon/romork"
      description="Her aracın arkasına yakışır, hep sizi takip eder, daha ne yapsın ..."
    />,
    <CategoryCard
      key={"caravan"}
      name={t("caravan")}
      imageSrc="/karavan-hp.jpg"
      alt={t("caravan")}
      href="/karavan"
      description="Her şeyi ile size özel, adeta üzerinize dikilmiş bir takım elbise gibi karavan yaptırmaksa düşünceniz bizim kahvemiz acı, muhabbetimiz koyudur."
    />,
  ];

  const itemCount = items.length;

  return (
    <div className="relative flex aspect-[45/17] w-full items-center justify-center overflow-hidden px-28">
      {items.map((item, index) => {
        const relativeIndex = (index - currentIndex + itemCount) % itemCount;

        return (
          <motion.div
            key={index}
            className={`absolute cursor-pointer transition-all`}
            onClick={() => setCurrentIndex(index)}
            animate={{
              x:
                relativeIndex === 0
                  ? "0%"
                  : relativeIndex === 1
                    ? "80%"
                    : "-80%",
              opacity: relativeIndex === 0 ? 1 : 0.5,
              zIndex: relativeIndex === 0 ? 10 : 5,
            }}
            initial={false}
            transition={{
              type: "tween",
              ease: "linear",
              duration: 0,
            }}
            style={{
              width: relativeIndex === 0 ? "50%" : "35%",
            }}
          >
            <div className="flex aspect-[22/17] w-full">
              {cloneElement(item, { isCentered: relativeIndex == 0 })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
