"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoNav from "../../../public/img/logonav.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
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
    <main className="flex sm:flex-col w-full font-parag text-lg bg-lime-400 text-black">
      <div className="flex w-full justify-center items-center text-sm font-agrandir">
        <h1 className="lg:block hidden cursor-default tracking-wider">
          Ar Livre
        </h1>
        <Link href="/" className="w-fit">
          <Image
            src={LogoNav}
            alt="arlivre"
            height={190}
            width={100}
            className="py-6"
          ></Image>
        </Link>
        <h1 className="lg:block hidden pl-1 cursor-default tracking-wider">
          Edições
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex space-x-16 h-12 items-center bg-clr2 text-white justify-center">
        {/* Dropdown: Coleções */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:text-gray-200">Coleções</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            sideOffset={8}
            className="bg-clr2 w-96 shadow-lg py-2 mt-1 rounded text-left text-base z-50"
          >
            {dropdownLinks.colecoes.map((link, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href={link.href}
                  className="block px-4 py-2 hover:text-gray-200 hover:bg-clr3/5"
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Link estático */}
        <Link href="/colecoes/virus">
          <li className="block px-4 py-2 hover:text-gray-200">
            Série Vírus (Editora Córrego)
          </li>
        </Link>

        {/* Dropdown: Sobre */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hover:text-gray-200">Sobre</button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            sideOffset={8}
            className="bg-clr2 w-40 shadow-lg py-2 mt-1 rounded text-left text-base z-50"
          >
            {dropdownLinks.sobre.map((link, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link
                  href={link.href}
                  className="block px-4 py-2 hover:text-gray-200 hover:bg-clr3/5"
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </main>
  );
};

export default Navbar;
