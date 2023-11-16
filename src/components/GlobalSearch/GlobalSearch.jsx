import Link from "next/link"

const GlobalSearch = () => {
  return (
    <div className="flex w-full items-center justify-center border border-zinc-700 rounded-lg">
      <input
        placeholder="Какой у вас вопрос?"
        type="text"
        className="min-w-[350px] h-[30px] p-2 text-white bg-zinc-900 outline-none rounded-lg"
      />
    </div>
  )
}

export default GlobalSearch