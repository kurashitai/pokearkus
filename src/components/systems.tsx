import Image from "next/image";

export function System() {
  return (
    <div className="relative w-full bg-gray-400">
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Sistemas presentes no Servidor
      </h1>
      <div className="w-3/4 m-auto flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-5 p-10">
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            className="cursor-pointer rounded-3xl"
            src={"/system/dz.png"}
            width={450}
            height={270}
            alt="dungeon system"
          />
          <p className="text-center uppercase text-xl font-extrabold dark:text-white py-3 shadow-sm">
            Dungeons
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            className="cursor-pointer rounded-3xl"
            src={"/system/goal.png"}
            width={450}
            height={270}
            alt="goal system"
          />
          <p className="text-center uppercase text-xl font-extrabold dark:text-white py-3 shadow-sm">
            Goal
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            className="cursor-pointer rounded-3xl"
            src={"/system/ud.png"}
            width={450}
            height={270}
            alt="ultra dimention system"
          />
          <p className="text-center uppercase text-xl font-extrabold dark:text-white py-3 shadow-sm">
            UltraDimention
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-2">
          <Image
            className="cursor-pointer rounded-3xl"
            src={"/system/tierlist.png"}
            width={450}
            height={270}
            alt="tier list system"
          />
          <p className="text-center uppercase text-xl font-extrabold dark:text-white py-3 shadow-sm">
            Tier List
          </p>
        </div>
      </div>
    </div>
  );
}
