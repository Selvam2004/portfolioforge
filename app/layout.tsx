import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import Header2 from "@/components/molecules/Header2";
import Drawer from "@/components/molecules/Drawer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header2 />
        <Drawer/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
