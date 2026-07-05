import type { Metadata } from "next";
import { satoshi, inter, interDisplay, plusJakarta } from "@/lib/fonts";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lumera.tech"),
  title: {
    default: "Lumera Technologies — Software built in Nepal, for the world",
    template: "%s",
  },
  description:
    "Lumera Technologies is a Nepal-based software company crafting clean, reliable web, mobile and cloud products.",
  openGraph: {
    title: "Lumera Technologies",
    description: "Software built in Nepal, for the world.",
    type: "website",
    url: "https://lumera.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumera Technologies",
    description: "Software built in Nepal, for the world.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const fontVars = [
    satoshi.variable,
    inter.variable,
    interDisplay.variable,
    plusJakarta.variable,
    geist.variable,
  ].join(" ");

  return (
    <html lang="en" className={cn("h-full antialiased font-sans", fontVars)}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
