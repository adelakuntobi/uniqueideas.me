
// images
import { StepharBG } from "../../assets/images"
import { Landing } from "../../assets/images"
import { Chart } from "../../assets/images"
import { Wireframe } from "../../assets/images"

import { StephInterface1 } from "../../assets/images"
import { StephInterface2 } from "../../assets/images"
import { StephInterface3 } from "../../assets/images"
import { StephInterface4 } from "../../assets/images"
import { StephInterface5 } from "../../assets/images"

import Layout, { DivWithHeading, MyRole } from "./Layout";

export default function Stephar() {
  return (
    <Layout
      title="Stephar"
      banner={StepharBG}
      next="Fintech platform">

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
      <MyRole>
        <p>My role</p>
        <ul>
          <li>User Reasearch</li>
          <li>Product Strategy</li>
          <li>Visual Design</li>
        </ul>
      </MyRole>
      <div className="my-12">
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
      <DivWithHeading className="">
        <h3>Wireframes</h3>
        <p>
          A users first impression is formed typically within the first 50 milliseconds of encountering a product. In today’s competitive market, strong visual design is a key differentiator for the user.
        </p>
        <p>
          I focused primarily on creating a simple to use yet intuitive interface that accomodates all the key features of Stephar.
        </p>
      </DivWithHeading>
      <img src={Wireframe} alt="" className="w-full my-10" />
      <DivWithHeading>
        <h3>App Interface</h3>
        <p>
          Choosing a dashboard approach helped in ensuring every core function of the app was reachable in a glance.
        </p>
        <p>
          The dashboard helps you easily access recent occurences by showing an overview while accomodating drops and their current status, all projects sorted into their respective categories and blockchain, drop updates sortable by status and date and a full blown out page containing resources that would help everyone get started
        </p>
      </DivWithHeading>

      <div className="flex flex-col gap-6 my-10">
        <img src={StephInterface1} alt="" />
        <img src={StephInterface2} alt="" />
        <img src={StephInterface3} alt="" />
        <img src={StephInterface4} alt="" />
        <img src={StephInterface5} alt="" />
      </div>

      <DivWithHeading className="mt-40">
        <h3>Outcome</h3>
        <p>After successful completion of the interface for Stephar, a usability test was conducted with five participants. While most feedback received was  positive, we are still constantly iterating to ensure best experience for our users while keeping the business goal at the forefront of our thoughts.</p>
      </DivWithHeading>

    </Layout>
  )
}
