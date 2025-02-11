import { foxrights, fave } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

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
        className={`${foxrights.variable} ${fave.variable} bg-background antialiased min-h-dvh w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
