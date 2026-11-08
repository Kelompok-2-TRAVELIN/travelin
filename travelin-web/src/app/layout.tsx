import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Font desain: Inter (Regular 400, Medium 500, Semi Bold 600, Bold 700).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travelin — Pesan Travel & Taksi Online",
  description:
    "Estimasi tarif instan, status perjalanan real-time, dan pembayaran fleksibel di seluruh Kalimantan Barat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
