import Link from "next/link"

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return (
    <Link
      href="/"
      className="font-bold text-lg text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text"
    >
      MY FIRST USERS
    </Link>
  )
}

export default Logo
