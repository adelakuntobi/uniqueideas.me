import { useEffect, useState } from "react";
import styled from "styled-components";


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
      <p className="text-neutral text-sm">&copy; Ifeoma Ukandu {date}</p>
      <div className="text-neutral">
        LInkedin
      </div>
    </FooterStyle>
  )
}
