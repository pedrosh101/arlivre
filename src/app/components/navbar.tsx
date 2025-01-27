"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoNav from "../../../public/img/logonav.png";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownLinks = {
    colecoes: [
      {
        href: "/colecoes/narrar-cartografar",
        label: "Narrar, Cartografar (Narrativas)",
      },
      {
        href: "/colecoes/mutacoes-em-tempo-presente",
        label: "Mutações em Tempo Presente (Ensaios)",
      },
      {
        href: "/colecoes/ambulante",
        label: "Ambulante (Escritas Performáticas)",
      },
    ],
    sobre: [
      { href: "/ar-livre", label: "Apresentação" },
      { href: "/autores", label: "Autores" },
      { href: "/comite-editorial", label: "Comitê Editorial" },
    ],
  };

  return (
    <main className="flex flex-col w-full font-parag text-lg bg-lime-400 text-black">
      {/* Header */}
      <div className="flex w-full justify-center items-center text-sm font-agrandir relative">
        <h1 className="lg:block hidden cursor-default tracking-wider">Ar Livre</h1>
        <Link href="/" className="w-fit">
          <Image
            src={LogoNav}
            alt="arlivre"
            height={190}
            width={100}
            className="py-6"
          />
        </Link>
        <h1 className="lg:block hidden pl-1 cursor-default tracking-wider">Edições</h1>
        <button
          className="lg:hidden absolute right-4 top-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex justify-center space-x-16 bg-clr2 text-white py-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-gray-200 cursor-pointer">
            Coleções
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-clr2 text-white w-96 py-2 mt-1 rounded shadow-lg">
            {dropdownLinks.colecoes.map((link, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link href={link.href} className="block px-4 py-2 hover:bg-clr3/5">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/colecoes/virus" className="hover:text-gray-200">
          Série Vírus (Editora Córrego)
        </Link>

        <Link href="/revista" className="hover:text-gray-200">
          Revista Ar Livre
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-gray-200 cursor-pointer">
            Sobre
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-clr2 text-white w-40 py-2 mt-1 rounded shadow-lg">
            {dropdownLinks.sobre.map((link, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link href={link.href} className="block px-4 py-2 hover:bg-clr3/5">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden flex flex-col bg-clr2 text-white py-4 space-y-4">
          <div>
            <span className="block px-4 py-2 font-semibold">Coleções</span>
            {dropdownLinks.colecoes.map((link, index) => (
              <Link key={index} href={link.href} className="block px-6 py-2 hover:bg-clr3/5">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/colecoes/virus" className="block px-4 py-2 hover:text-gray-200">
            Série Vírus (Editora Córrego)
          </Link>
          <Link href="/revista" className="block px-4 py-2 hover:text-gray-200">
            Revista Ar Livre
          </Link>
          <div>
            <span className="block px-4 py-2 font-semibold">Sobre</span>
            {dropdownLinks.sobre.map((link, index) => (
              <Link key={index} href={link.href} className="block px-6 py-2 hover:bg-clr3/5">
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </main>
  );
};

export default Navbar;
