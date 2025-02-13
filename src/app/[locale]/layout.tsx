import LocaleSwitcher from "@/components/header/client/LocaleSwitcher";
import MobileMenu from "@/components/header/client/MobileMenu";
import { getCurrentLocale, getI18n } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import { Grechen_Fuemen } from "next/font/google";
import type { Metadata } from "next";
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

const grechenFuemen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: "400",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  const t = await getI18n();

  return (
    <html lang={locale}>
      <body className={`flex flex-col bg-gray-700 text-white antialiased`}>
        <header className="sticky top-0 z-10 grid h-[96px] w-full grid-cols-2 items-center bg-gray-800 px-4 text-white shadow-md md:grid-cols-3 md:px-[121px]">
          <div className="hidden flex-row gap-8 md:flex">
            <NavLink text={t("home")} href="/" />
            <NavLink text={t("contact")} href="/contact" />
          </div>
          <div className="flex flex-row items-center justify-start md:justify-center">
            <Link href="/">
              <p
                className={`whitespace-nowrap text-xl md:text-5xl ${grechenFuemen.className}`}
              >
                Zeo Karavan & Römork
              </p>
            </Link>
          </div>
          <div className="flex flex-row justify-end gap-3">
            <LocaleSwitcher />
            <I18nProviderClient locale={locale}>
              <MobileMenu />
            </I18nProviderClient>
          </div>
        </header>
        <main className="z-0 flex h-[calc(100vh-96px)] w-full flex-col items-center gap-4 overflow-y-auto">
          <div className="w-full p-2">{children}</div>
          <div className="mt-auto flex h-12 w-full flex-shrink-0 flex-col items-center justify-center bg-gray-800 font-medium text-stone-100">
            © Zeo Karavan 2023 - {new Date().getFullYear()}
          </div>
        </main>
      </body>
    </html>
  );
}
