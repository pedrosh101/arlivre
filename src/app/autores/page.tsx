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
      <main className="bg-orange-400 text-lg font-extralight text-black h-screen">
        <Navbar />
        <section className="flex">
          <div className="relative">
            <svg
              className="absolute"
              width="1000"
              height="1000"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
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
        </section>
      </main>
    </>
  );
}

export default Page;
