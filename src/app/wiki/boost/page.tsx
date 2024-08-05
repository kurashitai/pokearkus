/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiBoost = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-zinc-800 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white text-white py-10 shadow-sm">
        Boost
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className=" xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          O sistema de Boost do Poke Arkus é projetado para ser simples e
          direto, permitindo aos jogadores fortalecerem seus Pokémon de forma
          eficiente. Atualmente, existem quatro tipos de Boost Stones, cada uma
          com uma função específica:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Boost Stone 1-50</strong>: Esta pedra é utilizada para
            aumentar o nível do Pokémon até +50. Embora seja bastante útil, ela
            possui uma pequena chance de falhar, o que pode exigir o uso de mais
            de 50 itens para alcançar o nível máximo.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Boost Stone 51-60</strong>: Esta pedra é usada para elevar o
            Pokémon do nível +51 até +60. Diferente da Boost Stone 1-50, esta
            pedra tem 100% de chance de sucesso.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Boost Stone 61-70</strong>: Similarmente, esta pedra é
            destinada a aumentar o nível do Pokémon do +61 até +70, também
            garantindo 100% de sucesso em cada tentativa.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Ultra Boost 50</strong>: Esta pedra especial permite que
            você aumente instantaneamente o nível do seu Pokémon para +50, sem
            qualquer risco de falha.
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          As Boost Stones 1-50 podem ser obtidas de várias formas: derrotando
          Pokémon especiais, enfrentando Pokémon Mega, completando tarefas do
          sistema de tasks, e através de diversas quests espalhadas pelo mapa.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Para adquirir as Boost Stones 51-60, os jogadores podem completar
          quests mais avançadas ou trocar pontos na Online Shop.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          As Boost Stones 61-70 são recompensadas em quests ainda mais
          desafiadoras, como a Mistery Quest, além de estarem disponíveis em
          pacotes e eventos que ocorrem periodicamente.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Por fim, a Ultra Boost 50 pode ser obtida como recompensa em quests
          especiais, como a Device Quest, ou encontrada no baú do Goal ao gastar
          diamantes.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2 pb-10">
          Com este sistema de Boost Stones, Poke Arkus oferece uma maneira
          estratégica e envolvente de fortalecer seus Pokémon, recompensando a
          perseverança e a exploração contínua. Então, prepare-se para enfrentar
          novos desafios e elevar seu time ao próximo nível!
        </p>
      </div>
    </div>
  );
};

export default WikiBoost;
