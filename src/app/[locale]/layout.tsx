import LocaleSwitcher from "@/components/header/client/LocaleSwitcher";
import MobileMenu from "@/components/header/client/MobileMenu";
import { FaFacebookSquare, FaRegHeart } from "react-icons/fa";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { MdOutlinePersonOutline } from "react-icons/md";
import { I18nProviderClient } from "@/locales/client";
import { RiShoppingBag3Line } from "react-icons/ri";
import { BiPhone, BiSearch } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import type { Metadata } from "next";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

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
        <header className="sticky top-0 z-10 flex h-[136px] w-full flex-col items-center bg-black px-7 pb-1 text-white shadow-lg md:grid-cols-3 md:px-[121px] md:pb-0 md:pt-2">
          <div className="hidden w-full flex-row justify-between border-b border-gray-500/70 px-4 pb-1 md:flex">
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
          <div className="flex h-full w-full flex-row items-center justify-between">
            <div className="hidden flex-shrink-0 md:flex">
              <button
                type="button"
                className="flex flex-row items-center gap-3 rounded-lg border-[3px] border-[#C1C1C1] p-4"
              >
                <IoMenu className="h-9 w-9" />
                <p className="text-xl font-bold">Kategoriler</p>
              </button>
            </div>
            <div className="flex md:hidden">
              <LocaleSwitcher />
            </div>
            <Link href="/" className="px-6 md:flex-shrink-0">
              <Image src={Logo} alt="Zeo Karavan & Römork" height={81} />
            </Link>
            <I18nProviderClient locale={locale}>
              <MobileMenu />
            </I18nProviderClient>
            <div
              aria-label="Search"
              className="relative hidden w-full max-w-[320px] duration-300 md:flex"
            >
              <input
                name="Search bar input"
                aria-label="Search bar input"
                type="text"
                className="w-full rounded-2xl border-2 py-2 pl-4 pr-4 text-black outline-none focus:border-black focus:ring-transparent"
                placeholder={t("search")}
              />
              <div className="absolute inset-y-0 right-0 flex">
                <button
                  aria-label="Search bar submit button"
                  type="submit"
                  className="h-full w-[45px] cursor-pointer text-black"
                >
                  <BiSearch className="my-auto h-6 w-6 pr-1" />
                </button>
              </div>
            </div>
            <div className="hidden flex-shrink-0 flex-row gap-6 md:flex">
              <button type="button">
                <MdOutlinePersonOutline className="h-9 w-9" />
              </button>
              <button type="button">
                <FaRegHeart className="h-7 w-7" />
              </button>
              <button type="button" className="px-1">
                <RiShoppingBag3Line className="h-7 w-7" />
              </button>
            </div>
          </div>
          <div
            aria-label="Search"
            className="relative w-full py-2 duration-300 md:hidden"
          >
            <input
              name="Search bar input"
              aria-label="Search bar input"
              type="text"
              className="w-full rounded-2xl border-2 py-2 pl-4 pr-4 text-black outline-none focus:border-black focus:ring-transparent"
              placeholder={t("search")}
            />
            <div className="absolute inset-y-0 right-0 my-auto flex h-full">
              <button
                aria-label="Search bar submit button"
                type="submit"
                className="my-auto h-full w-[45px] cursor-pointer text-black"
              >
                <BiSearch className="my-auto h-6 w-6" />
              </button>
            </div>
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
