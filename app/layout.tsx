import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCR - Optical Chacacter Recognition",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt">
      <body className={`${inter.className} bg-[#313131]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
