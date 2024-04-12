import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaFacebook, FaInstagram } from 'react-icons/fa';
import { GridContainer } from "./grid";


import LogoImage from '/public/logo1.png'

const arrayMenu = [
    'Início',
    'Downloads',
    'Changelog',
    'Wiki'
]

export function Header () {
    const activedStyled = 'bg-zinc-600 text-white text-opacity-100 rounded-full'
    return (
        <header className="relative w-full h-24 text-white bg-white flex items-center">
            <GridContainer className="flex items-center justify-between">
                <Image 
                    src={LogoImage}
                    alt="logo"
                    height={80}
                />
                <div className="flex items-center gap-20">
                    <nav className="flex gap-2"> {
                        arrayMenu.map((item, index) => (
                            <Link key={index} href="#" className={`px-8 py-5 hover:text-opacity-100 transition-all  ${index === 0 ? activedStyled : 'text-black  text-opacity-50 hover:rounded-full hover:bg-zinc-400'}`}>{item}</Link>
                        ))
                    }
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="https://discord.gg/pokearkus" target="_blank"><FaDiscord className="w-7 h-7 text-zinc-600 rounded-full hover:text-opacity-100 transition-all"/></Link>
                    <Link href="https://www.instagram.com/pokearkusoficial/" target="_blank"><FaInstagram className="w-7 h-7 text-zinc-600 rounded-full hover:text-opacity-100 transition-all"/></Link>
                    <Link href="#" target="_blank"><FaFacebook className="w-7 h-7 text-zinc-600 rounded-full hover:text-opacity-100 transition-all"/></Link>                    
                </div>
            </GridContainer>
        </header>
    )
}