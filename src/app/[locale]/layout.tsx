import LocaleSwitcher from "@/components/header/client/LocaleSwitcher";
import MobileMenu from "@/components/header/client/MobileMenu";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import logo from "@/assets/logo.png";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeo Karavan",
  description: "Konya'da özel tasarım Römork markası",
};

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="text-xl font-medium underline decoration-transparent underline-offset-0 duration-300 hover:decoration-black hover:underline-offset-2"
      href={href}
    >
      {text}
    </Link>
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
      <body className={`flex flex-col antialiased`}>
        <header className="sticky top-0 z-10 grid h-[96px] w-full grid-cols-2 items-center bg-stone-100 px-4 shadow-md md:grid-cols-3">
          <div className="hidden flex-row gap-8 md:flex">
            <NavLink text={t("home")} href="/" />
            <NavLink text={t("contact")} href="/contact" />
          </div>
          <div className="flex flex-row items-center justify-start md:justify-center">
            <Link href="/">
              <Image height={90} priority quality={100} width={90} src={logo} alt="Zeo Karavan" />
            </Link>
          </div>
          <div className="flex flex-row justify-end gap-4">
            <LocaleSwitcher />
            <I18nProviderClient locale={locale}>
              <MobileMenu />
            </I18nProviderClient>
          </div>
        </header>
        <main className="z-0 flex h-[calc(100vh-96px)] w-full flex-col items-center gap-4 overflow-y-auto">
          <div className="w-full p-2">{children}</div>
          <div className="mt-auto flex h-12 w-full flex-shrink-0 flex-col items-center justify-center bg-gray-600 font-medium text-stone-100">
            © Zeo Karavan 2023 - {new Date().getFullYear()}
          </div>
        </main>
      </body>
    </html>
  );
}
