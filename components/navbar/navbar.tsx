import Logo from "./logo"
import Navigation from "./navigation"

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <header className="w-full h-[62px] border-b fixed inset-0 bg-white z-[60] flex items-center justify-between px-4 space-x-8">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Navbar
