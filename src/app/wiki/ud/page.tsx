/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiUd = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-black to-zinc-800 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white text-white py-10 shadow-sm">
        Ultra Dimension e Platinum
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          <strong>Ultra Dimension (UD)</strong> é uma emocionante aventura
          destinada a jogadores de nível 475 ou superior, acessível na região de
          Sinnoh através do NPC Dimensional Traveller. A entrada custa 20
          Fragmentos Luminosos, mas jogadores com VIP Plus recebem um desconto
          de 50%. Este acesso é válido uma vez por dia e dura até o próximo
          server save.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/system/ud.png"
            alt="Tokens"
            width={419}
            height={208}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Ao entrar na <strong>Ultra Dimension</strong>, você enfrentará Pokémon
          de nível Gold em suas impressionantes versões galaxy. Derrotando esses
          Pokémon, você terá a chance de obter três itens distintos:{" "}
          <strong>
            Fragmento Luminoso, Estilhaço Luminoso e Estilhaço Sombrio.
          </strong>
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/galaxy.png"
            alt="Tokens"
            width={1300}
            height={512}
            className="max-w-xs pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Tanto o Estilhaço Luminoso quanto o Estilhaço Sombrio seguem uma
          lógica de transformação: ao acumular 100 unidades, você pode
          convertê-los em um Fragmento. Com 100 Fragmentos, é possível
          transformá-los em Luz Solidificada ou Sombra Aprisionada. Esses itens
          especiais podem ser trocados com o NPC Dimensional Traveller para
          obter recompensas exclusivas.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/udseller.png"
            alt="Tokens"
            width={325}
            height={400}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/udshop.png"
            alt="UD Shop"
            width={700}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
            onClick={toggleZoom}
          />

          {isZoomed && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={toggleZoom}
            >
              <Image
                src="/wiki/udshop.png"
                alt="UD Shop"
                width={700}
                height={400}
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          No Shop da Ultra Dimension (UD), você pode adquirir a Purity Box. Ao
          abrir essa caixa, você receberá uma stone purificada de um dos
          elementos dos clãs, conhecida como Purity. Essa Purity é essencial
          para evoluir Pokémon ao nível Platinum.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Para transformar um Pokémon em sua versão Shiny do Tier Platinum, você
          precisará de:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>10 Purity </strong>do elemento correspondente ao Pokémon.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>10 itens Platinum </strong>específicos do Pokémon, que podem
            ser obtidos ao derrotar as versões Shiny desses Pokémon na região de
            Sinnoh.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>10 Luzes Solidificadas</strong>, que podem ser adquiridas na
            Ultra Dimension.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>1kkk </strong>em moedas do jogo.
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Com todos esses itens em mãos, basta usar o item conseguido da versão
          Shiny no Pokémon desejado e ele se transformará em sua poderosa versão
          Shiny, atingindo o prestigiado Tier Platinum.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Os Pokemons de Tier Platinum que podem ser conseguidos dessa forma
          podem ser conferidos ingame, através do botão Tier List e os itens
          podem ser obtidos derrotando suas versões selvagem em Sinnoh, são
          eles:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Infernape</strong>: Shiny Platina do clã Volcanic.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Torterra</strong>: Shiny Platina do clã Naturia.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Empoleon</strong>: Shiny Platina do clã Seavell.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Staraptor</strong>: Shiny Platina do clã Wingeon.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Luxray</strong>: Shiny Platina do clã Raibolt.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Drapion</strong>: Shiny Platina do clã Malefic.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Hippowdon</strong>: Shiny Platina do clã Orebound.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Gallade</strong>: Shiny Platina do clã Psycraft.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Toxicroak</strong>: Shiny Platina do clã Gardestrike.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Shiny Bronzong</strong>: Shiny Platina do clã Ironhard.
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2 pb-10">
          Os Pokemons de tier Platina são bem mais fortes do que os de tier
          Gold, porém também são consideravelmente mais difíceis de se obter. O
          que está esperando pra fazer o seu?
        </p>
      </div>
    </div>
  );
};

export default WikiUd;
