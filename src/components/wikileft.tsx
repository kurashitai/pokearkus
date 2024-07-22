"use client";
import React, { useState } from "react";

export function WikiLeft() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      <div className="xl:hidden p-4">
        <button
          className="bg-white p-4 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      <div
        id="wiki-panel"
        className={`lg:w-56 h-screen border-r border-red-600 bg-gradient-to-b from-black to-zinc-800 overflow-y-auto pt-[6rem] p-4 fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          #wiki-panel::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Botão de fechar no topo do painel */}
        <div className="lg:hidden flex justify-end mb-4">
          <button
            className="bg-gray-300 p-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Fechar
          </button>
        </div>

        <nav
          id="nav-home"
          aria-labelledby="home-label"
          role="navigation"
          className="mt-2"
        >
          <h3
            id="home-label"
            className="p-3 text-lg font-extrabold text-red-600"
          >
            <span>Home</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="mainpage-description">
                <a
                  href="/"
                  title="Acessar a página principal [alt-shift-z]"
                  accessKey="z"
                  className="text-white hover:underline block p-2"
                >
                  Página principal
                </a>
              </li>
              <li id="download">
                <a
                  href="/#download"
                  className="text-white hover:underline block p-2"
                >
                  Download
                </a>
              </li>
              <li id="wiki">
                <a
                  href="/wiki"
                  className="text-white hover:underline block p-2"
                >
                  Wiki
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          id="nav-gameplay"
          aria-labelledby="gameplay-label"
          role="navigation"
          className="mt-2"
        >
          <h3
            id="gameplay-label"
            className="p-3 text-lg font-extrabold text-red-600"
          >
            <span>Gameplay</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="clans">
                <a
                  href="/wiki/clans"
                  className="text-white hover:underline block p-2"
                >
                  Clans
                </a>
              </li>
              <li id="ultra dimension">
                <a
                  href="/wiki/ud"
                  className="text-white hover:underline block p-2"
                >
                  Ultra Dimension (UD)
                </a>
              </li>
              <li id="progression">
                <a
                  href="/wiki/dungeons"
                  className="text-white hover:underline block p-2"
                >
                  Dungeons
                </a>
              </li>
              <li id="helds and device">
                <a
                  href="/wiki/helds"
                  className="text-white hover:underline block p-2"
                >
                  Helds e Device
                </a>
              </li>
              <li id="task e proficiência">
                <a
                  href="/wiki/tasks"
                  className="text-white hover:underline block p-2"
                >
                  Task e Proficiência
                </a>
              </li>
              <li id="paradox">
                <a
                  href="/wiki/paradoxo"
                  className="text-white hover:underline block p-2"
                >
                  Paradox
                </a>
              </li>
              <li id="legendary">
                <a
                  href="/wiki/lendarios"
                  className="text-white hover:underline block p-2"
                >
                  Lendarios
                </a>
              </li>
              <li id="outland">
                <a
                  href="/wiki/outland"
                  className="text-white hover:underline block p-2"
                >
                  Outland
                </a>
              </li>
              <li id="starshop">
                <a
                  href="/wiki/starshop"
                  className="text-white hover:underline block p-2"
                >
                  Star Shop
                </a>
              </li>
              <li id="awaken">
                <a
                  href="/wiki/starshop"
                  className="text-white hover:underline block p-2"
                >
                  Awaken
                </a>
              </li>
              <li id="rune">
                <a
                  href="/wiki/starshop"
                  className="text-white hover:underline block p-2"
                >
                  Runas
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          id="nav-beginners"
          aria-labelledby="beginners-label"
          role="navigation"
          className="mt-2"
        >
          <h3
            id="beginners-label"
            className="p-3 text-lg font-extrabold text-red-600"
          >
            <span>Para Iniciantes</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="faq">
                <a
                  href="/wiki/faq"
                  className="text-white hover:underline block p-2"
                >
                  FAQ
                </a>
              </li>
              <li id="boost-system">
                <a
                  href="/wiki/boost"
                  className="text-white hover:underline block p-2"
                >
                  Sistema de Boost
                </a>
              </li>
              <li id="market-system">
                <a
                  href="/wiki/market"
                  className="text-white hover:underline block p-2"
                >
                  Sistema de Market
                </a>
              </li>
              <li id="fishing">
                <a
                  href="/wiki/pesca"
                  className="text-white hover:underline block p-2"
                >
                  Pesca
                </a>
              </li>
              <li id="catch">
                <a
                  href="/wiki/catch"
                  className="text-white hover:underline block p-2"
                >
                  Catch System
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
