"use client";
import React, { useState } from "react";

export function WikiLeft() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      <div className="lg:hidden p-4">
        <button
          className="bg-gray-300 p-4 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      <div
        id="wiki-panel"
        className={`lg:w-64 h-screen border-r border-gray-300 bg-gray-100 overflow-y-auto pt-[6rem] p-4 fixed top-0 left-0 transform ${
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
          <h3 id="home-label" className="p-3 text-lg font-semibold">
            <span>Home</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="mainpage-description">
                <a
                  href="#mainpage"
                  title="Acessar a página principal [alt-shift-z]"
                  accessKey="z"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Página principal
                </a>
              </li>
              <li id="team">
                <a
                  href="#team"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Equipe
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
          <h3 id="gameplay-label" className="p-3 text-lg font-semibold">
            <span>Gameplay</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="characters">
                <a
                  href="/wiki/clans"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Clans
                </a>
              </li>
              <li id="quests">
                <a
                  href="#quests"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Quests
                </a>
              </li>
              <li id="progression">
                <a
                  href="/wiki/dungeons"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Dungeons
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav
          id="nav-tasks"
          aria-labelledby="tasks-label"
          role="navigation"
          className="mt-2"
        >
          <h3 id="tasks-label" className="p-3 text-lg font-semibold">
            <span>Tasks</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="kanto">
                <a
                  href="#kanto"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Kanto
                </a>
              </li>
              <li id="phenac">
                <a
                  href="#phenac"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Phenac
                </a>
              </li>
              <li id="sinnoh">
                <a
                  href="#sinnoh"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Sinnoh
                </a>
              </li>
              <li id="dz">
                <a
                  href="#dz"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Dz
                </a>
              </li>
              <li id="runes">
                <a
                  href="#runes"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Runas
                </a>
              </li>
              <li id="legends">
                <a
                  href="#legends"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Lendas
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
          <h3 id="beginners-label" className="p-3 text-lg font-semibold">
            <span>Para Iniciantes</span>
          </h3>
          <div>
            <ul className="space-y-1">
              <li id="faq">
                <a
                  href="#faq"
                  className="text-blue-500 hover:underline block p-2"
                >
                  FAQ
                </a>
              </li>
              <li id="boost-system">
                <a
                  href="/wiki/boost"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Sistema de Boost
                </a>
              </li>
              <li id="market-system">
                <a
                  href="#market-system"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Sistema de Market
                </a>
              </li>
              <li id="tutorials">
                <a
                  href="#tutorials"
                  className="text-blue-500 hover:underline block p-2"
                >
                  Tutoriais
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
