import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PT_Serif } from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pt_serif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pt_serif" })

export const metadata: Metadata = {
  title: "Sheharyar",
  description: "Portfolio site of Sheharyar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pt_serif.variable} max-w-screen-md mx-auto bg-black`}>{children}</body>
    </html>
  );
}
