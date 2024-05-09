import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import LogoImage from "/public/logo.png";

export function Rodape() {
  return (
    <div className="relative w-full">
      <div className="w-3/5 m-auto flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-5 p-10">
        <div className=" bg-gray-200 rounded-xl p-9 h-[279px] w-[367px]">
          <ul className="uppercase text-xl font-extrabold text-center list-disc py-4">
            REQUISITOS MINIMOS
          </ul>
          <li className=" text-lg italic">Windows 7 ou superior</li>
          <li className=" text-lg italic">DirectX 9.0 ou OPGL 1.2+</li>
          <li className=" text-lg italic">4GB+ de Memoria RAM</li>
          <li className=" text-lg italic">1GB+ de Armazenamento Livre</li>
          <li className=" text-lg italic">Boa conexão com a internet</li>
        </div>
        <div className="flex flex-col items-left gap-4 bg-gray-200 rounded-xl p-20 h-[279px] w-[367px]">
          <Link href="https://discord.gg/pokearkus" target="_blank">
            <div className="flex items-center py-1">
              <FaDiscord className="w-7 h-7 text-zinc-600 rounded-full hover:text-opacity-100 transition-all" />
              <span className="ml-2 hover:underline">discord.gg/pokearkus</span>
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/pokearkusoficial/"
            target="_blank"
          >
            <div className="flex items-center py-1">
              <FaInstagram className="w-7 h-7 text-zinc-600 rounded-full hover:text-opacity-100 transition-all" />
              <span className="ml-2 hover:underline">@pokearkusoficial</span>
            </div>
          </Link>
          <Link href="#" target="_blank">
            <div className="flex items-center py-1">
              <FaFacebook className="w-7 h-7 text-zinc-600 rounded-full hover:text-opacity-100 transition-all" />
              <span className="ml-2 hover:underline">Facebook</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 bg-gray-200 rounded-xl p-20 h-[279px] w-[367px]">
          <Image src={LogoImage} alt="logo" height={80} />
          <a href="#">
            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              DOWNLOAD
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
