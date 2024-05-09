import Image from "next/image";

export function Clans() {
  return (
    <div className="relative w-full bg-gray-400 p-5">
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Sistema de clãs
      </h1>
      <div className="w-3/4 m-auto flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5 p-10">
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/garde.png"}
          width={303}
          height={200}
          alt="gardestrike"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/iron.png"}
          width={303}
          height={200}
          alt="ironhard"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/malefic.png"}
          width={303}
          height={200}
          alt="malefic"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/naturia.png"}
          width={303}
          height={200}
          alt="naturia"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/orebound.png"}
          width={303}
          height={200}
          alt="orebound"
        />
      </div>
      <div className="w-3/4 m-auto flex flex-col py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5 p-10">
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/psy.png"}
          width={303}
          height={200}
          alt="psycraft"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/raibolt.png"}
          width={303}
          height={200}
          alt="raibolt"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/seavel.png"}
          width={303}
          height={200}
          alt="seavel"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/volca.png"}
          width={303}
          height={200}
          alt="volcanic"
        />
        <Image
          className="cursor-pointer rounded-3xl py-4"
          src={"/clan/wingeon.png"}
          width={303}
          height={200}
          alt="wingeon"
        />
      </div>
    </div>
  );
}
