import LocaleSwitcher from "@/components/header/client/LocaleSwitcher";
import MobileMenu from "@/components/header/client/MobileMenu";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiPhone } from "react-icons/bi";
import type { Metadata } from "next";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Zeo Karavan",
  description: "Konya'da özel tasarım Römork markası",
};

const NavLink = ({
  children,
  href,
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  external?: boolean;
}) => {
  const style =
    "flex flex-row items-center gap-4 whitespace-nowrap font-semibold underline decoration-transparent decoration-2 underline-offset-2 duration-500 hover:decoration-white";
  if (external) {
    return (
      <>
        <a target="_blank" className={style} href={href}>
          {children}
        </a>
        <p className="text-gray-500 last:hidden">|</p>
      </>
    );
  }
  return (
    <>
      <Link className={style} href={href}>
        {children}
      </Link>
      <p className="text-gray-500 last:hidden">|</p>
    </>
  );
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  const t = await getI18n();

  return (
    <html lang={locale}>
      <body className={`flex flex-col bg-white text-black antialiased`}>
        <header className="sticky top-0 z-10 flex h-[108px] w-full flex-row items-center bg-black px-4 pt-2 text-white shadow-lg md:grid-cols-3 md:flex-col md:px-[121px]">
          <div className="hidden w-full flex-row justify-between border-b border-gray-500/70 pb-1 md:flex md:px-4">
            <div className="flex flex-row items-start gap-5">
              <NavLink href="/">{t("home")}</NavLink>
              <NavLink
                href="https://maps.app.goo.gl/jEw5HvsaGaWwAUXa7"
                external
              >
                <FiMapPin size={18} />
                <p>Adresimiz</p>
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
            <LocaleSwitcher />
          </div>
          <div className="flex h-full w-full flex-row items-center justify-between md:justify-start">
            <div className="flex md:hidden">
              <LocaleSwitcher />
            </div>
            <Link href="/">
              <Image src={Logo} alt="Zeo Karavan & Römork" height={55} />
            </Link>
            <I18nProviderClient locale={locale}>
              <MobileMenu />
            </I18nProviderClient>
          </div>
        </header>
        <main className="z-0 flex h-[calc(100vh-108px)] w-full flex-col items-center gap-4 overflow-y-auto">
          <div className="w-full p-2">{children}</div>
          <div className="mt-auto flex h-12 w-full flex-shrink-0 flex-col items-center justify-center bg-gray-800 font-medium text-stone-100">
            © Zeo Karavan 2023 - {new Date().getFullYear()}
          </div>
        </main>
      </body>
    </html>
  );
}
