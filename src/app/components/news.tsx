import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Section, ProjectCardProps } from "../../../types/index";

interface News {
  id: number;
  title: string;
  author?: string;
  subt?: string;
  endtxt?: string;
  sections: Section[];
  miniatureImg: string;
}

const News: React.FC<ProjectCardProps> = ({ new: noticia }) => {
  const textoCortado =
    noticia.sections
      .map((section) => section.texto)
      .join(" ")
      .substring(0, 120)
      .trim() +
    (noticia.sections.some((section) => section.texto.length > 120)
      ? "..."
      : "");

  return (
    <div className="group flex h-fit flex-1 space-x-4 overflow-hidden rounded-xl border border-white/10 bg-black/[0.2] p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:backdrop-blur-md hover:shadow-2xl">
      
      {/* Imagem */}
      <Link
        href={`/noticias/${noticia.id}`}
        className="relative flex h-40 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg"
      >
        {/* glow discreto */}
        <div className="absolute h-20 w-20 rounded-full bg-clr1/0 blur-2xl transition-all duration-500 group-hover:bg-clr1/20" />

        <Image
          src={noticia.miniatureImg}
          alt={noticia.title}
          fill
          className="relative z-10 object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col justify-between">
        
        <div>
          {/* título */}
          <Link href={`/noticias/${noticia.id}`}>
            <h2 className="mb-2 text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-clr1">
              {noticia.title}
            </h2>
          </Link>

          {/* texto */}
          <p className="text-sm leading-relaxed text-white/80">
            {textoCortado}
          </p>
        </div>

        {/* botão */}
        <Link
          href={`/noticias/${noticia.id}`}
          className="mt-4"
        >
          <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-clr1 hover:bg-clr1 hover:text-black">
            Ler notícia
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;