import { useEffect, useState } from "react";
import styled from "styled-components";
import Behance from "../../assets/images/behance.svg"
import Linkedin from "../../assets/images/linkedin.svg"
import Twitter from "../../assets/images/twitter.svg"

const FooterStyle = styled.footer`
  border-top: 1px solid #6B7280;
`;




export default function Footer() {
  const [date, setDate] = useState("")
  useEffect(() => {

    const d = new Date();
    setDate(d.getFullYear())

  }, [])

  return (
    <FooterStyle className="justify-between py-6 mt-6">
      <p className="text-neutral text-sm">&copy; Ifeoma Ukandu. {date}</p>
      <div className="items-center gap-4">
        <a href="http://twitter.com/uniqueideas">
          <img src={Behance} alt="" />
        </a>
        <a href="http://twitter.com/uniqueideas">
          <img src={Linkedin} alt="" />
        </a>
        <a href="http://twitter.com/uniqueideas">
          <img src={Twitter} alt="" />
        </a>
      </div>
    </FooterStyle>
  )
}
