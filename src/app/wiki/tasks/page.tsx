/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiTasks = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Task System
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          O sistema de Tasks no Poke Arkus foi desenvolvido para acompanhar o
          progresso do jogador, mantendo-se sempre relevante, independentemente
          da etapa do jogo em que o jogador se encontra. Esse sistema é baseado
          no conceito "Kill to Complete", onde o jogador precisa derrotar o
          Pokémon indicado na Task que ele solicitou, na quantidade requerida.
          Ao completar a Task, o jogador recebe a recompensa exibida na parte
          inferior da Task.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Nas primeiras três Tasks completadas do dia, o jogador recebe 20 vezes
          a Experiência que a Task proporciona, graças ao sistema{" "}
          <strong>Speedly Up</strong>.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          A partir do nível 475, além da recompensa padrão, as Tasks também
          oferecem Proficiência. Esse sistema possui alguns pontos de ruptura
          que concedem recompensas adicionais:
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>100 Pontos</strong>: Libera os Desafios de{" "}
            <a href="/wiki/paradoxo" className="text-blue-600 underline">
              Paradoxo.
            </a>
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>250 Pontos</strong>: Libera o Task Shop.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>500 Pontos</strong>: Ganha 1 Esmeralda e 1 Black Star a cada
            Task completa (somente nas Tasks que possuem Proficiência).
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>750 Pontos</strong>: Dobra a Experiência recebida em todas
            as Tasks e adiciona 1 Esmeralda e 1 Black Star a cada Task completa
            (soma com os valores anteriores).
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>1000 Pontos</strong>: Adiciona 2 Esmeraldas e 2 Black Stars
            a cada Task completa (somente nas Tasks que possuem Proficiência).
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>2000 Pontos</strong>: Recebe o título de Conquistador, uma
            box de Tier Platinum aleatória (Pokémon do Task Shop).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WikiTasks;
