import Image from "next/image";

export function Clans() {
  return (
    <div className="relative w-full bg-gray-400 p-5">
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Sistema de clãs
      </h1>
      <div className="w-2/4 m-auto flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5 p-10">
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/garde.png"}
            href="/wiki/clans"
            width={186}
            height={440}
            alt="gardestrike"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/iron.png"}
            width={186}
            height={440}
            alt="ironhard"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/malefic.png"}
            width={186}
            height={440}
            alt="malefic"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/naturia.png"}
            width={186}
            height={440}
            alt="naturia"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/orebound.png"}
            width={186}
            height={440}
            alt="orebound"
          />
        </a>
      </div>
      <div className="w-2/4 m-auto flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5 p-10">
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/psy.png"}
            width={186}
            height={440}
            alt="psycraft"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/raibolt.png"}
            width={186}
            height={440}
            alt="raibolt"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/seavel.png"}
            width={186}
            height={440}
            alt="seavel"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/volca.png"}
            width={186}
            height={440}
            alt="volcanic"
          />
        </a>
        <a href="../wiki/clans">
          <Image
            className="cursor-pointer rounded-3xl py-4"
            src={"/clan/wingeon.png"}
            width={186}
            height={440}
            alt="wingeon"
          />
        </a>
      </div>
    </div>
  );
}
