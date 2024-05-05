"use client";

import Image from "next/image";
import { noticias } from "../../data/noticias";
import Navbar from "@/app/components/navbar";


const Noticia = ({ params }: any) => {
  const noticia = noticias.find((proj) => proj.id.toString() === params.id);

  

  return (
    <>
      <Navbar />
      <main className="flex w-full text-white bg-clr3 justify-center">
        <div className="flex flex-col sm:w-3/5 sm:my-16 my-10">
          <div className="flex flex-col space-x-0 px-4 sm:px-0">
            {/* text */}
            <div className="flex flex-col space-y-4 font-semibold">
              <h1 className="text-4xl">{noticia?.title}</h1>
              <h1 className="text-base font-semibold">{noticia?.author}</h1>
              <h1 className="text-base font-medium pb-4">
                {noticia?.texto}
              </h1>
            </div>
            {/* img */}
            <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:mb-0 mb-8 pt-6">
              {noticia?.img.map((img, index) => (
                <div key={index} className="flex relative w-full sm:h-[38rem] h-96">
                  <Image
                    src={img}
                    alt="img"
                    fill
                    className="object-contain sm:object-top px-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Noticia;
