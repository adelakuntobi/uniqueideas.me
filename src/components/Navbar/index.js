import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { Link } from "react-scroll"
import Logo from "../../assets/images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { useState } from "react"
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)

  const path = useLocation().pathname;
  const history = useNavigate();
  // const scroller = Scroll.scroller;


  const scroll = async (name) => {
    setOpenNav(false)
    if (path === '/') {
      console.log(name)
      scroller.scrollTo(name, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        isDynamic: true,
        ignoreCancelEvents: false,
        spyThrottle: 500,
      });
    }
    else {
      await history('/');
      await scroller.scrollTo(name, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 1500,
        isDynamic: true,
        ignoreCancelEvents: false,
        spyThrottle: 500,
      });
    }
  };


  return (
    <nav className="w-full shadow-lg bg-black bg-opacity-60 top-0 ">
      <div className="pt-8 pb-4 lg:pb-8 justify-between !px-0 shadow-lg bg-black bg-opacity-60">
        <NavLink to="/">
          <img src={Logo} alt="" className="w-6 lg:w-10" />
        </NavLink>
        <div className={openNav ? `h-screen lg:h-auto w-full lg:w-auto grid place-items-center fixed lg:relative z-50 top-0 left-0 bg-black` : ""}>
          <CgClose className={`absolute top-10 right-10 text-2xl cursor-pointer ${openNav ? "block" : "hidden"}`}
            onClick={() => setOpenNav(false)} />
          <ul className={` gap-12 ${openNav ? "flex-col lg:flex-row flex items-center" : "hidden lg:flex"}`}>
            <li className="cursor-pointer uppercase">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="cursor-pointer uppercase" onClick={() => scroll("works")}>Works</li>
            <li className="cursor-pointer uppercase" onClick={() => scroll("about")}>About</li>
            <li className="cursor-pointer uppercase" onClick={() => scroll("contact")}>Contact</li>
          </ul>
        </div>
        <GiHamburgerMenu className="text-2xl flex lg:hidden cursor-pointer" onClick={() => setOpenNav(true)} />
      </div>
    </nav >
  )
}
export default Navbar
