"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import {AuthorInfo} from "../../../types/index"


function Autores() {
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const authors = [
    "Damián Tabarovsky",
    "Héctor Libertella",
    "Marcus Siqueira",
    "Mario Bellatin",
    "Mauricio Salles Vasconcelos",
    "Tiago Cfer",
  ];

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
    "Héctor Libertella": {
      name: "Héctor Libertella",
      text: "Héctor Libertella nasceu em Bahía Blanca, em 1945 e faleceu em Buenos Aires, em 2006. Ensinou teoria e crítica literária nas universidades de Nova York, México e Buenos Aires. Foi editor em distintas casas da América Latina e também fez carreira como pesquisador no CONICET, onde desenvolveu seu trabalho na área da filologia. Publicou, entre muitos outros, os livros: El camino de los hiperbóreos (Prêmio Paidós, Buenos Aires, 1968); Aventuras de los miticistas (Prêmio internacional Monte Ávila, Caracas, 1971); Personas en pose de combate (1975); ¡Cavernícolas! (1985); El paseo internacional del perverso (Prêmio Juan Rulfo, Paris, 1986); Pathografeia (1991); El árbol de Saussure, relato-utopía (2000); La Librería Argentina (2003); La Arquitectura del Fantasma (2006); El lugar que no está (2006); Zettel (2009).",
      image: "/img/hector.jpeg",
    },
    "Damián Tabarovsky": {
      name: "Damián Tabarovsky",
      text: "Damián Tabarovsky nasceu em 1967, em Buenos Aires, cidade onde reside. Diplomou-se na École des Hautes Études en Sciences Sociales, de Paris. Ensaísta e romancista, seus livros foram traduzidos em inglês, francês, alemão, russo, grego, sueco, hebreu e português. No Brasil, teve publicados Kafka de férias (romance) e Literatura de esquerda (ensaio).",
      image: "/img/damian.jpeg",
    },
    "Marcus Siqueira": {
      name: "Marcus Siqueira",
      text: "Natural de Caratinga (MG), Marcus Siqueira estudou composição com Willy Corrêa de Oliveira logo após sua graduação em violão erudito sob orientação de Edelton Gloeden na Universidade de São Paulo (USP). Entre 1993 e 2002, deu continuidade aos seus estudos de composição em aulas particulares com o mestre. Sua produção orquestral soma 19 obras, estreadas por grupos de excelência como a Orquestra Sinfônica do Estado de São Paulo (OSESP), a Filarmônica de Minas Gerais (OFMG), a Orquestra Sinfônica Nacional (OSN) e a Sinfônica da USP (OSUSP). Suas partituras foram regidas por maestros como Joana Carneiro, Ernani Aguiar, Ricardo Bologna, Marcos Arakaki e Luthero Rodrigues. Como arranjador, realizou transcrições para a Banda Sinfônica do Estado de São Paulo e para a Orquestra Brasileira de Sopros de Tatuí.",
      image: "/img/marcus.jpeg",
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
      <main className="flex sm:flex-row flex-col bg-clr3 text-lg text-black w-full">
        {/* Lado esquerdo */}
        <div className="flex-1 bg-clr3 relative flex items-center justify-center">
          <svg className="w-full sm:h-[100vh] h-[60vh]" viewBox="0 0 400 400">
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
        <div className="flex-1 bg-clr3 text-white p-8 flex flex-col  justify-center">
          {selectedAuthor ? (
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-64 w-64 rounded-full overflow-hidden">
                <Image
                  src={authorInfo[selectedAuthor].image}
                  alt={selectedAuthor}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-3xl mb-4">
                {authorInfo[selectedAuthor].name}
              </h1>
              <p className="text-base">{authorInfo[selectedAuthor].text}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default Autores;
