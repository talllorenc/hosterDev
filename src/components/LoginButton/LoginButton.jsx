import Link from "next/link";

const LoginButton = ({ closeMenu }) => {
  return (
    <Link
      href="/login"
      onClick={closeMenu}
      className="border-2 py-1 px-4 rounded-full font-bold hover:bg-white hover:text-black hover:border-white w-fit"
    >
      Войти
    </Link>
  );
};

export default LoginButton;
