import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  img: string;
  ano: string;
  price: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const Card: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col justify-between text-center h-96 flex-1 m-1 p-4 border border-gray-300 space-y-1 bg-clr3 rounded-md items-center">
      <div className={twMerge("relative overflow-hidden h-44 w-full")}>
        <Link
          key={project.id}
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
      <h2 className="text-xl font-semibold">
        <Link
          key={project.id}
          href={{
            pathname: `/livro/${project.id}`,
          }}
        >
          {project.title}
        </Link>
      </h2>
      <p className="text-sm text-clr4">{project.category}</p>
      <p className="text-sm">{project.price}</p>
      <Link
        key={project.id}
        href={{
          pathname: `/livro/${project.id}`,
        }}
      >
        <button className="text-sm w-fit p-3 bg-clr4 text-white rounded-md">
          COMPRAR
        </button>
      </Link>
    </div>
  );
};

export default Card;
