/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiFaq = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Perguntas frequentes (FAQ)
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          Separamos algumas perguntas bastante frequentes no Poke Arkus, de
          acordo com a necessidade eu estarei colocando mais e mais perguntas
          com o tempo.
        </p>
        <ul>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>Onde eu posso vender minhas stones?</strong> Você pode
            vender suas stones no NPC Rocky Racoon, localizado em Pewter, basta
            seguir reto diagonal direita cima e você chegará até a casa dele.
          </li>
          <li className=" xl:px-10 md:px-4 sm:px-2 py-1">
            <strong>
              Como eu consigo esse tão falado pokemon de tier platina? Vão ter
              mais no futuro?
            </strong>{" "}
            Para saber mais sobre os pokemons de tier Platina, tenho uma
            explicão rápida dos dois modos de conseguir eles atualmente no jogo,
            um que fica na página{" "}
            <a href="/wiki/ud" className="text-blue-600 underline">
              Ultra Dimension
            </a>{" "}
            e outro na página{" "}
            <a href="/wiki/paradoxo" className="text-blue-600 underline">
              Paradoxo
            </a>
            . E sim, virão mais no futuro.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WikiFaq;
