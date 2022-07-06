import { NavLink as ReactLink } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <nav className="w-full container shadow-lg bg-black bg-opacity-60 sticky top-0 ">
      <div className="pt-8 pb-4 lg:pb-8 justify-between !px-0 shadow-lg bg-black bg-opacity-60">
        <img src={Logo} alt="" />
        <ul className="justify-between gap-12 !hidden lg:!flex">
          <li className="cursor-pointer uppercase active">
            <ReactLink to="/">Home</ReactLink>
          </li>
          <li className="cursor-pointer uppercase">Work</li>
          <li className="cursor-pointer uppercase">About</li>
          <li className="cursor-pointer uppercase">Contact</li>
        </ul>
        <GiHamburgerMenu className="text-2xl flex lg:hidden" />
      </div>
    </nav>
  )
}
export default Navbar
