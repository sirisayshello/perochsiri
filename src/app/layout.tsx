import { fave, foxrights } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { HomeLogo } from "./components/HomeLogo";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: "Per och Siri",
  description: "Per och Siris bröllop",
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
        className={`${foxrights.variable} ${fave.variable} h-dvh bg-background antialiased min-h-dvh w-screen`}
      >
        <HomeLogo />
        <main className="h-[calc(100%-60px)] p-4 md:p-8 pt-8">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
