"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Image from "next/image";

interface AuthorInfo {
  [key: string]: {
    name: string;
    text: string;
    image: string;
  };
}

function Autores() {
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const authors = ["Tiago Cfer", "Mauricio Salles Vasconcelos", "Mario Bellatin"];

  const authorInfo: AuthorInfo = {
    "Tiago Cfer": {
      name: "Tiago Cfer",
      text: "Tiago Cfer é pesquisador e escritor. Prepara a edição de sua tese, concluída em 2019, revista e acrescida de um estudo sobre a trilogia de romances – Paternidades falhadas – do escritor português, nascido na França, Valério Romão, para o livro Desabrigo-mundo – narrativa século XXI. Em 2023, publicou o ensaio Mutações da escrita na época do vampirismo pornográfico (Ar Livre Edições) e o romance Gradiente Spectrum (Editora Córrego: Coleção Vírus). Está prevista uma edição em livro de sua dissertação, Samuel Rawet – Pensamento-Prosa, pelo selo Ar Livre Edições.",
      image: "/img/tiago.jpg",
    },
    "Mauricio Salles Vasconcelos": {
      name: "Mauricio Salles Vasconcelos",
      text: "Nasceu no Rio de Janeiro. Vive em São Paulo desde 2005. Escritor e performer. O volume Mantra Muzak (2024) apresenta 10 peças de sua autoria. Dirigiu vídeos sobre as poéticas de Cesário Verde, Guy Debord, Maurice Blanchot e do angolano Ruy Duarte de Carvalho. Participou como ator dos filmes São Ateu (Hiro Hishikawa, 2022) e Complô – Os deuses da peste (Tiago Mata Machado, 2024). Seus livros mais recentes, entre muitos nos campos da narrativa, da poesia e do ensaio, são: Últimas décadas nos cinemas – Livro-de-Bolsa (2024); Bebete Bezos (2023) e Seriado (2021), romances. Nove livros de poesia estão reunidos em Vocal (2022). Na área ensaística: Mapas Caminhantes – Poesia do Tempo e da Terra (2023) e Em Tempo/Extremo Poema (José Emílio-Nelson), de 2022; ambos publicados por Edições Esgotadas (Lisboa). Nas Edições Ar Livre, A Lágrima Macrológica (Hospital Brasil), de 2023, incursiona pela crítica político-cultural. Atua no Programa de Pós-Graduação em Estudos Comparados de Literaturas de Língua Portuguesa (Universidade de São Paulo).",
      image: "/img/mauricio.jpg",
    },
    "Mario Bellatin": {
      name: "Mario Bellatin",
      text: "Mario Bellatin nasceu no México e cresceu no Peru, onde deu início à sua trajetória na literatura com o romance Mujeres de sal (1986), editado e vendido de forma independente. Atualmente, é reconhecido como um dos nomes mais inventivos da literatura hispano-americana. Dentre as mais de trinta narrativas publicadas, algumas como Salão de beleza (1994), Flores (2001) e Lições para uma lebre morta (2005) já são consideradas clássicos contemporâneos.",
      image: "/img/mario.jpg",
    },
  };

  const handleAuthorClick = (author: string) => {
    setSelectedAuthor(author);
  };

  const variants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-clr3 text-lg text-black h-screen">
        <section className="flex sm:flex-row flex-col">
          {/* Lado esquerdo */}
          <div className="flex bg-clr3 flex-1/2 relative w-full md:w-auto">
            <svg
              className="w-full md:w-[50vw] sm:h-[100vh] h-[60vh]"
              viewBox="0 0 400 400"
            >
              {[...Array(26)].map((_, index) => (
                <motion.circle
                  key={index}
                  cx="250"
                  cy="150"
                  r={100 + index * 10}
                  fill="none"
                  stroke="#DB68DB"
                  strokeWidth=".8"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  style={{ originX: "150px", originY: "150px" }}
                  whileHover={{ scale: 1.4 }}
                  onClick={() => handleAuthorClick(authors[index % 3])}
                />
              ))}
              {authors.map((author, index) => (
                <text
                  key={index}
                  x="250"
                  y={120 + index * 30}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fill="white"
                  fontSize="16px"
                  fontWeight="bold"
                  className="cursor-pointer font-agrandir tracking-wider"
                  onClick={() => handleAuthorClick(author)}
                >
                  {author}
                </text>
              ))}
            </svg>
          </div>

          {/* Lado direito */}
          <div className="flex w-full flex-1/2 sm:p-8 p-0 bg-clr3 text-white">
            {selectedAuthor && (
              <div className="flex flex-col sm:items-center px-4 pt-0 sm:pt-12 pb-4 space-y-4">
                <div className="flex mt-4 sm:mt-0">
                  <div className="relative h-64 w-64 rounded-full overflow-hidden">
                    <Image
                      src={authorInfo[selectedAuthor].image}
                      alt={selectedAuthor}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="sm:text-center mt-3">
                  <h1 className="text-3xl mb-4">
                    {authorInfo[selectedAuthor].name}
                  </h1>
                  <h2 className="sm:text-lg text-base">{authorInfo[selectedAuthor].text}</h2>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Autores;
