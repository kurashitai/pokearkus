import landingPageIndex from "/public/botao.png";
import Image from "next/image";
import LogoImage2 from "/public/logo.png";
import { useRef } from "react";

export function Landing() {
  const scrollToSection = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section>
      <div className="relative flex flex-col gap-5 items-center justify-center py-5 pb-40">
        <Image src={LogoImage2} alt="Logo" height={100} />
        <button
          onClick={scrollToSection}
          className="relative w-full sm:w-[300px] md:w-[549px] h-[100px] md:h-[150px] flex items-center justify-center px-6 text-white font-extrabold text-xl sm:text-2xl md:text-3xl bg-transparent border-none outline-none"
          style={{
            backgroundImage: `url('/botao.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="relative z-10">
            JOGUE GRÁTIS AGORA <br /> CRIE A CONTA EM NOSSO CLIENT
          </span>
        </button>
      </div>
    </section>
  );
}
