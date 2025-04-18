import Image from "next/image";
import { projects } from "../../data/projects";

import Link from "next/link";

const Livro = ({ params }: any) => {
  const livro = projects.find((proj: any) => proj.id.toString() === params.id);

  return (
    <>

      <main className="flex w-full min-h-screen text-white bg-clr3 justify-center">
        <div className="flex flex-col sm:w-3/5 sm:my-16 my-10 px-4">
          <div className="flex sm:flex-row flex-col h-5/6 sm:space-x-24">
            {/* left */}
            <div className="flex sm:w-2/5 sm:h-full h-72 sm:mb-0 mb-8">
              <div className="relative w-96">
                <Image
                  src={livro?.img!}
                  alt="img"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain sm:object-top"
                />
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col sm:w-3/5 space-y-4 px-4 lg:px-0">
              <h1 className="text-4xl">{livro?.title}</h1>
              <h1 className="text-base font-semibold">{livro?.author}</h1>
              <h1 className="text-base pb-4">
                {livro?.description}
              </h1>
              <a href={livro?.buy} target="_blank">
                <button className="bg-clr1 hover:bg-pink-400 text-black py-2 px-4 rounded-sm w-fit shadow-md">
                  Comprar
                </button>
              </a>
            </div>
          </div>
          {/* info */}
          <div className="h-0.5 w-full bg-clr2 sm:block hidden mt-12" />
          <div className="flex sm:flex-row flex-col w-full justify-between sm:text-center sm:py-12 py-8 space-y-2 sm:space-y-0 px-4 lg:px-0">
            <div>
              <h1 className="font-semibold text-clr2">Coleção</h1>
              <Link
                href={{
                  pathname: `../colecoes/${livro?.categorylink}`,
                }}
              >
                <h1 className="w-fit">{livro?.category}</h1>
              </Link>
            </div>
            <div>
              <h1 className="font-semibold text-clr2">Ano</h1>
              <h1>{livro?.ano}</h1>
            </div>
            <div>
              <h1 className="font-semibold text-clr2">Preço</h1>
              <h1>{livro?.price}</h1>
            </div>
            <div>
              <h1 className="font-semibold text-clr2">Nº de páginas</h1>
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
