import localFont from "next/font/local";
import { Roboto } from "next/font/google";

export const foxrights = localFont({
  src: "foxrights.ttf",
  variable: "--foxrights",
});
export const fave = localFont({
  src: "./fave-script-bold.ttf",
  variable: "--fave",
});
export const RobotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto",
});
