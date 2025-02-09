import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { foxrights } from "@/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Per och Siri",
  description: "Per och Siris bröllop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${foxrights.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
