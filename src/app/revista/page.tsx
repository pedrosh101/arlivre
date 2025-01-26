import { noticias } from "../data/noticias";
import News from "../components/news";

const Revista = () => {
  return (
    <>
      <main className="flex flex-col w-full text-white bg-clr3 text-center min-h-screen">
        <div className="flex flex-col sm:my-16 my-10 space-y-8 p-4 items-center">
          <h1 className="text-3xl my-2">Revista Ar Livre</h1>
          <div className="flex flex-col justify-center h-fit sm:w-2/6 bg-slate-100/20 mb-4 sm:mb-0">
            {noticias
              .filter((noticia) => noticia.revista)
              .map((noticia) => (
                <News key={noticia.id} new={noticia}></News>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Revista;

