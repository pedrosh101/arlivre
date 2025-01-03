import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Section {
  texto: string; // Texto descritivo
  img?: string; // Caminho da imagem (opcional)
  legenda?: string; // Legenda da imagem (opcional)
}

interface News {
  id: number;
  title: string;
  author?: string; // Nome do autor (opcional)
  subt?: string;
  endtxt?: string;
  sections: Section[]; // Lista de seções (texto, imagem, legenda)
  miniatureImg: string; // Imagem em miniatura
}


interface ProjectCardProps {
  new: News;
}

const News: React.FC<ProjectCardProps> = ({ new: noticia }) => {
  const textoCortado = noticia.sections
  .map((section) => section.texto) // Extrai os textos de todas as seções
  .join(" ") // Junta todos os textos em uma única string
  .substring(0, 120) // Limita o comprimento total a 120 caracteres
  .trim() + (noticia.sections.some((section) => section.texto.length > 120) ? "..." : ""); // Adiciona "..." caso tenha sido cortado


  return (
    <div className="flex justify-between h-fit flex-1 border border-gray-300 bg-clr3 hover:bg-clr3/80 rounded-md p-4 text-white m-1 space-x-4">
      <div className={twMerge("relative overflow-hidden h-52 w-2/5")}>
        <Link
          href={{
            pathname: `/noticias/${noticia.id}`,
          }}
        >
          <Image
            src={noticia.miniatureImg}
            alt="Imagem"
            fill
            className="object-contain"
          />
        </Link>
  
      
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-semibold">
          <Link
            href={{
              pathname: `/noticias/${noticia.id}`,
            }}
          >
            {noticia.title}
          </Link>
        </h2>
        <p className="text-sm text-clr2">{textoCortado}</p>

        <Link
          href={{
            pathname: `/noticias/${noticia.id}`,
          }}
        >
          <button className="text-sm w-fit py-2 px-4 mt-3 bg-clr1 text-black rounded-sm shadow-md hover:bg-pink-400">
            Ler
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
