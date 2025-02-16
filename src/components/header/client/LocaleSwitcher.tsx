"use client";

import { ReactCountryFlag } from "react-country-flag";
import { useChangeLocale } from "@/locales/client";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";

export default function LocaleSwitcher() {
  const [showSwitcher, setShowSwitcher] = useState(false);
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  return (
    <>
      <button
        onClick={() => setShowSwitcher(true)}
        className="text-black hover:underline hover:underline-offset-4"
      >
        <IoIosGlobe className="h-9 w-9" color="white" />
      </button>
      <div
        onClick={() => setShowSwitcher(false)}
        className={`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 bg-gray-900 transition-opacity duration-300 ${
          showSwitcher ? "visible opacity-95" : "invisible opacity-0"
        }`}
      >
        <ReactCountryFlag
          onClick={() => {
            changeLocale("tr");
            setShowSwitcher(false);
          }}
          countryCode="TR"
          className="text-[5em]"
          svg
        />
        <ReactCountryFlag
          onClick={() => {
            changeLocale("en");
            setShowSwitcher(false);
          }}
          countryCode="GB"
          className="text-[5em]"
          svg
        />
      </div>
    </>
  );
}
