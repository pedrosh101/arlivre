import Link from "next/link";
import React from "react";

interface News {
  id: number;
  title: string;
  texto: string;
  category: string;
  img: string[];
  ano: string;
  price: string;
  link: string;
}

interface ProjectCardProps {
  new: News;
}

const News: React.FC<ProjectCardProps> = ({ new: noticia }) => {
  const textoCortado =
    noticia.texto.length > 120
      ? noticia.texto.substring(0, 120).trim() + "..."
      : noticia.texto;

  return (
    <div className="flex flex-col justify-between h-fit flex-1 border border-gray-300 bg-clr3 rounded-md p-6 text-white m-1">
      <h2 className="text-xl font-semibold">
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
        <button className="text-sm w-fit py-2 px-4 bg-clr1 text-black rounded-sm shadow-md hover:bg-pink-400">
          Ler
        </button>
      </Link>
    </div>
  );
};

export default News;
