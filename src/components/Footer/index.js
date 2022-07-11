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
        <a href="https://www.behance.net/Iphie2591c53" target="_blank" rel="noreferrer">
          <img src={Behance} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/ukandu-ifeoma-130b14121" target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="" />
        </a>
        <a href="https://twitter.com/uniquee_ideas?s=21&t=S_lEM1VcuFh5J0j-la4l4g" target="_blank" rel="noreferrer">
          <img src={Twitter} alt="" />
        </a>
      </div>
    </FooterStyle>
  )
}
