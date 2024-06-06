"use client";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Certifique-se de estar usando isso
import { GridContainer } from "./grid"; // Ajuste o caminho conforme necessário

import LogoImage from "/public/logo.png";

const arrayMenu = [
  { name: "Início", link: "/" },
  { name: "Downloads", link: "/downloads" },
  { name: "Changelog", link: "/changelog" },
  { name: "Wiki", link: "/wiki" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  const activedStyled = "bg-zinc-600 text-white text-opacity-100 rounded-full";

  return (
    <header className="relative w-full h-24 text-white bg-white flex items-center z-50">
      <GridContainer className="flex items-center justify-between w-full px-4">
        <Image src={LogoImage} alt="logo" height={80} />

        {/* Menu for larger screens */}
        <nav className="hidden md:flex items-center gap-8">
          {arrayMenu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`px-4 py-2 hover:text-opacity-100 transition-all ${
                pathname === item.link
                  ? activedStyled
                  : "text-black text-opacity-50 hover:rounded-full hover:bg-zinc-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link href="https://discord.gg/pokearkus" target="_blank">
            <FaDiscord className="w-7 h-7 text-zinc-600 hover:text-opacity-100 transition-all" />
          </Link>
          <Link
            href="https://www.instagram.com/pokearkusoficial/"
            target="_blank"
          >
            <FaInstagram className="w-7 h-7 text-zinc-600 hover:text-opacity-100 transition-all" />
          </Link>
          <Link href="#" target="_blank">
            <FaFacebook className="w-7 h-7 text-zinc-600 hover:text-opacity-100 transition-all" />
          </Link>
          <button onClick={toggleMenu} className="md:hidden">
            <FaBars className="w-7 h-7 text-zinc-600 hover:text-opacity-100 transition-all" />
          </button>
        </div>

        {/* Dropdown menu for smaller screens */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col items-center gap-2 p-4">
              {arrayMenu.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`px-4 py-2 hover:text-opacity-100 transition-all ${
                    pathname === item.link
                      ? activedStyled
                      : "text-black text-opacity-50 hover:rounded-full hover:bg-zinc-400"
                  }`}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </GridContainer>
    </header>
  );
}
