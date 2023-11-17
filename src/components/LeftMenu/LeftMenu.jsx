"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

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

const LeftMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden left:block left-0 h-full w-[250px] px-4">
      <div className="p-2 mb-4 border-b border-[#4c4b4b]">
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
      <div className="flex flex-col px-4 gap-2">
        <Link href="/solutions" className="font-bold">
          Готовые решения
        </Link>
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="flex justify-between w-full items-center "
            >
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

export default LeftMenu;
