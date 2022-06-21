import Navbar from "../Navbar";

// images
import StepharBG from "../../assets/images/stepharBg.svg"
import Landing from "../../assets/images/stepharlanding.svg"
import Chart from "../../assets/images/chart.svg"
import Wireframe from "../../assets/images/wireframe.png"

import styled from "styled-components";

export default function ViewSelected() {
  return (
    <div>
      <Navbar />

      <div className="container my-5">
        <div className="mb-12">
          <h2 className="font-bold text-4xl lg:text-5xl mb-8">Stephar</h2>
          <img src={StepharBG} alt="" className="w-full" />

          {/* About Section */}
          <DivWithHeading>
            <h3>About Stephar</h3>
            <p>
              In 2021, non - fungible tokens and the metaverse became a huge topic. NFT marketplaces like opensea,
              rarible, and the likes received a lot of traffic as more people became interested in the new NFT &
              metaverse hype.
            </p>
            <p>
              While there’s a large number of NFTs introduced into the market daily,
              it has become very difficult to stay up to date and keep track of things.
            </p>
            <p>
              That’s where Stephar comes in
            </p>
            <p>
              Stephar helps you learn about NFTC and metaverse drops and keeps you updated on biggest NFT
              projects, live news feeds, top collections, analytics and statistics.
            </p>
          </DivWithHeading>
        </div>
        <div className="mb-12">
          <img src={Landing} className="w-full mb-6" alt="" />
          <DivWithHeading>
            <h3>The Challenge</h3>
            <p>
              Since 2021 when NFTs and the metaverse became widely adopted, there has been a large entrance of creators and buyers. Sometimes, one would only hear about an NFT project with a unique offering after its minting price becomes really expensive.
            </p>
            <p>
              Since there’s a lot of marketplace for these NFTs and metaverse projects, its become more difficult to stay updated with recent information as users will have to sort through several platforms to accumulate information.
            </p>
          </DivWithHeading>
          <DivWithHeading>
            <h3>The Solution</h3>
            <p>
              Having the information you seek all organised in one place is a big flex. Having these information sent to your mailbox is just simply amazing.
            </p>
            <p>
              Stephar has designed a platform that caters for this need. Users get to access all relevant updates and data informed analytics about NFTs and  the metaverse all in one place.
            </p>
          </DivWithHeading>
        </div>

        <img src={Chart} className="w-full my-10 text" alt="" />
        <DivWithHeading className=" !max-w-4xl">
          <h3>Wireframes</h3>
          <p>
            A users first impression is formed typically within the first 50 milliseconds of encountering a product. In today’s competitive market, strong visual design is a key differentiator for the user.
          </p>
          <p>
            I focused primarily on creating a simple to use yet intuitive interface that accomodates all the key features of Stephar.
          </p>
        </DivWithHeading>
        <img src={Wireframe} alt="" className="w-full" />
      </div>
    </div>
  )
}


const DivWithHeading = styled.div`
  max-width: 48rem;
  margin: auto;
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
   }	
`;