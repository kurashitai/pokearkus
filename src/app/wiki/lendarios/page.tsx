/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiLendas = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Lendários
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          No universo de Poke Arkus, os Pokémon lendários representam um desafio
          diário emocionante para os treinadores. Ao derrotar esses majestosos
          Pokémon pela primeira vez no dia, os jogadores são recompensados com
          Star Medals e KKs, proporcionais ao seu nível, iniciando no nível 250,
          que é o mínimo para começar a ganhar recompensa, e com a recompensa
          máxima atingindo seu ápice no nível 450. A partir desse nível, os
          jogadores também começam a receber Galaxy Dust, um recurso valioso
          para invocar os{" "}
          <a href="/wiki/paradoxo" className="text-blue-600 underline">
            lendários Paradoxo.
          </a>
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Atualmente, os lendários disponíveis no Poke Arkus incluem as icônicas
          aves lendárias Articuno, Zapdos e Moltres, bem como os poderosos cães
          lendários Entei, Raikou e Suicune. Todos esses lendários estão
          marcados no mapa e podem ser localizados no continente de Kanto ao
          pressionar Ctrl+Tab. Ao chegar no local é só andar em direção à
          estátua do lendário e você entrará no seu ninho. Se prepare, pois os
          lendários são desafios bem difíceis, aconselho que você consiga um
          grupo antes de enfrentá-los. Vale lembrar que as recompensas são
          concedidas apenas na primeira derrota de cada lendário por dia, sendo
          que as kills são resetadas no Server Save das 6h da manhã.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          As Star Medals, dropadas pelos lendários, podem ter sua quantidade
          significativamente aumentada com o uso do Star Boost. Essas medalhas
          são um recurso versátil no jogo, com utilidades variadas,
          especialmente no{" "}
          <a href="/wiki/starshop" className="text-blue-600 underline">
            Star Shop
          </a>
          , onde podem ser trocadas por diversos itens valiosos.
        </p>
      </div>
    </div>
  );
};

export default WikiLendas;
