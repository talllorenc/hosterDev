import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[700px] mx-auto mt-[150px] flex flex-col items-center p-4">
      <div className="flex flex-col items-center text-center mb-8">
        <Image
          src="/main-logo.svg"
          width={35}
          height={35}
          alt="main logo img"
          className="rotate-image transition-transform"
        />
        <h1 className="text-[40px] font-bold">Hoster Base</h1>
        <span>
          Добро пожаловать в hosterDEV! Здесь вы найдете решения и идеи,
          созданные нашими разработчиками. Обменивайтесь
          знаниями, исследуйте новые подходы и вдохновляйтесь для достижения
          великих результатов вместе.
        </span>
        <Link href="/add_solution" className="p-2 border-2 font-bold rounded-full text-white hover:bg-white hover:text-black hover:border-black mt-2">Добавить решение</Link>
      </div>

      <div className="flex flex-col gap-4 border border-zinc-700 rounded-lg p-4 max-w-[400px] w-full">
        <a href="https://siter.kz/" target="_blank" className="text-center p-4 bg-white rounded-lg text-black white-shadow hover:bg-zinc-300">Siter.kz</a>
        <a href="https://hoster.kz/" target="_blank" className="text-center p-4 bg-white rounded-lg text-black white-shadow hover:bg-zinc-300">Hoster.kz</a>
        <Link href="/login" className="text-center p-2 border-2 hover:border-zinc-400 hover:text-zinc-400">Войти</Link>
      </div>
    </div>
  );
}
