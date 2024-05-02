"use client";
import React from "react";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";

function Page() {
  const variants = {
    animate: {
      scale: [1, 1.2, 1], // Vai de 1 para 1.2 e volta para 1 para simular a ondulação
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <main className="bg-clr3 text-lg text-black h-screen">
        <section className="flex">
          <div className="flex flex-1/2">
            <svg
              width="50vw"
              height="100vh"
              viewBox="0 0 400 400"
      
            >
              {[...Array(26)].map((_, index) => (
                <motion.circle
                  key={index}
                  cx="250"
                  cy="150"
                  r={100 + index * 10} // Ajusta o raio dos círculos para criar diferentes tamanhos
                  fill="none"
                  stroke="#3b82f6
                  "
                  strokeWidth=".8"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  style={{ originX: "150px", originY: "150px" }} // Define o ponto de origem para a animação
                  whileHover={{ scale: 1.4 }} // Animação ao passar o mouse por cima (opcional)
                />
              ))}
            </svg>
          </div>
          <div className="flex w-full flex-1/2 p-28">
            <h1 className="text-white">Autores</h1>
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
