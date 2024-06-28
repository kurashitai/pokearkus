import Image from "next/image";
import { useEffect } from "react";

export function System() {
  const handleClick = (link: string) => {
    window.location.href = link;
  };

  useEffect(() => {
    // Aqui você pode colocar qualquer outra lógica necessária no futuro
  }, []);

  return (
    <div className="relative w-full bg-gray-400">
      <h1 className="text-center uppercase text-6xl font-extrabold dark:text-white py-10 shadow-sm">
        Sistemas presentes no Servidor
      </h1>
      <div className="w-3/4 m-auto flex flex-wrap justify-center p-10">
        {systems.map((system, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
            <div
              onClick={() => handleClick(system.link)}
              className="cursor-pointer"
            >
              <div className="flex items-center justify-center flex-col gap-2">
                <Image
                  className="cursor-pointer rounded-3xl"
                  src={system.image}
                  width={450}
                  height={270}
                  alt={system.alt}
                />
                <p className="text-center uppercase text-xl font-extrabold dark:text-white py-3 shadow-sm">
                  {system.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const systems = [
  {
    image: "/system/dz.png",
    alt: "dungeon system",
    title: "Dungeons",
    link: "../wiki/dungeons",
  },
  {
    image: "/system/goal.png",
    alt: "goal system",
    title: "Goal",
    link: "/goal",
  },
  {
    image: "/system/ud.png",
    alt: "ultra dimention system",
    title: "UltraDimention",
    link: "/ultradimention",
  },
  {
    image: "/system/tierlist.png",
    alt: "clans system",
    title: "Clans",
    link: "/wiki/clans",
  },
];
