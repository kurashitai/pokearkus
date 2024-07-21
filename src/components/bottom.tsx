import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import LogoImage from "/public/logo.png";

export function Rodape() {
  return (
    <div className="w-full">
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-stretch lg:justify-between lg:gap-40 p-5 lg:p-10 my-40 gap-20"
        id="download"
      >
        <div className="flex flex-col justify-between bg-gray-200 rounded-3xl p-5 lg:p-10 flex-1">
          <Image
            className="justify-center items-center relative mx-[35%] -mt-24 pb-6"
            src={"/windows.png"}
            width={129}
            height={129}
            alt="windows download"
          />
          <span className="relative z-10 text-black font-extrabold text-3xl pb-10 text-center">
            REQUESITOS MINIMOS
          </span>
          <ul className="uppercase text-xl font-extrabold text-center list-disc py-4 bg-white rounded-3xl">
            <div className="flex flex-col gap-2 text-left pl-10">
              <li className="text-lg italic">Windows 7 ou superior</li>
              <li className="text-lg italic">DirectX 9.0 ou OPGL 1.2+</li>
              <li className="text-lg italic">4GB+ de Memoria RAM</li>
              <li className="text-lg italic">1GB+ de Armazenamento Livre</li>
              <li className="text-lg italic">Boa conexão com a internet</li>
            </div>
          </ul>
          <div className="flex justify-center pt-8">
            <a
              href="https://mega.nz/file/zA0XiaBa#wJAHacYsNdszSAPlza05dNtLdFONxiFw8g0l8bjjV2g"
              target="_blank"
            >
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-3xl font-extrabold px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                DOWNLOAD
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-gray-200 rounded-3xl p-5 lg:p-10 flex-1">
          <Image
            src={"/android.png"}
            className="justify-center items-center relative mx-[35%] -mt-24 pb-6"
            width={129}
            height={129}
            alt="android download"
          />
          <span className="relative z-10 text-black font-extrabold text-3xl pb-10 text-center">
            REQUESITOS MINIMOS
          </span>
          <ul className="uppercase text-xl font-extrabold text-center list-disc py-4 bg-white rounded-3xl">
            <div className="flex flex-col gap-2 text-left pl-10">
              <li className="text-lg italic">Android 7 ou superior</li>
              <li className="text-lg italic">DirectX 9.0 ou OPGL 1.2+</li>
              <li className="text-lg italic">4GB+ de Memoria RAM</li>
              <li className="text-lg italic">500mb de Armazenamento Livre</li>
              <li className="text-lg italic">Boa conexão com a internet</li>
            </div>
          </ul>
          <div className="flex justify-center pt-8">
            <a
              href="https://mega.nz/file/ad0AADCD#nABaV193YrCbY90-JME44rDjYSA1kHZjh-9RngmnLNI"
              target="_blank"
            >
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-3xl font-extrabold px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                DOWNLOAD
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
