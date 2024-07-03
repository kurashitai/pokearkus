/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiHelds = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Helds e Device
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          O sistema de Helds é uma funcionalidade essencial para ajudar os
          jogadores a se aventurarem no mundo do Poke Arkus. Existem dois tipos
          principais de Helds: o X e o Y. Cada Pokémon pode utilizar um de cada
          tipo, totalizando dois Helds. No entanto, há um item no jogo chamado
          Device, que permite ao treinador equipar um Held no Device e, em
          seguida, adicionar o Device ao Pokémon, elevando o total para três
          Helds, desde que não sejam repetidos.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Os Helds são classificados por tipo, slot e tier. Os tiers variam de 1
          a 7 (com possibilidades de tiers superiores no futuro). Os slots são X
          e Y, e os tipos são os seguintes:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>X</strong>: EXP, Poison, Hellfire, Elemental, Rage, Harden,
            Agility, Block, Return, Strafe, Boost, Defense, Vitality, Attack,
            Critical, Cooldown, Lucky, Accuracy, Haste.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Y</strong>: Wing, Regeneration, Critical Damage, Cure.
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Dentre esses Helds, os mais utilizados incluem:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Lucky</strong>: Aumenta a chance de drop em até 2x,
            geralmente utilizado no primeiro Device.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Critical</strong>: Oferece até 24% de chance de o Pokémon
            causar um acerto crítico.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Attack</strong>: Aumenta o ataque em até 28%.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Cooldown</strong>: Reduz o tempo de recarga das habilidades
            do Pokémon em até 50%, normalmente utilizado em Tanks.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Wing</strong>: Aumenta a velocidade de voo do Pokémon em até
            700.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Cure</strong>: Essencial, pois oferece uma chance de liberar
            o Pokémon de todos os tipos de debuff, chegando a 100% no tier 7.
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Os modos de obtenção de Helds em Poke Arkus são variados e oferecem
          diferentes desafios e oportunidades para os jogadores. Aqui estão as
          principais formas de adquiri-los:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Troca através de Tokens no NPC Silas</strong>: Localizado no
            segundo andar do TC, na imagem abaixo está sendo mostrado os valores
            para a troca.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tasks da seção "Uma pequena busca por Held Itens"</strong>:
            No level 280 desbloqueia essa seção de tasks, ela tem como
            recompensa uma Held Box.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Held Box</strong>: Disponível em quests e no Goal,
            adquirível através de gastos em diamantes.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Quests</strong>: Completar missões específicas pode
            recompensar o jogador com Helds.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Compra de outros jogadores</strong>: Helds podem ser
            comprados diretamente de outros jogadores.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Fusão de Helds</strong>: Pode ser feita em Phenac, ao lado
            do Market. A fusão requer três Helds do mesmo tier e uma quantia em
            dinheiro baseada no tier. Em troca, você receberá um Held aleatório
            de tier superior, exceto quando fundindo três Helds de tier 7, que
            resultam em outro Held aleatório de tier 7.
          </li>
        </ul>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/Tokens.png"
            alt="Tokens"
            width={419}
            height={208}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Valores para Fusão de Helds, lembrando que esses valores são os
          valores INTEIROS, caso você possua VIP PLUS o valor será a METADE
          disso:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tier 1 para 2</strong>: 60k
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tier 2 para 3</strong>: 150k
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tier 3 para 4</strong>: 300k
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tier 4 para 5</strong>: 1kk
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tier 5 para 6</strong>: 2kk
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Tier 6 para 7 e 7 para 7</strong>: 4.5kk
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Quanto ao Device mencionado anteriormente, é possível obter até três
          Devices por conta. Aqui estão as maneiras de adquiri-los:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Primeiro Device</strong>: Pode ser obtido completando a
            quest do NPC Jayce, localizada ao norte de Phenac. Basta cumprir os
            requisitos e, ao final da quest, reivindicar seu Device junto com
            outros itens.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Segundo Device</strong>: Disponível para compra no Shop por
            100 diamantes.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Terceiro Device</strong>: Pode ser obtido no Shop de
            Dungeons. No entanto, este terceiro Device não está disponível no
            momento.
          </li>
        </ul>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Esses Devices são essenciais para maximizar o potencial dos seus
          Pokémon, permitindo a utilização de até três Helds diferentes e,
          assim, aprimorando suas estratégias e habilidades no jogo. Lembrando
          que todos esses devices são itens ÚNICOS, ou seja, não podem ser
          negociados.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2 pb-10">
          Para utilizar o Device é bem simples: Primeiro você coloca o Held que
          deseja no Device, nesse exemplo eu usarei o Held X-Critical 7 no
          device, depois você coloca o pokemon que você quer colocar o device no
          SEGUNDO slot da sua bag, lembrando que o Pokemon não pode ter um Held
          Attack, vou usar o exemplo de um Caterpie com X-Critical 7 e Y-Cure 7.
          Com o Device no Primeiro Slot e o Caterpie no Segundo Slot, você vai
          dar Use no Device e vai usar ele no Caterpie, pronto! Agora você tem
          um Caterpie com X-Critical 7, Y-Cure 7 e Device com X-Attack 7,
          totalizando 3 helds. Para remover também é bem simples, só colocar o
          Caterpie no Slot principal de pokemon e digitar !device, pronto, o
          Device foi removido e pode ser utilizado em outro pokemon.
        </p>
      </div>
    </div>
  );
};

export default WikiHelds;
