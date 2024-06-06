"use client";
import App from "@/components/app";
import { Clans } from "@/components/clans";
import { Landing } from "@/components/home";
import { System } from "@/components/systems";
import { Rodape } from "@/components/bottom";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Landing />
      <App />
      <Clans />
      <System />
      <Rodape />
      <div className="justify-between text-center items-center p-10">
        <p className=" font-extrabold">
          Divirta-se com outros jogadores em um mundo repleto de Pokémons e
          aventuras.
        </p>
        <p>
          © 1996 - 2023 | Todos os Pokémons e seus respectivos nomes são
          direitos reservados a Nintendo.
        </p>
        <p>
          Um game feito de fã para fã | Arkus Team.Um game feito de fã para fã |
          Arkus Team.
        </p>
      </div>
    </div>
  );
}
