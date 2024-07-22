/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiOutland = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-black to-zinc-800 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Outlands
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          Outlands são locais de caça onde você pode obter algumas recompensas
          de modo um pouco mais rápida, no Poke Arkus contamos com 3 outlands, a
          primeira sendo a outland tradicional, que possui um drop maior de
          Stones Elementais para evolução dos seus Pokemons, a Outland 2 que tem
          um foco maior no drop de Essências e Fragmentos elementais e a Outland
          3, que tem o foco em conseguir Tokens, mais sobre os Tokens você pode
          descobrir na seção{" "}
          <a href="/wiki/helds" className="text-blue-600 underline">
            Helds e Devices.
          </a>
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          <strong>Outland 1</strong>:dentro do Tc no segundo andar. Level
          necessário: 100.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Onde se localiza o TC "Trade Center"? No caso à baixo temos o Tc na
          cidade de Saffron, facilmente acessível.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/tc.png"
            alt="TC"
            width={419}
            height={208}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Dentro do Tc, suba as escadas passando pelo local das{" "}
          <a href="/wiki/dungeons" className="text-blue-600 underline">
            Dungeons
          </a>{" "}
          do jogo. No segundo Andar Fale com o Npc Outlander e ele te dirá que a
          outland-1 só é acessivel para players com level superior a 100 e de
          dara 3 opções de locais de spawn (não se preocupe pois no próprio
          local de spawn você pode se realocar falando o mesmo Npc).
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          A Outland-1 é um ótimo local pra farm de pedras evolutivas em geral e
          devoted tokens, Material utilizado para a troca de Helds de Baixo
          Nivel. (Tiers: 1 a 3)
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          <strong>Outland 2</strong>: Phenac, atrás do Centro Pokemon. Level
          necessário: 275.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para ir a essa outland é simples, basta ir para Phenac pelo comando
          (!tp Phenac) ou clicando no map (Ctrl+Tab) onde esta escrito Phenac
          com um pokemon de teleport pra fora.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          O NPC Railander fica atras do centro pokemon(Cp) de Phenac, subindo a
          escada que tem logo acima, só falar com ele e o npc te dará 2 opções
          de entrada, uma que cobra 2kk e a necessidade de level 275, a outra
          com Mistery Pass (Medalhão dado na Quest Mistery, que anula a cobrança
          de 2kk).
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Aqui temos um farm muito bom de essências e fragmentos dos clans, além
          de vários tokens de Helds.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          <strong>Outland 3</strong>: Também em Phenac, pra baixo do Centro
          Pokemon, você vai até o local onde fica uma torre gigante. Level
          necessário: 350.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Por útimo mas não menos importante, a Outland 3, considerado o melhor
          local para subir e nível entre o 350 e o 475, também é lar do melhor
          farm de Tokens no Poke Arkus, basta você se dirigir até a torre na
          saída sul de Phenac e falar com o NPC Alucard, caso você possua
          Mistery Pass a sua entrada também é grátis aqui, caso não, será
          cobrado uma taxa de 5kk que te dará disponibilidade de entrar quantas
          vezes quiser até o próximo Server Save (6h da manhã).
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            Devoted Token: Material utilizado para a trocar de Helds de Baixo
            Nivel. (Tiers: 1 a 3)
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            Might Tokens: Material utilizado para a trocar de Helds de Alto
            Nivel. (Tier: 3 a 5)
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            Honored Tokens: Material utilizado para a trocar de Helds de Alto
            Nivel. (Tier: 4 a 6)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WikiOutland;
