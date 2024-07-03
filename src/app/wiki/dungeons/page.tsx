/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiDungeon = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="relative w-full bg-gray-400 p-5">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Dungeons
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className="pt-10 py-2 xl: xl:px-10 md:px-4 sm:px-2">
          As dungeons no Poke Arkus foram completamente reformuladas, trazendo
          um visual renovado e desafios ainda mais emocionantes. Prepare-se para
          testar seus limites e conquistar recompensas incríveis, proporcionais
          ao nível de dificuldade escolhido, junto com seus amigos.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Para acessar o novo painel de dungeons, dirija-se ao Centro Pokémon e
          vá até o TC, situado na zona roxa com cristais. Clique no botão no
          centro superior da tela, escolha a dificuldade e a sala de elemento
          desejada. Lembre-se de que você precisa ter pelo menos uma chave do
          nível correspondente à dungeon que deseja enfrentar. As chaves podem
          ser de Bronze, Prata, Ouro ou Ruby. Veja na imagem abaixo onde fica o
          sistema de Dungeons, basta clicar onde há um círculo vermelho para
          acessar.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/dungeonzone.png"
            alt="Ddungeons"
            width={700}
            height={400}
            className="w-full max-w-xs pt-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
            onClick={toggleZoom}
          />
          {isZoomed && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={toggleZoom}
            >
              <Image
                src="/wiki/dungeonzone.png"
                alt="Dungeons"
                width={1100}
                height={600}
                className="max-w-full max-h-full"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/keys.png"
            alt="Keys"
            width={400}
            height={200}
            className="max-w-xs pb-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Ao abrir o sistema de Dungeons, você verá uma tela onde poderá
          conferir os Pokémon presentes na dungeon, a experiência ganha ao
          completá-la e os possíveis itens que podem ser obtidos. Ao clicar no
          troféu, você pode ver o recorde de tempo para a dungeon em questão. Se
          você é competitivo, desafie-se a alcançar o pódio!
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/dungeons.png"
            alt="Dungeons"
            width={700}
            height={400}
            className="w-full max-w-xs py-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Todas as dificuldades tem várias opções de elemento para você
          desafiar, alterando as recompensas também baseada no elemento da
          Dungeon que você for tentar, lá você pode encontrar Awakens, Runas,
          boost stones, pontos pra trocar no Dungeon Shop que fica na NPC Lenya
          logo ao lado da zona roxa, entre outros muitos itens, lembre sempre de
          olhar as recompensas que da naquele elemento antes de começar.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Não sabe quais Pokémon usar? Não tem problema! Clique no "i" azul no
          lado direito do sistema de dungeons para ver algumas recomendações de
          times e itens. No entanto, não se limite a estas sugestões;
          experimente novas composições e use seu estilo de jogo. Acreditamos no
          seu potencial e incentivamos sua criatividade!
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          <strong>Para completar uma dungeon com sucesso é bem simples</strong>:
          primeiramente esteja ciente que cada dungeon e cada dificuldade tem um
          Tempo pra ser completada, la dentro o uso de potions e Revives é
          limitado também, pra saber a quantidade de potions, revives e o tempo
          limite tudo que você precisa fazer é clicar no "i" azul que tem no
          canto direito da interface da Dungeon, lá no mesmo lugar que mostra os
          pokemons recomendados e os pokemons capturáveis ao final da dungeon.
        </p>
        <div className="flex justify-center items-center w-full h-full my-4">
          <Image
            src="/wiki/dungeons.png"
            alt="Dungeons"
            width={700}
            height={400}
            className="w-full max-w-xs py-5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto mx-auto cursor-pointer"
          />
        </div>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Tendo essas informações em mãos, está na hora de juntar sua equipe e
          entrar na Dungeon, usando o exemplo a Dungeon do Beartic na imagem a
          cima, vemos que ela tem limite de 30 minutos, 30 revives e 50 potions,
          como mostrado nas marcações vermelhas. Ao entrar na masmorra aparece o
          Timer e a Porcentagem % em algum lugar na sua tela, você pode arrastar
          ele pra colocar onde quiser e se organizar melhor, agora tudo que você
          precisa fazer é simplesmente derrotar TODOS os pokemons, ao chegar em
          50% a porcentagem o Chefe da sala vai aparecer, que no caso da dungeon
          que estamos usando de exemplo é o próprio Beartic, tome cuidado, os
          bosses são bem fortes e irão te matar sem o menor esforço se você
          vacilar.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Ao derrotar o chefe da sala, você será teletransportado pra uma sala,
          cercado por 6 pilares onde estão os pokemons pra você tentar capturar,
          ainda usando o exemplo da dungeon do Beartic seria o Cubchoo e o
          próprio Beartic, jogue as bolas neles e se dirija ao norte (cima) da
          sala, lá terá um baú, ao abrir ele você receberá as recompensas da
          sala e será teleportado direto pra sala das Dungeons, feito isso sua
          Dungeon está completa, só entrar novamente e repetir todo o processo.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 pb-10 py-2 italic">
          O que você está esperando? Enfrente os desafios das nossas dungeons e
          alcance o top ranking. Boa sorte e divirta-se!
        </p>
      </div>
    </div>
  );
};

export default WikiDungeon;
