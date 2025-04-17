import Image from "next/image";
import { noticias } from "../../data/noticias";
import Link from "next/link";

const Noticia = ({ params }: any) => {
  const noticia = noticias.find((proj) => proj.id.toString() === params.id);

  return (
    <>
      <main className="flex w-full text-white bg-clr3 justify-center">
        <div className="flex flex-col sm:w-3/5 sm:my-16 my-10">
          <div className="flex flex-col space-x-0 px-4 sm:px-0">

            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl">{noticia?.title}</h1>
              <h2 className="text-base font-semibold">{noticia?.author}</h2>
              <h2 className="italic">{noticia?.subt}</h2>
            </div>


            <div className="flex flex-col space-y-8 pt-6">
              {noticia?.sections.map((section, index) => (
                <div key={index} className="flex flex-col space-y-4">
           
                  <p className="text-base">{section.texto}</p>

          
                  {section.img && (
                    <div className="flex justify-center items-center relative w-full sm:h-[38rem] h-96">
                      <Image
                        src={section.img}
                        alt={section.legenda || "Imagem"}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
       
                  {section.legenda && (
                    <span className="text-sm italic text-gray-400 text-center">
                      {section.legenda}
                    </span>
                  )}
                </div>
              ))}
            </div>
            {noticia?.link && (
              <div className="mt-8 text-clr2">
                <Link
                  href={noticia.link}
                  className="italic mt-8 text-justify"
                >
                  Adquira
                </Link>
              </div>
            )}
            <h2 className="italic mt-8 text-justify">{noticia?.endtxt}</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Noticia;
