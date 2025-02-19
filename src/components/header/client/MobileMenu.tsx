"use client";

import { BsChevronCompactDown, BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { useI18n } from "@/locales/client";
import { FiMapPin } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const NavLink = ({
  children,
  href,
  external,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) => {
  if (external) {
    return (
      <a
        target="_blank"
        className="flex flex-row items-center gap-2 text-xl font-medium text-white underline decoration-transparent underline-offset-0 duration-300 hover:decoration-white hover:underline-offset-2"
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      className="flex flex-row items-center gap-2 text-xl font-medium text-white underline decoration-transparent underline-offset-0 duration-300 hover:decoration-white hover:underline-offset-2"
      href={href}
    >
      {children}
    </Link>
  );
};

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useI18n();
  return (
    <div className="md:hidden">
      <button
        aria-label="Menu"
        type="button"
        className="flex cursor-pointer flex-row items-center justify-center p-1 text-[#C1C1C1] md:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu className="h-9 w-9" />
      </button>
      <div
        className={`items-star fixed left-0 z-50 flex h-screen w-full flex-col justify-center gap-5 bg-gray-900 px-4 transition-all duration-300 ${
          isOpen
            ? "top-0 opacity-95"
            : "pointer-events-none top-[100%] opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <BsChevronCompactDown className="mx-auto" size={42} />
        <NavLink href="/">{t("home")}</NavLink>
        <NavLink href="https://maps.app.goo.gl/jEw5HvsaGaWwAUXa7" external>
          <FiMapPin size={18} />
          <p>{t("our-address")}</p>
        </NavLink>
        <NavLink href="tel:+905325433039" external>
          <BiPhone size={20} />
          <p>+90 532 543 30 39</p>
        </NavLink>
        <NavLink href="https://www.instagram.com/cansoycan/" external>
          <BsInstagram size={20} />
          <p>Instagram</p>
        </NavLink>
        <NavLink
          href="https://www.facebook.com/p/ZEO-Karavan-61558470599468/"
          external
        >
          <FaFacebookSquare size={20} />
          <p>Facebook</p>
        </NavLink>
        <NavLink href="/contact">{t("contact")}</NavLink>
      </div>
    </div>
  );
}
