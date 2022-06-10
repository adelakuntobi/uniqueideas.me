import Logo from "../../assets/images/logo.svg"
export const Navbar = () => {
  return (
    <nav className="py-8 justify-between">
      <img src={Logo} alt="" />
      <ul className="justify-between gap-12">
        <li className="cursor-pointer uppercase active">Home</li>
        <li className="cursor-pointer uppercase">Work</li>
        <li className="cursor-pointer uppercase">About</li>
        <li className="cursor-pointer uppercase">Contact</li>
      </ul>
    </nav>
  )
}
