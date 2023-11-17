import Link from "next/link"

const SignupButton = () => {
  return (
    <div className="border p-1 rounded-lg hover:border-zinc-400 hover:text-zinc-400 w-fit">
    <Link href="/registration" className="">Зарегестрироваться</Link>
</div>
  )
}

export default SignupButton