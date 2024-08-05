/* eslint-disable react/no-unescaped-entities */

"use client";
import React, { useState } from "react";
import { WikiLeft } from "@/components/wikileft";
import Image from "next/image";
import Accordion from "@/components/accordion";

const WikiClans = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-black to-zinc-800 p-5 xl:pt-16">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white text-white text-white py-10 shadow-sm">
        Sistema de clãs
      </h1>
      <div className="bg-white border border-gray-300 rounded-lg text-justify w-[100%] max-w-full sm:w-[60%] mx-auto p-4">
        <p className=" xl:px-10 md:px-4 sm:px-2 pt-10 py-2">
          O sistema de clãs passou por uma completa reformulação, trazendo uma
          nova dinâmica e benefícios diversificados para os jogadores.
          Anteriormente, os bônus oferecidos eram fixos: 10% de dano adicional e
          20% de defesa aumentada. Agora, esses bônus são ajustados de acordo
          com o rank do jogador dentro do clã, criando uma experiência mais
          personalizada e estratégica.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Os jogadores no rank 1 desfrutam de um modesto aumento de 4% tanto no
          dano quanto na defesa. À medida que avançam nos ranks, esses bônus se
          tornam progressivamente mais significativos, culminando em um
          impressionante aumento de 20% no rank 5. Este último nível também
          oferece a exclusividade de um Awaken único de clã, além de trajes
          especiais que refletem o status elevado do jogador.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          O sistema de outfits para os clãs também foi aprimorado, adicionando
          um elemento visual de prestígio. Existem dois trajes distintos para
          cada clã: um é concedido aos jogadores que alcançam o rank 3, e o
          outro é uma recompensa para aqueles que atingem o rank 5. Esses
          outfits não são meros adornos, mas símbolos de dedicação e progresso
          dentro do clã.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2">
          Para ascender nos ranks, os jogadores precisam completar uma série de
          tarefas específicas a cada nível. A flexibilidade do novo sistema
          permite que essas tarefas sejam iniciadas em qualquer nível de
          experiência do jogador e não há um prazo estipulado para a sua
          conclusão, proporcionando uma experiência de jogo mais livre e
          adaptável ao ritmo individual de cada membro do clã.
        </p>
        <p className=" xl:px-10 md:px-4 sm:px-2 py-2 pb-10">
          Esta reformulação promete enriquecer a interação entre os membros do
          clã, incentivando a colaboração e a busca constante por melhorias. A
          jornada dentro do clã se tornou não apenas uma questão de honra, mas
          uma emocionante aventura repleta de desafios e recompensas.
        </p>
        <Accordion
          title="Volcanic"
          imageSrc="/clan/volcanicb.png"
          className="bg-red-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              O clã Volcanic é um clã especializado unicamente no elemento fogo,
              mas não pense que você pode brincar com ele só porque ele se
              especializou em um único elemento, eles seguem a doutrina de
              "Brincou com fogo, morre queimado". Para se juntar ao clã
              Volcanic, você precisa seguir pra direita, pelo caminho com um
              tapete vermelho, lá você vai encontrar o mestre do clã, com o nome
              Volcanic Mastery, e então iniciar suas Tasks para progredir no
              ranking e chegar ao topo do clã Volcanic. São ao todo 5 rankings,
              você começa no ranking 1 e tem que fazer ao todo 25 tasks para
              chegar no ranking mais alto!
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-red-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Pot of lava x100</li>
                    <li>Compressed fire x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Fire stone x20</li>
                    <li>Volcanic essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Fox tail x30</li>
                    <li>Fire tail x30</li>
                    <li>Fur x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Magmar</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-red-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Volcanic essence x300</li>
                    <li>Volcanic fragment x30</li>
                    <li>Fire stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Typhlosion</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Houndoom</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Fire stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Camerupt</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-red-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny volcanic stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Magmar</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Magmar</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Typhlosion</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Magmortar</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Blaze Knot x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-red-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Compressed fire x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Arcanine</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Arcanine</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Chandelure</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Heato) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Infernape</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Chandelure</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Ignis) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Infernape</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Monkey King Armor x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Naturia"
          imageSrc="/clan/naturiab.png"
          className="bg-green-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              O Clã Naturia é um clã especializado na natureza, tendo como
              elementos: Planta e Inseto. Eles tem uma grande paixão pela
              natureza e tudo que ela fornece.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-green-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Pot of moss bug x100</li>
                    <li>Pile of seeds x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Leaf stone x20</li>
                    <li>Nature essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Bag of pollen x30</li>
                    <li>Bug antenna x30</li>
                    <li>Mushrooms x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Victreebel</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-green-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Nature essence x300</li>
                    <li>Naturia fragment x30</li>
                    <li>Leaf stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Meganium</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Ariados</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Leaf stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Sceptile</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-green-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Naturia Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Parasect</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Parasect</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Shiftry</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Tangrowth</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Giant Vines x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-green-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Pile of seeds x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Belossom</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Belossom</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Maractus</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Nature) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Torterra</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Maractus</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Arbor) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Torterra</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Mandragora x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Seavell"
          imageSrc="/clan/seavellb.png"
          className="bg-cyan-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membros deste clã são conhecidos por seu conhecimento do mar e
              das criaturas que vivem lá. Eles são capazes de lidar com os
              pokemons mais poderosos do tipo Água e Gelo.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-cyan-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Water Pendant x100</li>
                    <li> Solid Water Gem x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Water Stone x20</li>
                    <li> Seavell Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Squirtle Hull x30</li>
                    <li> Ruby x30</li>
                    <li> Ice Orb x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Gyarados</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-cyan-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Seavell Essence x300</li>
                    <li> Seavell Fragment x30</li>
                    <li> Water Stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Feraligatr</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Tentacruel</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Water Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Swampert</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-cyan-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Shiny Seavell Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Jynx</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Jynx</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Blastoise</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Milotic</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Prism Scale x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-cyan-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Solid Water Gem x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Pelipper</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Pelipper</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Cryogonal</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Cristal de Sacrificio (Aqua) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Empoleon</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Cryogonal</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Reliquia de Invocação (Mare) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Empoleon</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li> Emperor Trindent x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Wingeon"
          imageSrc="/clan/wingeonb.png"
          className="bg-gray-300 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membros do clã Wingeon são muito isolados das cidades. Eles
              preferem viver entre os pokemons do tipo Voador e Dragão nas
              montanhas mais altas, ao ar livre.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-gray-300 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Colored Feather x100</li>
                    <li>Compressed Straw x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Feather Stone x20</li>
                    <li>Wingeon Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Colored Feather x30</li>
                    <li>Farfetchd Stick x30</li>
                    <li>Bird Beak x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Dragonite</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-gray-300 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Wingeon Essence x300</li>
                    <li>Wingeon Fragment x30</li>
                    <li>Feather Stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Noctowl</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Togetic</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Feather Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Swellow</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-gray-300 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Wingeon Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Farfetchd</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Farfetchd</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Altaria</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Salamence</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Bloody Wing x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-gray-300 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Compressed Straws x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Swellow</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Swellow</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Haxorus</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Draka) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Staraptor</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Haxorus</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Ventus) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Staraptor</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Legendary Plume x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Raibolt"
          imageSrc="/clan/raiboltb.png"
          className="bg-yellow-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membros do clã Raibolt são muito inteligentes. Eles sabem de
              tudo o que é necessário para lidar com seus pokemons do tipo
              Elétrico para derrotar seus inimigos em batalha com facilidade,
              eletrizante, não é mesmo?
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-yellow-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Eletric Box x100</li>
                    <li>Eletric Spheres x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Thunder Stone x20</li>
                    <li>Raibolt Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Eletric Rat Tail x30</li>
                    <li>Eletric Tail x30</li>
                    <li>Magnet x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Jolteon</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-yellow-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Raibolt Essence x300</li>
                    <li>Raibolt Fragment x30</li>
                    <li>Thunder Stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Ampharos</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Electrode</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Thunder Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Ampharos</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-yellow-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Raibolt Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Raichu</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Raichu</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Manectric</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Electivire</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Eletric Paw x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-yellow-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Eletric Spheres x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Pachirisu</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Pachirisu</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Eelektross</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Electric) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Luxray</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Eelektross</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Radium) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Luxray</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Black Star x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Malefic"
          imageSrc="/clan/maleficb.png"
          className="bg-purple-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membrls do clã Malefic são conhecidos por serem misteriosos.
              Eles nunca conversam sobre sua vida pessoal com estranhos e
              controlam os pokemons do tipo Fastasma, Dark e Veneno,
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-purple-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Traces of Ghost x100</li>
                    <li>Compressed Ghost Essence x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Darkness Stone x20</li>
                    <li>Malefic Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Traces of Ghost x30</li>
                    <li>Venom Flute x30</li>
                    <li>Future Orb x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Gengar</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-purple-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Malefic Essence x300</li>
                    <li>Malefic Fragment x30</li>
                    <li>Darkness Stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Umbreon</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Gengar</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Darkness Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Absol</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-purple-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Malefic Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Misdreavus</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Misdreavus</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Beedrill</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Dusknoir</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Ghost Smile x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-purple-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Compressed Ghost Essence x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Spiritomb</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Shiny Spiritomb</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Cofagrigus</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Mortis) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Drapions</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Entregar um Cofagrigus</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Timor) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Drapion</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Scorpion Paw x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Orebound"
          imageSrc="/clan/oreboundb.png"
          className="bg-black p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membros do clã Orebound dedicam suas vidas para lidar com os
              mais fortes pokemons do tipo Terra e Pedra para derrotar qualquer
              oponente que encontrarem.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-black p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Onix Tail x100</li>
                    <li>Big Stones x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Rock Stone x20</li>
                    <li>Orebound Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Stone Orb x30</li>
                    <li>Onix Tail x30</li>
                    <li>Horns x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Onix</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-black p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Orebound Essence x300</li>
                    <li>Orebound Fragment x30</li>
                    <li>Rock Stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Donphan</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Tyranitar</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Rock Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Onix</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-black p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Orebound Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Sandslash</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Sandslash</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Rhydon</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Rhyperior</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Rock Paw x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-black p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Big Stone x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Flygon</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Flygon</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Seismitoad</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Sando) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Hippowdon</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Seismitoad</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Saxum) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Hippowdon</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Hippo Hull x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Psycraft"
          imageSrc="/clan/psycraftb.png"
          className="bg-pink-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membros deste clã são enigmáticos. Dizem que eles podem
              controlar a mente de Pokemons do tipo Psiquico e tem um forte
              vínculo com pokemons do tipo Fada, que são muito afetuosos com
              seus mestres.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-pink-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Psychic Spoon x100</li>
                    <li>Enchanted Gem x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Enigma Stone x20</li>
                    <li>Psycraft Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Psychic Spoon x30</li>
                    <li>Slow Tail x30</li>
                    <li>Mimic Cloth x30</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Alakazam</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-pink-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Psycraft Essence x300</li>
                    <li>Psycraft Fragment x30</li>
                    <li>Enigma Stone x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Espeon</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Girafarig</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Enigma Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Espeon</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-pink-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Psycraft Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Mr Mime</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Mr Mime</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Wobbuffet</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Togekiss</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Magestic Plume x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-pink-400 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Enchanted Gem x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Grumpig</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Grumpig</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Whimsicott</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Paixon) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Gallade</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Whimsicott</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Amare) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Gallade</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Battle Armor x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Gardestrike"
          imageSrc="/clan/gardestrikeb.png"
          className=" bg-amber-900 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os membros do clã Gardetrike são fortes. Sua força foi conquistada
              após um longo treinamento com pokemons do tipo Normal e Lutador.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-amber-900 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Belt of Champion x100</li>
                    <li>Injection x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Punch Stone x20</li>
                    <li>Gardestrike Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Belt of Champion x45</li>
                    <li>Luck Medallion x45</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Machamp</p>

                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Gardestrike Essence x300</li>
                    <li>Gardestrike Fragment x30</li>
                    <li>Punch Stone x75</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-amber-900 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Ursaring</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Machamp</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Punch Stone x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Primeape</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-amber-900 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Gardestrike Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Machamp</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Shiny Machamp</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Heracross</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Slaking</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Monkey Hulls x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-amber-900 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Injection x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Hariyama</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Shiny Hariyama</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Mienshao</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Kicker) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Toxicroak</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Mienshao</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Pugna) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Toxicroak</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Toxic Spikes x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
        <Accordion
          title="Ironhard"
          imageSrc="/clan/ironhardb.png"
          className="bg-gray-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
        >
          <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Os Pokemons do clã Ironhard são conhecidos por sua força bruta,
              resistência e alcance, dominando o elemento Metal. Eles passaram
              anos aperfeiçoando suas técnicas para quebrar todos os seus
              limites.
            </p>
            <p className=" xl:px-10 md:px-4 sm:px-2 py-2 flex">
              Caso você deseje se aventurar neste clã e desbloquear todo seu
              potencial, logo abaixo está preparado uma lista contendo tudo que
              você vai precisar em cada ranking, em cada task, para assim você
              poder se preparar para o que está por vir! Boa sorte, treinador.
            </p>
            <Accordion
              title="Rank 1"
              className="bg-gray-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 1</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Magnet x100</li>
                    <li>Compressed Steel x25</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 2</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Metal Coat x20</li>
                    <li>Ironhard Essence x50</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 3</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Magnet x45</li>
                    <li>Eletric Spheres x45</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 4</h3>
                  <p className="ml-4">Entregar um Skarmory</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 2"
              className="bg-gray-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 5</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Ironhard Essence x300</li>
                    <li>Ironhard Fragments x30</li>
                    <li>Metal Coat x75</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 6</h3>
                  <p className="ml-4">Catch Skarmory</p>

                  <h3 className="font-bold text-gray-700">Task 7</h3>
                  <p className="ml-4">Defeat 500 Scizor</p>

                  <h3 className="font-bold text-gray-700">Task 8</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Metal Coat x250</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 9</h3>
                  <p className="ml-4">Defeat 500 Steelix</p>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 3"
              className="bg-gray-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 10</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Shiny Ironhard Stone x15</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 11</h3>
                  <p className="ml-4">Catch Shiny Steelix</p>

                  <h3 className="font-bold text-gray-700">Task 12</h3>
                  <p className="ml-4">Entregar um Shiny Steelix</p>

                  <h3 className="font-bold text-gray-700">Task 13</h3>
                  <p className="ml-4">Defeat 500 Shiny Magneton</p>

                  <h3 className="font-bold text-gray-700">Task 14</h3>
                  <p className="ml-4">Defeat 500 Metagross</p>

                  <h3 className="font-bold text-gray-700">Task 15</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Iron Orb x5</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <Accordion
              title="Rank 4"
              className="bg-gray-600 p-1 rounded-lg xl:mx-9 md:mx-3 sm:mx-1 my-2 text-white font-bold"
            >
              <div className="bg-white border border-gray-300 rounded-lg text-justify text-black font-normal w-[100%] max-w-full sm:w-[100%] mx-auto p-2">
                <ul className="list-disc list-inside">
                  <h3 className="font-bold text-gray-700">Task 16</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Compressed Steel x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 17</h3>
                  <p className="ml-4">Catch Shiny Skarmory</p>

                  <h3 className="font-bold text-gray-700">Task 18</h3>
                  <p className="ml-4">Entregar um Shiny Skarmory</p>

                  <h3 className="font-bold text-gray-700">Task 19</h3>
                  <p className="ml-4">Defeat 8000 Excadrill</p>

                  <h3 className="font-bold text-gray-700">Task 20</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Cristal de Sacrificio (Metallum) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 21</h3>
                  <p className="ml-4">Defeat 2000 Bronzong</p>

                  <h3 className="font-bold text-gray-700">Task 22</h3>
                  <p className="ml-4">Catch Excadrill</p>

                  <h3 className="font-bold text-gray-700">Task 23</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Reliquia de Invocação (Ferrum) x1000</li>
                  </ul>

                  <h3 className="font-bold text-gray-700">Task 24</h3>
                  <p className="ml-4">Defeat 500 Shiny Bronzong</p>

                  <h3 className="font-bold text-gray-700">Task 25</h3>
                  <ul className="ml-4 list-disc list-inside">
                    <li>Metal Mask x1</li>
                  </ul>
                </ul>
              </div>
            </Accordion>

            <p className="text-center text-xl font-bold my-4">
              Parabéns, você chegou ao Rank 5!
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default WikiClans;
