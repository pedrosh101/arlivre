"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { colecoes } from "../../data/colecao";
import { projects } from "../../data/projects";

const Colecoes = ({ params }: any) => {
  const { id } = params;
  const colecao = colecoes.find((item) => item.caminho === id);
  const correspondentes = projects.filter((project) => project.categorylink === id);

  return (
    <>
      <Navbar />
      <main className="flex w-full min-h-screen text-white bg-clr3 justify-center">
        <div className="flex flex-col sm:w-3/5 sm:my-16 my-10">
          {colecao && (
            <>
              <h1 className="text-5xl font-tt">{colecao.title}</h1>
              <div className="bg-clr2 p-px my-8 w-1/2"></div>
              <p className="font-parag text-base tracking-wide">
                {colecao.texto}
              </p>
              <div className="flex flex-wrap mt-12">
                {correspondentes.map((project) => (
                  <Link key={project.id} href={`/livro/${project.id}`}>
                    <div className="relative h-72 sm:mt-0 w-96 mr-4 mb-4">
                      <Image
                        src={project.img}
                        alt={`Image ${project.id}`}
                        fill
                        className="object-contain transition-opacity duration-700"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Colecoes;
