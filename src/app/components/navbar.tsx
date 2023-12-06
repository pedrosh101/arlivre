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
    <div className="flex w-full place-content-between font-parag text-xl bg-orange-200 py-6 px-6 sm:px-20">
      <Link href="/">
        <Image
          src="https://i.imgur.com/CmRKJCU.png"
          alt="trickster"
          height={190}
          width={120}
        ></Image>
      </Link>
      <div onClick={toggleNav} className="text-2xl cursor-pointer place-self-center">
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
          className={`fixed flex flex-col space-y-6 right-0 top-0 h-full w-72 sm:w-80 p-10 bg-white shadow transition-transform transform duration-700 text-black ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <p className="cursor-pointer">Narrar, Cartografar</p>
          <p className="cursor-pointer">Mutações em Tempo Presente</p>
          <p className="cursor-pointer">Híbridos, Performáticos</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
