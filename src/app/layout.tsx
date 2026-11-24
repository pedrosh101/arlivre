import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Editora Ar Livre",
    template: "%s - Editora Ar Livre",
  },
  description: "Ar Livre Edições",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="flex justify-between min-h-screen text-black ">
          <div className="bg-clr2 w-12 hidden sm:block" />
          {children}
          <div className="bg-clr2 w-12 hidden sm:block" />
        </main>
        <div className="flex justify-center bg-clr2 text-white font-parag text-sm h-12 items-center">
          <p>© {new Date().getFullYear()} Ar Livre</p>
        </div>
      </body>
    </html>
  );
}
