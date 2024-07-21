"use client";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram, FaBars } from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GridContainer } from "./grid";

import LogoImage from "/public/logo.png";

const arrayMenu = [
  { name: "Início", link: "/" },
  { name: "Downloads", link: "/#download" },
  { name: "Wiki", link: "/wiki" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  const activedStyled = "bg-zinc-600 text-white text-opacity-100 rounded-full";

  const isActive = (route: string) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(route) && pathname !== "/";
  };

  return (
    <header className="relative w-full h-10 text-white text-3xl bg-gray-400 flex items-center z-50 border-b-4 border-gray-300">
      <div className="w-full h-full flex items-center justify-between">
        <GridContainer className="flex items-end justify-between md:w-[530px] w-[300px] h-10 lg:h-40 md:h-40 bg-white pb-7 pl-10 rounded-b-3xl">
          {/* <Image src={LogoImage} alt="logo" height={80} /> */}

          {/* Menu pras telas maiores */}
          <nav className="hidden md:flex items-center gap-8">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`px-4 py-2 hover:text-opacity-100 transition-all ${
                  isActive(item.link)
                    ? activedStyled
                    : "text-black text-opacity-50 hover:rounded-full hover:bg-zinc-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Dropdown menu pras telas menores */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
              <nav className="flex flex-col items-center gap-2 p-4">
                {arrayMenu.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className={`px-4 py-2 hover:text-opacity-100 transition-all ${
                      isActive(item.link)
                        ? activedStyled
                        : "text-black text-opacity-50 hover:rounded-full hover:bg-zinc-400"
                    }`}
                    onClick={() => setIsOpen(false)} // Fechar menu
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </GridContainer>
        <div className="flex lg:flex-row md:flex-row sm:flex-col absolute pl-[20%] md:pl-[2%] lg:pl-[6%] xl:pl-[10%] sm:pl-[5%] items-center md:gap-[1px] lg:gap-4 float-start">
          <Link href="https://discord.gg/pokearkus" target="_blank">
            <FaDiscord className="w-8 h-8 p-1 text-black bg-white rounded-full hover:text-opacity-100 transition-all" />
          </Link>
          <Link
            href="https://www.instagram.com/pokearkusoficial/"
            target="_blank"
          >
            <FaInstagram className="w-8 h-8 p-1 text-black bg-white rounded-full hover:text-opacity-100 transition-all" />
          </Link>
          <Link href="#" target="_blank">
            <FaFacebook className="w-8 h-8 p-1 text-black bg-white rounded-full hover:text-opacity-100 transition-all" />
          </Link>
          <button onClick={toggleMenu} className="md:hidden absolute px-[60%]">
            <FaBars className="w-8 h-8 p-1 text-black bg-white rounded-full hover:text-opacity-100 transition-all" />
          </button>
        </div>
      </div>
    </header>
  );
}
