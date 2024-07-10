"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiCatch = () => {
  return (
    <div className="relative w-full bg-gray-400 p-5">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Catch System
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          Como forma de recompensar os jogadores que se dedicam às suas
          capturas, o Poke Arkus apresenta um sistema de pontos único baseado na
          raridade do Pokémon. Quanto mais difícil for a captura, maior será a
          quantidade de pontos obtida.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Ao atingir a quantidade máxima necessária de pontos para um Pokémon
          específico, a próxima Pokébola lançada garantirá a captura desse
          Pokémon, com exceção da Premier Ball, que ignora completamente o
          sistema de pontos.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para saber quantos pontos um Pokémon precisa para ser capturado, basta
          abrir o Menu do Poke Arkus, localizado no centro superior da tela, e
          clicar na Pokébola brilhante com o nome "Informações de Captura". Em
          seguida, localize o Pokémon desejado, como por exemplo o Bewear, um
          Pokémon de Runa de Dungeon. Ao passar o mouse sobre a imagem do
          Bewear, você verá a quantidade de pontos necessários para capturá-lo.
          No caso do Bewear, são necessários 100 mil pontos (100k). No entanto,
          não se preocupe, pois você não precisará derrotar 100 mil Bewear para
          isso. Ao lado do Bewear, você verá diferentes Pokébolas, algumas
          iluminadas, como a Heavy Ball, Yume Ball, Dusk Ball e Delta Ball.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          As três primeiras são chamadas de Bolas Elementais e, quando usadas em
          Pokémon do mesmo tipo, concedem 6 pontos por lançamento. A Delta Ball
          é uma Pokébola especial, pois sempre concede 6 pontos e tem o dobro de
          chance de captura, em Pokémon Shiny ou Especiais, ela concede 10
          pontos em vez de 6. No caso do Bewear, sendo um Pokémon Especial, ele
          recebe 10 pontos por Delta Ball.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Há também a Luxury Ball, que sempre concede 14 pontos e tem 3,5 vezes
          mais chance de captura, mas é mais cara que a Delta. A Premier Ball,
          como mencionado anteriormente, ignora completamente o sistema de
          captura, oferecendo 2,5 vezes mais chance de captura, mas concede 0
          pontos.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para ajudar na captura por pontos, existe o charme Catch Boost, que
          adiciona 1 ponto extra para qualquer Pokébola lançada e ainda tem uma
          pequena chance de 10% de conceder 5 pontos adicionais.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 pb-10 py-2">
          Para incentivar as capturas, existe a seção de Daily Catch, onde você
          pode escolher a dificuldade entre Beginner, Very Easy, Easy e Hard,
          aumentando progressivamente as recompensas. Você pode realizar o Daily
          Catch quantas vezes quiser por dia, mas só receberá a recompensa nas
          duas primeiras concluídas. Caso apareça um Pokémon que você não queira
          capturar, é possível resetar o Daily Catch pelo custo de 1 diamante.
          Se você for VIP, tem direito a 2 resets gratuitos por dia; se for VIP
          Plus, são 5 resets gratuitos.
        </p>
      </div>
    </div>
  );
};

export default WikiCatch;
