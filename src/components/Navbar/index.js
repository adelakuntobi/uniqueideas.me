import { NavLink as ReactLink } from "react-router-dom"
import { Link } from "react-scroll"
import Logo from "../../assets/images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  return (
    <nav className="w-full shadow-lg bg-black bg-opacity-60 sticky top-0 ">
      <div className="pt-8 pb-4 lg:pb-8 justify-between !px-0 shadow-lg bg-black bg-opacity-60">
        <img src={Logo} alt="" />
        <ul className="justify-between gap-12 !hidden lg:!flex">
          <li className="cursor-pointer uppercase active">
            <ReactLink to="/">Home</ReactLink>
          </li>
          <Link activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          >
            <li className="cursor-pointer uppercase">Work</li>
          </Link>
          <Link activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          ><li className="cursor-pointer uppercase">About</li></Link>
          <Link activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}
          > <li className="cursor-pointer uppercase">Contact</li></Link>
        </ul>
        <GiHamburgerMenu className="text-2xl flex lg:hidden" />
      </div>
    </nav>
  )
}
export default Navbar
