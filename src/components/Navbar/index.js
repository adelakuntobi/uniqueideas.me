import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"


const Navbar = () => {
  return (
    <nav className="w-full container shadow-lg bg-black bg-opacity-60 sticky top-0 ">
      <div className="py-8 justify-between  container !px-0 shadow-lg bg-black bg-opacity-60">
        <img src={Logo} alt="" />
        <ul className="justify-between gap-12">
          <li className="cursor-pointer uppercase active">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer uppercase">Work</li>
          <li className="cursor-pointer uppercase">About</li>
          <li className="cursor-pointer uppercase">Contact</li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
