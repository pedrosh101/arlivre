// components/NavToggle.tsx
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full place-content-between font-parag text-xl bg-amber-400 py-6 px-4 sm:px-12">
      <Link href="/">
        <Image
          src="https://i.imgur.com/CmRKJCU.png"
          alt="arlivre"
          height={190}
          width={100}
        ></Image>
      </Link>
      <div
        onClick={toggleNav}
        className="text-2xl cursor-pointer place-self-center"
      >
        <svg fill="none" viewBox="0 0 24 24" height="1.5em">
          <path
            fill="black"
            d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed flex flex-col right-0 top-0 h-full w-72 sm:w-80 p-10 bg-blue-500 shadow transition-transform transform duration-700 text-white ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <section>
            <h2 className="pb-4 text-2xl font-semibold">Coleções</h2>
            <ul className="flex flex-col space-y-4 font-light">
              <Link href="/colecoes/narrar-cartografar">
                <li className="cursor-pointer hover:text-red-200">
                  Narrar, Cartografar
                </li>
              </Link>
              <Link href="/colecoes/mutacoes-em-tempo-presente">
                <li className="cursor-pointer hover:text-red-200">
                  Mutações em Tempo Presente
                </li>
              </Link>
              <Link href="/colecoes/hibridos">
                <li className="cursor-pointer hover:text-red-200">
                  Híbridos, Performáticos
                </li>
              </Link>
            </ul>
          </section>
          <section className="mt-16">
            <h2 className="pb-4 text-2xl font-semibold">Comitê Editorial</h2>
            <ul className="flex flex-col space-y-4 font-light">
              <Link href="/autores">
                <li className="cursor-pointer hover:text-red-200">
                  Autores
                </li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
