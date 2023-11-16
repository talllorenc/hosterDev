"use client";

import Link from "next/link";
import Image from "next/image";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import LoginButton from "../LoginButton/LoginButton";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    id: 1,
    title: "О нас",
    url: "/about",
  },
  {
    id: 2,
    title: "Готовые решения",
    url: "/solutions",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex justify-between w-full md:w-fit gap-8 items-center">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/main-logo.svg"
              width={30}
              height={30}
              alt="main logo img"
              className="rotate-image transition-transform"
            />
            <span className="text-xl font-semibold text-white">
              hoster<span className="text-rose-500">DEV</span>
            </span>
          </Link>
        </div>

        <div onClick={toggleMenu} className="md:hidden">
          <Image src="/menu.png" width={40} height={40} alt="Menu" />
        </div>

        <div
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } p-8 text-[20px] gap-4 left-0 w-[420px] top-[72px] absolute bg-black border-r border-[#4c4b4b] h-screen backdrop-blur md:hidden`}
        >
          {links.map((link) => (
            <Link onClick={closeMenu} key={link.id} href={link.url} className=" md:hidden">
              <span className="text-white hover:text-gray-300">
                {link.title}
              </span>
            </Link>
          ))}
          <LoginButton closeMenu={closeMenu}/>
        </div>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="hidden md:flex">
            <span className="text-white hover:text-gray-300">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <GlobalSearch />
        <LoginButton />
      </div>
    </nav>
  );
};

export default Navbar;
