import Card from "./components/card";
import News from "./components/news";
import { projects } from "./data/projects";
import { noticias } from "./data/noticias";

export default function Home() {
  return (
    <div
      className="flex flex-col sm:flex-row w-full sm:p-4 px-4 pt-4 sm:space-x-4 bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage:
          "url('https://upload.wikimedia.org/wikipedia/commons/7/7b/Bos_met_kreupelhout_-_s0066V1962_-_Van_Gogh_Museum.jpg')",
      }}
    >
      {/* Livros */}
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:w-4/6 bg-slate-100/20 mb-4 sm:mb-0 auto-rows-min">
        {projects.map((livro) => (
          <Card key={livro.id} project={livro}></Card>
        ))}
      </div>

      {/* Notícias */}
      <div className="flex flex-col justify-center h-2/5 sm:w-2/6 bg-slate-100/20 mb-4 sm:mb-0">
        {noticias.map((noticia) => (
          <News key={noticia.id} new={noticia}></News>
        ))}
      </div>
    </div>
  );
}
