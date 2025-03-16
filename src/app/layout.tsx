import { fave, foxrights, RobotoFont } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { HomeLogo } from "./components/HomeLogo";
import { Navigation } from "./components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Siri och Per",
  description: "Siri och Pers bröllop 2025",
  icons: ["glass.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${foxrights.variable} ${fave.variable} ${RobotoFont.variable} bg-background antialiased relative`}
      >
        <HomeLogo />
        <main className="h-[calc(100dvh-60px)] p-4 pt-8 md:p-8 md:pt-14">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
