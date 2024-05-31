"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Logo from "../../../public/img/logo.jpg";

const Comite = () => {
  return (
    <>
      <main className="flex flex-col w-full text-white bg-clr3 text-center min-h-screen">
        <Navbar />
        <div className="flex flex-col sm:my-16 my-10 space-y-8 p-4 items-center">
          <h1 className="text-3xl my-2">Comitê Editorial</h1>
          <p className="text-xl font-light sm:w-3/5">
            <ul className="space-y-4">
              <li>Ellen Amaral</li>
              <li>Lucas Miyazaki</li>
              <li>Mauricio Salles Vasconcelos</li>
              <li>Pedro Magalia</li>
              <li>Tiago Cfer</li>
            </ul>
          </p>
        </div>
      </main>
    </>
  );
};

export default Comite;
