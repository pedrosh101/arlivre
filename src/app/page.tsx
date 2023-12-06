"use client";

import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center  sm:p-24 p-10 bg-orange-200 text-black text-5xl">
        <h1 className="font-gotham text-center">Ar Livre Edições</h1>
        <div className="p-8 mt-10 font-gotham sm:w-4/12 bg-amber-900 text-orange-200 text-2xl leading-relaxed hover:text-orange-300 transition ease-in-out duration-700">
          <p>Têm como projeto coleções dedicadas a ensaios sobre </p>
          <p className="pl-8">Arte</p>
          <p className="text-end pr-20">Política</p>
          <p className="pl-14">Cultura do Presente</p>
          <p className="text-end">E narrativas norteadas</p>
          <p className="pl-14">por traços de </p>
          <p className="text-end">experimentalidade/criação de linguagens.</p>

          <p>Orientam-se sob o signo das histórias</p>
          <p className="text-end pr-16">da cultura e da literatura da</p>
          <p className="text-end">contemporaneidade</p>
        </div>
      </main>
    </>
  );
}
