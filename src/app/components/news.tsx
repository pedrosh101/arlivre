import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface News {
  id: number;
  title: string;
  texto: string;
  category: string;
  img: string[];
  miniatureImg: string;
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
          <button className="text-sm w-fit py-2 px-4 bg-clr1 text-black rounded-sm shadow-md hover:bg-pink-400">
            Ler
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
