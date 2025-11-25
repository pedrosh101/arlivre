import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../../../types/index";

interface ProjectCardProps {
  project: Project;
}

const italicizeWords = (text: string) => {
  return text
    .replace(/exemplo(s)?/gi, "<em>$&</em>")

};


const Card: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between text-center space-y-1 md:space-y-2 m-1 p-4 border border-gray-300 bg-clr3 hover:bg-clr3/80 rounded-md items-center text-white">
      <Link
        href={`/livro/${project.id}`}
        className="relative h-48 w-full overflow-hidden"
      >
        <Image src={project.img} alt="Imagem" fill className="object-contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </Link>

      <Link
        href={{
          pathname: `/livro/${project.id}`,
        }}
      >
        <h2
  className="font-semibold text-lg 2xl:text-xl"
  dangerouslySetInnerHTML={{ __html: italicizeWords(project.title) }}
/>
      </Link>

      <Link
        href={{
          pathname: `/colecoes/${project.categorylink}`,
        }}
      >
        <h2 className="text-sm text-clr2">{project.category}</h2>
      </Link>

      <p className="text-sm">{project.price}</p>

      <Link
        className="flex"
        href={{
          pathname: `/livro/${project.id}`,
        }}
      >
        <button className="text-sm w-fit py-1 px-3 rounded-sm bg-clr1 text-black shadow-md hover:bg-pink-400">
          COMPRAR
        </button>
      </Link>
    </div>
  );
};

export default Card;
