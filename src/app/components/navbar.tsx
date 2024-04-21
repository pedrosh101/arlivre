import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
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
    <main className="flex sm:flex-col w-full font-parag text-xl bg-clr1 text-clr3">
      <div className="flex w-full">

      <Link href="/" className="w-fit">
        <Image
          src="https://i.imgur.com/CmRKJCU.png"
          alt="arlivre"
          height={190}
          width={100}
          className="sm:ml-12 ml-4 py-4"
        ></Image>
      </Link>

      
      </div>
      {/* <div className="h-[1px] w-full bg-red-500 sm:block hidden"/> */}
      <div className="sm:hidden flex items-center mr-4 text-2xl cursor-pointer" onClick={toggleNav}>
        <svg fill="none" viewBox="0 0 24 24" height="1.5em">
          <path
            fill="black"
            d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>
      {/* desktop */}
      <nav className="hidden sm:flex space-x-16 h-12 items-center bg-clr2 justify-center">
        <Link href="/colecoes/narrar-cartografar">
          <h1 className="hover:text-green-800">Ar Livre Edições</h1>
        </Link>
        <Link href="/colecoes/mutacoes-em-tempo-presente">
          <h1 className="hover:text-green-800">Coleções</h1>
        </Link>
        <Link href="/colecoes/hibridos">
          <h1 className="hover:text-green-800">(Textos Híbridos)</h1>
        </Link>
        <Link href="/autores">
          <h1 className="hover:text-green-800">Lançamentos</h1>
        </Link>
        <Link href="/autores">
          <h1 className="hover:text-green-800">Autores</h1>
        </Link>
      </nav>
      {/* mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
          <div ref={navRef} className="flex flex-col h-full w-72 p-10 bg-blue-500 shadow text-white">
            <section>
              <h2 className="pb-4 text-2xl font-semibold">Coleções</h2>
              <ul className="flex flex-col space-y-4 font-light">
                <Link href="/colecoes/narrar-cartografar">
                  <li className="cursor-pointer hover:text-red-200" onClick={toggleNav}>
                  Ar Livre Edições
                  </li>
                </Link>
                <Link href="/colecoes/mutacoes-em-tempo-presente">
                  <li className="cursor-pointer hover:text-red-200" onClick={toggleNav}>
                  Coleções 
                  </li>
                </Link>
                <Link href="/colecoes/hibridos">
                  <li className="cursor-pointer hover:text-red-200" onClick={toggleNav}>
                  (Textos Híbridos)
                  </li>
                </Link>
                <Link href="/colecoes/hibridos">
                  <li className="cursor-pointer hover:text-red-200" onClick={toggleNav}>
                  Lançamentos 
                  </li>
                </Link>
                <Link href="/colecoes/hibridos">
                  <li className="cursor-pointer hover:text-red-200" onClick={toggleNav}>
                  Autores
                  </li>
                </Link>
              </ul>
            </section>
            <section className="mt-16">
              <h2 className="pb-4 text-2xl font-semibold">Comitê Editorial</h2>
              <ul className="flex flex-col space-y-4 font-light">
                <Link href="/autores">
                  <li className="cursor-pointer hover:text-red-200" onClick={toggleNav}>
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
