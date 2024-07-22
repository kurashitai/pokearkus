/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiParadox = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-black to-zinc-800 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Paradoxo
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          Os Pokémon Paradoxo são criaturas extraordinárias que podem ser
          obtidas de diversas maneiras: capturando-os diretamente, utilizando
          itens especiais adquiridos em desafios contra os lendários anciões, ou
          através das Black Star Medals, Esmeraldas, e Imparcial Medals no Task
          Shop.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para invocar esses Pokémon, é necessário realizar um ritual nos
          altares das antigas runas, onde é possível sacrificar até 5 itens por
          vez. Há um limite diário de invocação e até 25 tentativas de captura
          de Pokémon Paradoxo. Para agilizar este processo, você pode adquirir o
          item "Paradox Reset" no Diamond Shop, que reinicia o limite,
          permitindo novas 25 tentativas de captura e invocações. Vale lembrar
          que este item só pode ser utilizado quando o jogador já tiver atingido
          o limite de 25 tentativas.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          As Paradox Balls, introduzidas junto com os Pokémon Paradoxo, são
          itens de captura excepcionais. Elas podem ser obtidas no Task Shop ou
          completando missões no menu Task System, e possuem a maior pontuação
          entre todas as Pokébolas, com 30 pontos por unidade.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Após alcançar 100 pontos de proficiência e nível 475+, você poderá
          desafiar os lendários anciões Entei, Raikou e Suicune em suas formas
          Paradoxo: Gouging Fire, Raging Bolt e Walking Wake, respectivamente.
          Para enfrentá-los, é necessário o item Galaxy Dust, que pode ser
          adquirido derrotando Moltres, Zapdos, Articuno, Entei, Raikou e
          Suicune.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Com a Galaxy Dust em mãos, use-a no lendário desejado para ser
          transportado para uma dimensão paradoxal, onde enfrentará um dos
          anciões. Esse desafio pode ser árduo, portanto, recomendamos
          desenvolver uma estratégia sólida e, preferencialmente, enfrentar o
          lendário ancião em grupo. Cada lendário ancião pode ser desafiado
          apenas uma vez por dia, e o Paradox Reset não permite uma segunda
          recompensa no mesmo dia.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Ao concluir o desafio, você será recompensado com:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            - 4 Imparcial Medals
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            - 4 itens de sacrifício dos Paradoxo
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            - 1 a 3 pontos de proficiência
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">- 5kk</li>
        </ul>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          As Imparcial Medals podem ser utilizadas no shop de Proficiência que
          fica localizado à direita do centro pokemon de Saffron, ao lado do
          Star Shop. Lá você pode trocar não só as Medals por outros itens, como
          também as Black Star Medal e as Emeralds por itens de pokemons de tier
          Platinum, só ir até o shop ao lado do Centro Pokemon e conferir.
          Abaixo está uma pequena imagem do Shop e onde está localizado.
        </p>
        <div className="flex justify-center items-center w-full h-full pb-10 my-4">
          <Image
            src="/wiki/paradoxshop.png"
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
                src="/wiki/paradoxshop.png"
                alt="UD Shop"
                width={700}
                height={400}
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WikiParadox;
