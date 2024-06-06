import landingPageIndex from "/public/index1.png";
import Image from "next/image";
import LogoImage2 from "/public/logo.png";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

const downloads = () => {
  return (
    <section>
      <div className="relative flex flex-col gap-5 items-center justify-center py-10 bg-gradient-to-b from-zinc-600 to-zinc-400">
        <div className="flex flex-col justify-between bg-gray-200 rounded-xl p-5 lg:p-10 flex-1">
          <ul className="uppercase text-xl font-extrabold text-center list-disc py-4">
            REQUISITOS MINIMOS
          </ul>
          <div className="flex flex-col gap-2">
            <li className=" text-lg italic">Windows 7 ou superior</li>
            <li className=" text-lg italic">DirectX 9.0 ou OPGL 1.2+</li>
            <li className=" text-lg italic">4GB+ de Memoria RAM</li>
            <li className=" text-lg italic">1GB+ de Armazenamento Livre</li>
            <li className=" text-lg italic">Boa conexão com a internet</li>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:gap-5 p-5 lg:p-10">
          <div className="flex flex-col justify-between bg-gray-200 rounded-xl p-5 lg:p-10 flex-1">
            <ul className="uppercase text-xl font-extrabold text-center list-disc py-4">
              LAUNCHER PC
            </ul>
            <div className="flex flex-col gap-2">
              <p className="flex justify-between items-center text-lg py-5 font-bold">
                ARKUS LAUNCHER (CLEAR):
                <Link
                  href="https://mega.nz/file/zA0XiaBa#wJAHacYsNdszSAPlza05dNtLdFONxiFw8g0l8bjjV2g"
                  target="_blank"
                >
                  <FaDownload className="w-9 h-9 text-blue-800 hover:text-opacity-100 transition-all" />
                </Link>
              </p>
              <p className=" italic">
                Apos instalação irá requisitar o primeiro update
              </p>
              <p className="flex justify-between items-center text-lg py-5 font-bold">
                ARKUS LAUNCHER (FULL):
                <Link
                  href="https://mega.nz/file/6FEiAKYZ#bzT67aVfsjzY9fpXqCYtFri-okfLGPM_PfKaRghqQO8"
                  target="_blank"
                >
                  <FaDownload className="w-9 h-9 text-blue-800 hover:text-opacity-100 transition-all" />
                </Link>
              </p>
              <p className=" italic">
                Apos instalação irá requisitar o primeiro update
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-gray-200 rounded-xl p-5 lg:p-10 flex-1">
            <ul className="uppercase text-xl font-extrabold text-center list-disc py-4">
              CLIENT MOBILE
            </ul>
            <div className="flex flex-col gap-2">
              <p className="flex justify-between items-center text-lg py-5 font-bold">
                CLIENT MOBILE X32:
                <Link
                  href="https://mega.nz/file/TV1nRC5a#bQct074dpcMvLa1DWNnLAmkMgkM3I6EN0HZH0gFacJM"
                  target="_blank"
                >
                  <FaDownload className="w-9 h-9 text-blue-800 hover:text-opacity-100 transition-all" />
                </Link>
              </p>
              <p className=" italic">
                Utilizados em aparelhos que possuem arquitetura de 32Bits
              </p>
              <p className="flex justify-between items-center text-lg py-5 font-bold">
                CLIENT MOBILE X64:
                <Link
                  href="https://mega.nz/file/7Z8xxL5J#rDaDXpyf1YpX7F3v2XCZYDgjwTTqExM4mshkP1B2PMs"
                  target="_blank"
                >
                  <FaDownload className="w-9 h-9 text-blue-800 hover:text-opacity-100 transition-all" />
                </Link>
              </p>
              <p className=" italic">
                Utilizados em aparelhos que possuem arquitetura de 64Bits
              </p>
            </div>
          </div>
        </div>

        <Image src={LogoImage2} alt="Logo" height={100} />
      </div>
      <div className="justify-between text-center items-center p-10">
        <p className=" font-extrabold">
          Divirta-se com outros jogadores em um mundo repleto de Pokémons e
          aventuras.
        </p>
        <p>
          © 1996 - 2023 | Todos os Pokémons e seus respectivos nomes são
          direitos reservados a Nintendo.
        </p>
        <p>
          Um game feito de fã para fã | Arkus Team.Um game feito de fã para fã |
          Arkus Team.
        </p>
      </div>
    </section>
  );
};

export default downloads;
