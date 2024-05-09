import landingPageIndex from "/public/index1.png";
import Image from "next/image";
import LogoImage2 from "/public/logo.png";

export function Landing() {
  return (
    <section>
      <div className="relative flex flex-col gap-5 items-center justify-center py-10 bg-gradient-to-b from-zinc-600 to-zinc-400">
        <Image src={landingPageIndex} alt="index" />
        <Image src={LogoImage2} alt="Logo" height={100} />
      </div>
    </section>
  );
}
