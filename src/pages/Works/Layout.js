import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom"
// Styled Components
import styled from "styled-components";
import Footer from "../../components/Footer";
import { HOMEPAGE } from "../../utils/pageUrl";

export default function Layout(props) {
  const { children, title, banner, next, textDesc, route, home, topNote, titleBreak } = props
  return (
    <div style={{ color: "#E5E7EB" }}>
      <div className="container">
        <Navbar />
      </div>
      <div className="container my-5">
        <p data-aos="fade-left" className="text-primary mb-6">{topNote}</p>
        <h2 className="font-bold ivy text-3xl lg:text-5xl mb-8">
          <span data-aos="fade-left" data-aos-delay="500" className="block">{title}</span>
          <span data-aos="fade-left" data-aos-delay="900" className="block">{titleBreak}</span>
        </h2>
        <img data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          src={banner} alt="" className="w-full" />
        {children}
        {
          home ?
            <NextDiv to={HOMEPAGE}>
              <h4>Back to Home</h4>
            </NextDiv> :
            <NextDiv to={route}>
              <span>Next</span>
              <h4>{next}</h4>
              <p className="text-lg lg:text-2xl tracking-wider opacity-50">{textDesc}</p>
            </NextDiv>
        }
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
    &.white{
      font-size: 1.65rem/* 28px */;
      color: #fff;
    }
    @media (max-width: 1024px) { 
      margin-bottom: 0.5rem;
      &.white{
        font-size: 1.25rem/* 28px */;
      }
    }
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
    padding-top: 1rem;
  padding-bottom: 1rem;
    h3{
      font-size: 1.45rem/* 20px */;
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
    font-size: 36px;
    line-height: 58px;
    text-transform: capitalize;
  }

  @media (max-width: 1024px) { 
    font-size: 14px;
    h4{
      font-size: 22px;
      line-height: 40px;
    }
    span{
    font-weight: 400;
    font-size: 18px;
    opacity: 0.7;
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