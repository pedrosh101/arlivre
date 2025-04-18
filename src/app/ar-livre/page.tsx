

import Image from "next/image";
import Logo from "../../../public/img/logo.jpg";

const ArLivre = () => {
  return (
    <>
      <main className="flex flex-col w-full text-white bg-clr3 text-center min-h-screen">

        <div className="flex flex-col sm:my-16 my-10 space-y-8 p-4 items-center">
          <div className="flex relative w-64 h-64">
            <Image
              src={Logo}
              alt="img"
              fill
              className="object-cover sm:object-top rounded-sm"
            />
          </div>

          <p className="text-lg text-justify font-light sm:w-3/5">
            Tem como projeto coleções dedicadas a ensaios sobre arte, política, cultura do presente, narrativas e escritas performáticas norteadas por traços de experimentalidade/criação de linguagens. Orienta-se sob o signo das histórias da cultura e da literatura na
            contemporaneidade.
          </p>
        </div>
      </main>
    </>
  );
};

export default ArLivre;
