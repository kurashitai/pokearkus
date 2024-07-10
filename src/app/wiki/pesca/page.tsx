"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiFishing = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Pesca
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          Vamos entender um pouco mais sobre a pesca no Poke Arkus, para
          começar, você pode pescar em praticamente qualquer lugar que tenha
          água, você ja começa com a vara de pescar, que fica localizada logo ao
          lado de onde você coloca o Pokemon.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Você tem atualmente duas opções de pesca: Com ou sem isca. Sem isca
          você vai pescar sempre os Magikarp, que no começo de jogo é uma fonte
          legal de experiência, porém você não quer pescar Magikarps pra sempre,
          não é? É ai que entram as iscas.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para usar as iscas melhores, você tem que também aumentar seu nível
          como pescador, e pra fazer isso é bem fácil, basta... Pescar! Com ou
          sem Isca, a % de exp de pesca que você ganha é sempre a mesma, 5% por
          fisgada, independente da quantidade de pokemons que você puxar.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para comprar iscas é necessario ir até um Ponto de Pesca, normalmente
          eles ficam marcados no Minimapa e tem sempre um NPC chamado Isca
          Siegfried (o que estou usando de exemplo fica localizado em Saffron).
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/pesca.png"
            alt="TC"
            width={419}
            height={308}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Pra equipar uma isca basta clicar na mesma com o botão direito do
          mouse e depois clicar com o esquerdo na vara de pesca, para deseguipar
          a isca a mesma coisa, click na isca e novamente na vara, assim retira
          a isca antiga. No NPC existem varias iscas, cada uma com o seu level
          de uso, abaixo segue uma tabela:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 15 de Pesca</strong>: Algas Marinhas. Chance:
            Tentacool, Staryu, Krabby, Shellder.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 30 de Pesca</strong>: Algas Marinhas Nutrida. Chance:
            Poliwhirl, Seaking, Kingler.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 45 de Pesca</strong>: Camarões. Chance: Seel, Seadra,
            Poliwhirl, Seaking.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 60 de Pesca</strong>: Bife. Chance: Starmie, Kingler,
            Dewgong.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 80 de Pesca</strong>: Bife Grande. Chance: Gyarados,
            Tentacruel, Dragonair, Mantine.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 100 de Pesca</strong>: Sardinha. Chance: Staryu,
            Shellder, Seel.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 120 de Pesca</strong>: Misty's Special Lure. Chance:
            Dratini, Dragonair, Dragonite.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 140 de Pesca</strong>: Sardinha Temperada. Chance:
            Dragonite, Gyarados, Tentacruel, Poliwrath.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Nivel 160 de Pesca</strong>: Atração Sonora 50%. Chance:
            Blastoise, Omanyte, Kabuto, Vaporeon, Wartortle.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 pb-10 py-1">
            <strong>Nivel 180 de Pesca</strong>: Atração Sonora 100%. Chance:
            Lapras, Omastar, Kabutops, Gyarados, Dragonite.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WikiFishing;
