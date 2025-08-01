import { Open_Sans, Montserrat } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  fallback: ["system-ui", "arial"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["system-ui", "arial"],
});
