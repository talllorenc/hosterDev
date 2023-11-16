"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Bitrix24",
    url: "/solutions/bitrix24",
  },
  {
    id: 2,
    title: "Разработка на сайте",
    url: "/solutions/site",
  },
  {
    id: 3,
    title: "Полезные сервисы",
    url: "/solutions/documents",
  },
];

const LeftMenuTop = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div

      className="left:hidden p-4 border-t border-b border-[#4c4b4b]"
    >
      <div       onClick={toggleMenu} className="flex items-center gap-2">
        <Image
          src="/LeftMenu/arrow.png"
          width={15}
          height={15}
          className={`${isMenuOpen ? "rotate-90" : ""}`}
        />

        <span className="text-[18px]">Menu</span>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex flex-col" : "hidden"
        } absolute left-0 top-[133px] bg-black w-full h-screen p-8`}
      >
        <div className="flex flex-col gap-2 ">
          <Link href="/solutions" className="font-bold">
            Готовые решения
          </Link>
          {links.map((link) => (
            <Link onClick={closeMenu} key={link.id} href={link.url}>
              <span
                className={`hover:text-zinc-300 ${
                  pathname === link.url
                    ? "border-b-2 border-blue-500 font-medium"
                    : "text-zinc-400"
                }`}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftMenuTop;
