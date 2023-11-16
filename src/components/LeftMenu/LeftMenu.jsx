"use client";

import Link from "next/link";
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

const LeftMenu = () => {
  const pathname = usePathname();


  return (
      <div className="hidden left:block left-0 h-full w-[250px] ">
        <div className="flex flex-col px-4 gap-2">
          <Link href="/solutions" className="font-bold">
            Готовые решения
          </Link>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
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
