import { NavLink as ReactLink } from "react-router-dom"
import { Link } from "react-scroll"
import Logo from "../../assets/images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { useState } from "react"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <nav className="w-full shadow-lg bg-black bg-opacity-60 top-0 ">
      <div className="pt-8 pb-4 lg:pb-8 justify-between !px-0 shadow-lg bg-black bg-opacity-60">
        <ReactLink to="/">
          <img src={Logo} alt="" />
        </ReactLink>
        <div className={openNav ? `h-screen lg:h-auto w-full lg:w-auto grid place-items-center fixed lg:relative z-50 top-0 left-0 bg-black` : ""}>
          <CgClose className={`absolute top-10 right-10 text-2xl cursor-pointer ${openNav ? "block" : "hidden"}`}
            onClick={() => setOpenNav(false)} />
          <ul className={` gap-12 ${openNav ? "flex-col lg:flex-row flex items-center" : "hidden lg:flex"}`}>
            <li className="cursor-pointer uppercase active">
              <ReactLink to="/">Home</ReactLink>
            </li>
            <Link activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
              onClick={() => setOpenNav(false)}>
              <li className="cursor-pointer uppercase">Work</li>
            </Link>
            <Link activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
              onClick={() => setOpenNav(false)}
            ><li className="cursor-pointer uppercase">About</li></Link>
            <Link activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
              onClick={() => setOpenNav(false)}>
              <li className="cursor-pointer uppercase">Contact</li></Link>
          </ul>
        </div>
        <GiHamburgerMenu className="text-2xl flex lg:hidden cursor-pointer" onClick={() => setOpenNav(true)} />
      </div>
    </nav>
  )
}
export default Navbar
