import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../../../types/index";

interface ProjectCardProps {
  project: Project;
}

const italicizeWords = (text: string) => {
  return text.replace(/exemplo(s)?/gi, "<em>$&</em>");
};

const Card: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/[0.2] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08] hover:backdrop-blur-md hover:shadow-2xl">
      
      {/* Imagem */}
      <Link
        href={`/livro/${project.id}`}
        className="relative flex h-56 items-center justify-center overflow-hidden p-4"
      >
        {/* glow discreto */}
        <div className="absolute h-28 w-28 rounded-full bg-clr1/0 blur-2xl transition-all duration-500 group-hover:bg-clr1/20" />

        {/* imagem */}
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="relative z-10 object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col justify-between px-4 pb-4 text-white">
        
        <div className="space-y-1">
          
          {/* Categoria */}
          <Link href={`/colecoes/${project.categorylink}`}>
            <span className="text-[11px] uppercase tracking-[0.15em] text-clr1 transition-opacity hover:opacity-100 group-hover:text-white">
              {project.category}
            </span>
          </Link>

          {/* Título */}
          <Link href={`/livro/${project.id}`}>
            <h2
              className="line-clamp-2 text-lg font-semibold leading-snug transition-colors duration-300 "
              dangerouslySetInnerHTML={{
                __html: italicizeWords(project.title),
              }}
            />
          </Link>

          {/* Preço */}
          <p className="pt-1 text-sm text-white/90 ">
            {project.price}
          </p>
        </div>

        {/* Botão */}
        <Link href={`/livro/${project.id}`} className="mt-4">
          <button className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-clr1 hover:bg-clr1 hover:text-black">
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;