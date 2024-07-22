/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiMarket = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-black to-zinc-800 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Market e Poke Bank
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          No servidor do Poke Arkus, oferecemos o sistema de Market e Poke Bank.
          O Poke Bank, como o próprio nome sugere, é um banco onde você pode
          guardar todo o seu suado dinheiro e Diamantes. A maioria dos sistemas
          do jogo realiza cobranças diretamente do seu banco, sem a necessidade
          de retirar o valor para fazer suas compras. Contudo, em alguns
          momentos, você precisará ter o valor em mãos. O Poke Bank é
          representado por um escudo dourado na barra superior do Poke Arkus e
          possui um sistema de histórico de recebimentos e transferências. É
          simples, intuitivo e foi projetado para auxiliar o jogador.
        </p>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          O Market é o lugar onde os jogadores podem vender alguns de seus itens
          ou comprar itens de outros jogadores. Embora seja mais limitado que a
          boa e antiga negociação boca-a-boca, o Market oferece um meio de
          negociar sem precisar ficar enviando mensagens no Trade Channel. Para
          utilizá-lo, basta ir até o Mark da sua cidade e clicar no computador
          disponível. Se tiver dúvidas sobre o uso correto, leia a Tooltip
          localizada acima do Market, simbolizada pelo "i" azul.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/market.png"
            alt="TC"
            width={519}
            height={408}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Comprar no Market é muito fácil: tenha o dinheiro no banco, localize o
          item desejado, selecione para comprar e pronto! O item será enviado
          para o depot ao lado do Market e o valor será debitado diretamente do
          seu Bank. Lembre-se de que há a opção de compra por KKs e por
          Diamantes, então tome cuidado ao escolher.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/marketbuy.gif"
            alt="TC"
            width={519}
            height={408}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className="xl:px-10 md:px-4 sm:px-2 py-2">
          Para vender, o processo é um pouco diferente, mas não muito difícil.
          Vá até a aba de venda na parte superior, clique em Vender Item,
          selecione o item na sua bag, defina a quantidade (caso tenha mais de
          um item) e coloque o valor em Diamantes OU KKs. Note que o valor é{" "}
          <strong>UNITÁRIO</strong> e, se você colocar um valor para Diamantes e
          outro para KKs, o comprador <strong>escolherá</strong> qual dos dois
          prefere pagar. Você <strong>não</strong> cobrará os dois,{" "}
          <strong>apenas um</strong>.
        </p>
        <div className="flex justify-center items-center w-full h-full pb-10 my-4">
          <Image
            src="/wiki/marketsell.gif"
            alt="TC"
            width={519}
            height={408}
            className="max-w-xs rounded-xl pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default WikiMarket;
