"use client";
import App from "@/components/app";
import { Clans } from "@/components/clans";
import { Landing } from "@/components/home";
import { System } from "@/components/systems";
import { Rodape } from "@/components/bottom";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center pt-60"
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <Landing />
      <App />
      <div className="relative flex flex-col gap-5 items-center justify-center py-10 pb-0 pt-40">
        <a href="../wiki/clans">
          <button
            className="relative w-[284px] h-[63px] flex items-center justify-center px-6 text-black font-extrabold text-3xl bg-transparent border-none outline-none"
            style={{
              backgroundImage: `url('/textbg.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="relative z-10">CLÃ</span>
          </button>
        </a>
      </div>
      <div className="relative flex flex-row gap-5 items-center justify-center py-10 pb-20">
        <a href="../wiki/clans">
          <Image
            src={"/clan.png"}
            className=" cursor-pointer"
            width={1168}
            height={680}
            alt="clans"
          />
        </a>
      </div>
      <Rodape />
      <div className="justify-between text-center text-white items-center p-10">
        <p className=" font-extrabold">
          Divirta-se com outros jogadores em um mundo repleto de Pokémons e
          aventuras.
        </p>
        <p>
          © 1996 - 2023 | Todos os Pokémons e seus respectivos nomes são
          direitos reservados a Nintendo.
        </p>
        <p>Um game feito de fã para fã | Arkus Team.</p>
      </div>
    </div>
  );
}
