"use client";

import { ReactCountryFlag } from "react-country-flag";
import { useChangeLocale, useI18n } from "@/locales/client";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";

export default function LocaleSwitcher() {
  const t = useI18n();
  const [showSwitcher, setShowSwitcher] = useState(false);
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  return (
    <>
      <button
        onClick={() => setShowSwitcher(true)}
        name={t("language-switcher-button")}
        className="text-[#C1C1C1] hover:underline hover:underline-offset-4 md:text-white"
      >
        <IoIosGlobe className="h-8 w-8" />
      </button>
      <div
        onClick={() => setShowSwitcher(false)}
        className={`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 bg-gray-900 transition-opacity duration-300 ${
          showSwitcher ? "opacity-95" : "pointer-events-none opacity-0"
        }`}
      >
        <ReactCountryFlag
          onClick={() => {
            changeLocale("tr");
            setShowSwitcher(false);
          }}
          aria-hidden={!showSwitcher}
          countryCode="TR"
          className="text-[5em]"
          alt="Türk Bayrağı"
          svg
        />
        <ReactCountryFlag
          onClick={() => {
            changeLocale("en");
            setShowSwitcher(false);
          }}
          aria-hidden={!showSwitcher}
          countryCode="GB"
          className="text-[5em]"
          alt="English Flag"
          svg
        />
      </div>
    </>
  );
}
