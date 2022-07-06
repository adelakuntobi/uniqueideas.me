import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"
// Styled Components
import styled from "styled-components";
import Footer from "../../components/Footer";

export default function Layout(props) {
  const { children, title, banner, next, textDesc, route } = props
  return (
    <div style={{ color: "#E5E7EB" }}>
      <Navbar />
      <div className="container my-5">
        <h2 className="font-bold text-3xl lg:text-5xl mb-8">{title}</h2>
        <img src={banner} alt="" className="w-full" />
        {children}
        <NextDiv to={route}>
          <span>Next</span>
          <h4>{next}</h4>
          <p className="text-xl lg:text-3xl tracking-wider">{textDesc}</p>
        </NextDiv>
        <Footer />
      </div>
    </div>
  )
}


export const DivWithHeading = styled.div`
  max-width: 772px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  h3{
    color: #D1E2C0;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.875rem/* 30px */;
    line-height: 2.25rem/* 36px */;
    text-transform: capitalize;
  }
  p{
    margin-bottom: 1.5rem;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem;
    &:last-of-type{
      margin-bottom: 0;
      color: #E5E7EB;
    }
  }
  ul{
    padding-left: 1.5rem;
    list-style: disc;
    li{
      font-size: 1.5rem/* 24px */;
    line-height: 2rem;
    margin: 1.75rem 0;
    }
   span{
    font-weight: 700;
   } 
  }
  @media (max-width: 1024px) { 

    h3{
      font-size: 1.25rem/* 20px */;
      line-height: 1.75rem;
    }
    p{
      font-size: 1.125rem/* 18px */;
      line-height: 1.75rem;
      margin-bottom: 0.75rem;
    }
   
   ul{
    li{
      font-size: 1.125rem/* 18px */;
      line-height: 1.5rem;
      margin: 1rem 0;
    }
   }	
   }	
`;

export const NextDiv = styled(Link)`
  text-align: center;
  margin: 10rem 0 4rem;
  display: block;
  span{
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    }
  h4{
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    text-transform: capitalize;
  }

  @media (max-width: 1024px) { 
    font-size: 20px;
    h4{
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

export const MyRole = styled.div`
  max-width: 772px;
  margin: 1rem auto;
  font-size: 24px;
  line-height: 29px;
  p{
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  ul{
    list-style: disc;
    padding-left: 2rem;
    li{

    }
  }
  @media (max-width: 1024px) { 
    font-size: 20px;
    p{
      margin-bottom: 0.5rem;
    }
  }
`;