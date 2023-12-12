"use client";

import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center sm:p-24 p-10 bg-orange-500 text-black sm:text-5xl text-4xl sm:bg-cover bg-no-repeat bg-top" style={{ backgroundImage: "url('https://buypopart.com/Art.nsf/O/AE3MGJ/$File/David-Hockney-Red-pots-in-the-garden.jpg')" }}>
        {/* <h1 className="font-gotham text-center">Ar Livre Edições</h1>
        <div className="p-8 mt-10 sm:w-4/12  text-white text-xl leading-relaxed hover:text-red-300 italic transition ease-in-out duration-1000 border-2 border-red-300 font-light">
          <p>Têm como projeto coleções dedicadas a ensaios sobre </p>
          <p className="pl-8 pt-4">Arte</p>
          <p className="text-end pr-20">Política</p>
          <p className="pl-14">Cultura do Presente</p>
          <p className="text-end pt-4">E narrativas norteadas</p>
          <p className="pl-14">por traços de </p>
          <p className="text-end">experimentalidade/criação de linguagens.</p>

          <p>Orientam-se sob o signo das histórias</p>
          <p className="text-end pr-16">da cultura e da literatura na</p>
          <p className="text-end">contemporaneidade</p>
        </div> */}
      </main>
      <div className="flex justify-center bg-red-300 text-red-100 font-parag text-sm py-0.5">
        <p>© 2023 Ar Livre</p>
      </div>
    </>
  );
}
