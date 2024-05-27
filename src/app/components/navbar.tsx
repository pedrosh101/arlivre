import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: any) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

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
        href: "/colecoes/hibridos",
        label: "Ambulante (Escritas Performáticas)",
      },
    ],
    sobre: [
      { href: "/ar-livre", label: "Apresentação" },
      { href: "/autores", label: "Autores" },
    ],
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <main className="flex sm:flex-col w-full font-parag text-lg bg-lime-400 text-black">
      <div className="flex w-full justify-center items-center text-sm font-agrandir">
        <h1 className="lg:block hidden cursor-default tracking-wider">
          Ar Livre
        </h1>
        <Link href="/" className="w-fit">
          <Image
            src="https://i.imgur.com/CmRKJCU.png"
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
      <div
        className="sm:hidden flex items-center mr-4 text-2xl cursor-pointer"
        onClick={toggleNav}
      >
        <svg
          fill="none"
          className="absolute top-10 right-5"
          viewBox="0 0 24 24"
          height="1.5em"
        >
          <path
            fill="black"
            d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>
      {/* desktop */}
      <nav className="hidden sm:flex space-x-16 h-12 items-center bg-clr2 justify-center">
        <div className="relative">
          <button
            onClick={() => toggleDropdown("colecoes")}
            className="hover:text-gray-800"
          >
            Coleções
          </button>
          {openDropdown === 'colecoes' && (
            <ul className="absolute bg-clr2 w-96 shadow-lg py-2 mt-1 rounded top-8 z-30 text-left text-base">
              {dropdownLinks.colecoes.map((link, index) => (
                <Link key={index} href={link.href}>
                  <li className="block px-4 py-2 hover:text-gray-800 hover:bg-clr3/5">
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => toggleDropdown("sobre")}
            className="hover:text-gray-800"
          >
            Sobre
          </button>
          {openDropdown === 'sobre' && (
            <ul className="absolute bg-clr2 w-fit shadow-lg py-2 mt-1 rounded top-8 z-30 text-left text-base">
              {dropdownLinks.sobre.map((link, index) => (
                <Link key={index} href={link.href}>
                  <li className="block px-4 py-2 hover:text-gray-800 hover:bg-clr3/5">
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
          <div
            ref={navRef}
            className="flex flex-col text-center m-2 py-20 px-10 bg-clr2 shadow text-black"
          >
            <section>
              <h2 className="pb-4 text-2xl font-semibold">Coleções</h2>
              <ul className="flex flex-col space-y-6 font-light">
                <Link href="/colecoes/narrar-cartografar">
                  <li
                    className="cursor-pointer hover:text-red-200"
                    onClick={toggleNav}
                  >
                    Narrar, Cartografar (Narrativas)
                  </li>
                </Link>
                <Link href="/colecoes/mutacoes-em-tempo-presente">
                  <li
                    className="cursor-pointer hover:text-red-200"
                    onClick={toggleNav}
                  >
                    Mutações em Tempo Presente (Ensaios)
                  </li>
                </Link>
                <Link href="/colecoes/hibridos">
                  <li
                    className="cursor-pointer hover:text-red-200"
                    onClick={toggleNav}
                  >
                    Ambulante (Escritas Performáticas)
                  </li>
                </Link>
              </ul>
            </section>
            <section className="mt-16">
              <h2 className="pb-4 text-2xl font-semibold">Sobre a Editora</h2>
              <ul className="flex flex-col space-y-4 font-light">
                <Link href="/ar-livre">
                  <li
                    className="cursor-pointer hover:text-red-200"
                    onClick={toggleNav}
                  >
                    Apresentação
                  </li>
                </Link>
                <Link href="/autores">
                  <li
                    className="cursor-pointer hover:text-red-200"
                    onClick={toggleNav}
                  >
                    Comitê Editorial
                  </li>
                </Link>
                <Link href="/autores">
                  <li
                    className="cursor-pointer hover:text-red-200"
                    onClick={toggleNav}
                  >
                    Autores
                  </li>
                </Link>
              </ul>
            </section>
          </div>
        </div>
      )}
    </main>
  );
};

export default Navbar;
