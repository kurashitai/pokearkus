import App from "@/components/app";
import { Clans } from "@/components/clans";
import { Landing } from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Landing />
      <App />
      <Clans />
    </div>
  );
}
