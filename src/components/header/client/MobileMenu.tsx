"use client";

import { useI18n } from "@/locales/client";
import { useState } from "react";
import Link from "next/link";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="text-xl font-medium text-white underline decoration-transparent underline-offset-0 duration-300 hover:decoration-white hover:underline-offset-2"
      href={href}
    >
      {text}
    </Link>
  );
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();
  return (
    <div className="md:hidden">
      <button
        className="flex cursor-pointer flex-row items-center justify-center rounded-full bg-gray-200 p-2 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 bg-gray-900 transition-opacity duration-300 ${
          isOpen ? "visible opacity-95" : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <NavLink text={t("home")} href="/" />
        <NavLink text={t("contact")} href="/contact" />
      </div>
    </div>
  );
}
