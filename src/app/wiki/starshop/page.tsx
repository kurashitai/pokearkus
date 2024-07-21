/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiStar = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Star Shop, Awakens e Runas
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          O Star Shop é um sistema especial onde você pode trocar suas Star
          Medals e Ametistas por itens exclusivos, outfits, addons, runas,
          Pokémon e até mesmo os famosos Awakens. Localizado à direita do CP de
          Saffron, próximo ao Shop de Proficiência, o Star Shop oferece uma
          ampla variedade de opções para melhorar sua experiência de jogo.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          As únicas moedas aceitas no Star Shop são Star Medals, Ametistas e
          Dungeon Tokens. Com essas moedas, você pode adquirir os seguintes
          Pokémon por 1200 Star Medals e 500 Dungeon Tokens cada: Greninja,
          Delphox, Chesnaught, Aromatisse, Doublade, Pangoro, Trevenant,
          Heliolisk, Krookodile e Noivern. Além disso, seus respectivos Awakens
          estão disponíveis por 1500 Star Medals e 250 Ametistas.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Os Pokémon obtidos sem o Awaken possuem a força de Tier Prata. Ao
          aplicar o Awaken, eles aumentam sua força para Tier Ouro. Awaken é a
          forma "desperta" do Pokémon, tornando-o mais poderoso. Além do Star
          Shop, outros Pokémon com Awaken podem ser obtidos nas{" "}
          <a href="/wiki/dungeons" className="text-blue-600 underline">
            Dungeons e no Shop de Dungeon
          </a>
          , além do{" "}
          <a href="/wiki/paradoxo" className="text-blue-600 underline">
            Shop de Proficiência
          </a>
          .
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          No Star Shop, você também encontrará runas especiais, conhecidas como
          Runas do Star Shop, ao custo de 250 Star Medals e 1250 Ametistas. As
          runas disponíveis incluem:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Gaia)</strong>: Lurantis
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Hefesto)</strong>: Salazzle
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Poseidon)</strong>: Araquanid
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Zeus)</strong>: Vikavolt
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Afrodite)</strong>: Florges
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Hércules)</strong>: Kommo-o
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Ares)</strong>: Mudsdale
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Hybris)</strong> Drampa
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Sindri)</strong>: Bisharp
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Relíquia Rúnica (Deimos)</strong>: Dragapult
          </li>
        </ul>

        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          As runas são eternas, ou seja, só precisam ser compradas uma vez. Após
          a compra, basta utilizá-la para ser transportado para dentro da runa,
          onde você pode caçar o Pokémon em questão no Tier Prata ou juntar
          Fragmentos Rúnicos para invocar e tentar capturar a versão Shiny, que
          é Tier Ouro. A entrada na runa é gratuita; no entanto, se você não for
          VIP Plus, há um cooldown de 15 minutos para reentrar após sair. Com
          VIP Plus, você é imune a esse cooldown.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Mas devo lhe lembrar, Treinador, essas não são as únicas runas
          presentes no jogo, tem muito mais disponível nas{" "}
          <a href="/wiki/dungeons" className="text-blue-600 underline">
            Dungeons
          </a>
          .
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 pb-10 py-2">
          Descubra o poder dos Pokémon despertos e a magia das runas no Star
          Shop, tornando sua jornada ainda mais emocionante e recompensadora!
        </p>
      </div>
    </div>
  );
};

export default WikiStar;
