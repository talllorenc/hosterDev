import Link from "next/link";

const LoginButton = ({closeMenu}) => {
  return (
    <div onClick={closeMenu} className="border p-1 rounded-lg hover:border-zinc-400 hover:text-zinc-400 w-fit">
        <Link href="/login" className="">Войти</Link>
    </div>
  )
}

export default LoginButton