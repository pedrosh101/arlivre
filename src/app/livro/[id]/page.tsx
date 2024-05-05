"use client";

import Image from "next/image";
import { projects } from "../../data/projects";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

const Livro = ({ params }: any) => {
  const livro = projects.find((proj: any) => proj.id.toString() === params.id);

  return (
    <>
      <Navbar />
      <main className="flex w-full min-h-screen text-white bg-clr3 justify-center px-4">
        <div className="flex flex-col sm:w-3/5 sm:my-16 my-10">
          <div className="flex sm:flex-row flex-col h-5/6 sm:space-x-24 space-x-0 ">
            {/* left */}
            <div className="flex sm:w-2/5 sm:h-full h-72 sm:mb-0 mb-8">
              <div className="relative w-96">
                <Image
                  src={livro?.img!}
                  alt="img"
                  fill
                  className="object-contain sm:object-top"
                />
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col sm:w-3/5 space-y-4 font-semibold">
              <h1 className="text-4xl">{livro?.title}</h1>
              <h1 className="text-base font-semibold">{livro?.author}</h1>
              <h1 className="text-base font-medium pb-4">
                {livro?.description}
              </h1>
              <button className="bg-clr1 hover:bg-pink-400 text-black py-2 px-4 rounded-sm w-fit shadow-md">
                Comprar
              </button>
            </div>
          </div>
          {/* info */}
          <div className="h-0.5 w-full bg-clr2 sm:block hidden mt-12" />
          <div className="flex sm:flex-row flex-col w-full justify-between sm:text-center sm:py-12 py-8 space-y-2 sm:space-y-0">
            <div>
              <h1 className="font-semibold text-clr2">Categoria:</h1>
              <Link
                href={{
                  pathname: `../colecoes/${livro?.categorylink}`,
                }}
              >
                <h1>{livro?.category}</h1>
              </Link>
            </div>
            <div>
              <h1 className="font-semibold text-clr2">Ano:</h1>
              <h1>{livro?.ano}</h1>
            </div>
            <div>
              <h1 className="font-semibold text-clr2">Nº de páginas:</h1>
              <h1>{livro?.pag}</h1>
            </div>
          </div>
          <div className="h-0.5 w-full bg-clr2 sm:block hidden" />
        </div>
      </main>
    </>
  );
};

export default Livro;
