"use client";
import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";

const Colecoes = ({ title, img, img2, texto }: any) => {
  return (
    <>
      <main className="bg-orange-200 text-lg font-extralight text-black">
        <Navbar />
        <div className="flex w-full pl-4 sm:pl-24 pr-8 sm:pr-24 pt-6 sm:pt-8"></div>

        <div className="flex flex-col space-y-10 p-4 sm:p-14 sm:px-24 sm:w-2/3 pt-12">
          <h1 className="text-5xl font-tt">{title}</h1>
          <div className="bg-black p-px my-4 w-1/2"></div>
          <p className="font-parag text-base tracking-wide sm:w-1/2">{texto}</p>
          <Link href="https://wa.me/5512982365381" target="_blank">
            <div className="flex w-fit font-parag text-black bg-neutral-200 hover:bg-emerald-400 px-2">
              <h2>ADQUIRIR</h2>
            </div>
          </Link>

          <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 pb-6 sm:pb-0">
            <div className="relative h-72 sm:mt-0 w-96">
              {img && (
                <Image
                  src={img}
                  alt="Highlighted"
                  fill
                  className="object-contain transition-opacity duration-700"
                />
              )}
            </div>
            {img2 && (
              <div className="relative h-72 sm:mt-0 w-96">
                <Image
                  src={img2}
                  alt="Highlighted"
                  fill
                  className="object-contain transition-opacity duration-700"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center bg-red-300 text-red-100 font-parag text-sm py-0.5">
          <p>© 2023 Ar Livre</p>
        </div>
      </main>
    </>
  );
};

export default Colecoes;
