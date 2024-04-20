import Image from "next/image";

export function Clans() {
  return (
    <div className="relative w-full bg-gray-400">
      <div className="w-3/4 m-auto flex items-center justify-between gap-5 p-10">
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/garde.png"}
          width={303}
          height={200}
          alt="gardestrike"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/iron.png"}
          width={303}
          height={200}
          alt="ironhard"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/malefic.png"}
          width={303}
          height={200}
          alt="malefic"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/naturia.png"}
          width={303}
          height={200}
          alt="naturia"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/orebound.png"}
          width={303}
          height={200}
          alt="orebound"
        />
      </div>
      <div className="w-3/4 m-auto flex items-center justify-between gap-5 px-10 pb-10">
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/psy.png"}
          width={303}
          height={200}
          alt="psycraft"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/raibolt.png"}
          width={303}
          height={200}
          alt="raibolt"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/seavel.png"}
          width={303}
          height={200}
          alt="seavel"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/volca.png"}
          width={303}
          height={200}
          alt="volcanic"
        />
        <Image
          className="cursor-pointer rounded-3xl"
          src={"/clan/wingeon.png"}
          width={303}
          height={200}
          alt="wingeon"
        />
      </div>
    </div>
  );
}
