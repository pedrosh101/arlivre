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
    <div className="flex justify-between h-fit flex-1 border border-gray-800 bg-clr3 hover:bg-clr3/80 rounded-md p-4 text-white m-1 space-x-4">
      <Link
        href={{
          pathname: `/noticias/${noticia.id}`,
        }}
        className="relative h-48 w-48 overflow-hidden"
      >
        <Image
          src={noticia.miniatureImg}
          alt="Imagem"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-3/5">
        <h2 className="font-semibold text-base mb-2">
          <Link
            href={{
              pathname: `/noticias/${noticia.id}`,
            }}
          >
            {noticia.title}
          </Link>
        </h2>
        <p className="text-sm text-white">{textoCortado}</p>

        <Link
          href={{
            pathname: `/noticias/${noticia.id}`,
          }}
        >
          <button className="text-sm w-fit mt-2 py-1 px-3 rounded-sm bg-clr1 text-black shadow-md hover:bg-pink-400">
            LER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
