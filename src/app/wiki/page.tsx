"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { WikiLeft } from "@/components/wikileft";

const Wiki = () => {
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  useEffect(() => {}, []);
  return (
    <div className="relative w-full bg-gradient-to-b from-black to-zinc-800 xl:pt-16 lg:px-56">
      <WikiLeft />
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white text-white py-10 shadow-sm">
        Bem vindo à wiki do Poke Arkus
      </h1>
      <p className="text-center text-xl font-extrabold dark:text-white text-white py-3 shadow-sm">
        Aqui estão alguns de nossos guias para te ajudar nessa jornada, mais
        guias estarão sendo adicionados ao longo do tempo, caso tenha sugestões
        para a wiki, favor abrir uma sugestão no nosso
        <Link href="https://discord.gg/pokearkus" target="_blank">
          Discord
        </Link>
      </p>
      <div className="relative w-full bg-transparent">
        <div className="w-3/4 m-auto flex flex-wrap justify-center p-10">
          {systems.map((system, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <div
                onClick={() => handleClick(system.link)}
                className="cursor-pointer"
              >
                <div className="flex items-center justify-center flex-col gap-2">
                  <Image
                    className="cursor-pointer rounded-3xl"
                    src={system.image}
                    width={450}
                    height={270}
                    alt={system.alt}
                  />
                  {/* <p className="text-center uppercase text-xl font-extrabold dark:text-white text-white py-3 shadow-sm">
                    {system.title}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const systems = [
  {
    image: "/wiki/clans.png",
    alt: "clans system",
    title: "Clans",
    link: "/wiki/clans",
  },
  {
    image: "/wiki/Zonas-Dim.png",
    alt: "dungeon system",
    title: "Dungeons",
    link: "/wiki/dungeons",
  },
  {
    image: "/wiki/Boost.png",
    alt: "goal system",
    title: "Boost",
    link: "/wiki/boost",
  },
  {
    image: "/wiki/Helds.png",
    alt: "held system",
    title: "Helds+Device",
    link: "/wiki/helds",
  },
  {
    image: "/wiki/Tasks.png",
    alt: "task system",
    title: "Tasks+Proficiência",
    link: "/wiki/tasks",
  },
  {
    image: "/wiki/Ultra-Dim.png",
    alt: "ud system",
    title: "Ultra Dimension",
    link: "/wiki/ud",
  },
  {
    image: "/wiki/Pokemon Paradox.png",
    alt: "paradox system",
    title: "Paradox",
    link: "/wiki/paradoxo",
  },
  {
    image: "/wiki/lendarios.png",
    alt: "lendarios system",
    title: "Lendarios",
    link: "/wiki/lendarios",
  },
  {
    image: "/wiki/pescaicon.png",
    alt: "fishing system",
    title: "Pesca",
    link: "/wiki/pesca",
  },
  {
    image: "/wiki/outland.png",
    alt: "outland system",
    title: "Outland",
    link: "/wiki/outland",
  },
  {
    image: "/wiki/marketicon.png",
    alt: "market and bank system",
    title: "Market e Bank",
    link: "/wiki/market",
  },
  {
    image: "/wiki/catch.png",
    alt: "catch system",
    title: "Catch System",
    link: "/wiki/catch",
  },
  {
    image: "/wiki/Star Shop.png",
    alt: "star shop, awaken and rune system",
    title: "Star Shop+Awaken+Runas",
    link: "/wiki/starshop",
  },
];

export default Wiki;
