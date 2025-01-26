import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import {Project} from "../../../types/index"

interface ProjectCardProps {
  project: Project;
}

const Card: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between text-center h-[25rem] m-1 p-4 border border-gray-300 bg-clr3 hover:bg-clr3/80 rounded-md items-center text-white">
      
      <div className={twMerge("relative overflow-hidden h-44 w-full")}>
        <Link
          href={{
            pathname: `/livro/${project.id}`,
          }}
        >
          <Image
            src={project.img}
            alt="Imagem"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <Link
        href={{
          pathname: `/livro/${project.id}`,
        }}
      >
        <h2 className="font-semibold text-lg 2xl:text-xl">{project.title}</h2>
      </Link>

      <Link
        href={{
          pathname: `/colecoes/${project.categorylink}`,
        }}
      >
        <h2 className="text-sm text-clr2">{project.category}</h2>
      </Link>

      <p className="text-sm">{project.price}</p>

      <Link className="flex"
        href={{
          pathname: `/livro/${project.id}`,
        }}
      >
        <button className="text-sm w-fit py-2 px-3 bg-clr1 text-black rounded-sm shadow-md hover:bg-pink-400">
          COMPRAR
        </button>
      </Link>
    </div>
  );
};

export default Card;
