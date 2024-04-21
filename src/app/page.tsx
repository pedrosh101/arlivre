"use client";

import Card from "./components/card";
import Navbar from "./components/navbar";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="flex justify-between min-h-screen text-black sm:text-5xl text-4xl bg-cover bg-no-repeat bg-top"
        style={{
          backgroundImage:
            "url('https://buypopart.com/Art.nsf/O/AE3MGJ/$File/David-Hockney-Red-pots-in-the-garden.jpg')",
        }}
      >
        <div className="bg-clr1 w-12 hidden sm:block"></div>

        {/* content */}
        <div className="flex flex-col sm:flex-row w-full sm:p-4  px-4 pt-4 sm:space-x-4">
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:w-4/6 bg-sky-500/75 mb-4 sm:mb-0">
            {projects.map((livro) => (
              <Card key={livro.id} project={livro}></Card>
            ))}
          </div>
          <div className="flex justify-center items-center sm:w-2/6 bg-sky-500/75 sm:pt-0 sm:p-0 p-8 mb-4 sm:mb-0">
            notícias
          </div>
        </div>
        <div className="bg-clr1 w-12 hidden sm:block"></div>
      </main>
      <div className="flex justify-center bg-clr1 text-red-100 font-parag text-sm py-0.5">
        <p>© 2024 Ar Livre</p>
      </div>
    </>
  );
}
