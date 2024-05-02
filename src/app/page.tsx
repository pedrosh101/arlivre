"use client";

import Card from "./components/card";
import News from "./components/news";
import Navbar from "./components/navbar";
import { projects } from "./data/projects";
import { noticias } from "./data/noticias";

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
        {/* faixa esquerda */}
        <div className="bg-clr2 w-12 hidden sm:block" />

        {/* content */}
        <div className="flex flex-col sm:flex-row w-full sm:p-4 px-4 pt-4 sm:space-x-4">
          {/* livros */}
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:w-4/6 bg-sky-500/75 mb-4 sm:mb-0">
            {projects.map((livro) => (
              <Card key={livro.id} project={livro}></Card>
            ))}
          </div>

          {/* notícias */}
          <div className="flex justify-center sm:w-2/6 bg-sky-500/75 mb-4 sm:mb-0">
            {noticias.map((noticia) => (
              <News key={noticia.id} new={noticia}></News>
            ))}
          </div>
        </div>

        {/* faixa direita */}
        <div className="bg-clr2 w-12 hidden sm:block" />
      </main>

      <div className="flex justify-center bg-clr2 text-clr3 font-parag text-sm h-12 items-center">
        <p>© 2024 Ar Livre</p>
      </div>
    </>
  );
}
