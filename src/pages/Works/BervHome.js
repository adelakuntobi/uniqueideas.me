
// images
import {
  BervHomeBG,
  cult, iCliniq,
   labbox, letsgetchecked,
  practo, workflow, architecture,
} from "../../assets/images"

// React Icons
import { BiSearch } from "react-icons/bi"
import { TbBriefcase, TbUserCircle } from "react-icons/tb"

import Layout, { DivWithHeading, MyRole } from "./Layout";

export default function BervHome() {
  return (
    <Layout
      title="BervHome Tests"
      banner={BervHomeBG}
      next="Fintech platform">

      {/* About Section */}
      <DivWithHeading className="my-6">
        <h3>About BervHome Test</h3>
        <p>
          <b>BervHomeTests</b> is an impactful health innovation granting people access to easier analysis of health conditions without having them wait through long queues. At home laboratory testing is clearly private and convenient and have proven to be reliable. One can have series of important tests without leaving the comfort of their home.
        </p>
        <p>
          Here, BervHomeTests sends an expert team will get to you at a pre-scheduled time, conduct the test and avail the results within a timeframe of 24-48 hours.
        </p>
      </DivWithHeading>
      <MyRole>
        <p>My role</p>
        <ul>
          <li>User Reasearch</li>
          <li>Product Strategy</li>
          <li>Interface Design</li>
          <li>Branding</li>
        </ul>
      </MyRole>
      <div className="my-12">

        <DivWithHeading>
          <h3 className="flex items-center gap-4">
            <div className=" w-9 h-9 grid place-items-center bg-white rounded-full">
              <BiSearch className="text-black text-xl" />
            </div>
            Why BervHomeTests?</h3>
          <p className=" !leading-10 lg:!mb-8">
            Since 2021 when NFTs and the metaverse became widely adopted, there has been a large entrance of creators and buyers. Sometimes, one would only hear about an NFT project with a unique offering after its minting price becomes really expensive.
          </p>
          <p className=" !leading-10">
            Since there’s a lot of marketplace for these NFTs and metaverse projects, its become more difficult to stay updated with recent information as users will have to sort through several platforms to accumulate information.
          </p>
        </DivWithHeading>
        <DivWithHeading>
          <h3>Design Strategy and Solution</h3>
          <div className="flex items-start gap-6 mb-8 mt-6">
            <div className=" h-16 w-16 p-4 grid place-items-center rounded-full" style={{ backgroundColor: "#FEF3C7" }}>
              <TbBriefcase className="text-black text-3xl" />
            </div>
            <div>
              <h4 className="font-semibold mb-4 mt-2 text-2xl">Business Goals</h4>
              <p>In a world of complexities and constant thrive, being in a perfect state of health is top priority. Berv Diagnostics Center aims to help you actualize your health goals without hassle by providing health sustaining facilities to you at the comfort of your home. The aim is to help you live healthier for longer.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className=" h-16 w-16 p-4 grid place-items-center rounded-full" style={{ backgroundColor: "#FEF3C7" }}>
              <TbUserCircle className="text-black text-3xl" />
            </div>
            <div>
              <h4 className="font-semibold mb-4 mt-2 text-2xl">User Goals</h4>
              <p>Health is wealtth. We all hate to fall ill but its difficult to just randomly visit a diagnostic center when I feel i’m in perfect health condition because its difficult to get anything done there. Imagine having to wait through lots of people just to confirm my blood group.
              </p>
              <p>
                I want to perfectly understand my body so I can be in more control and make decisions that will be best for me medically.</p>
            </div>
          </div>

        </DivWithHeading>
      </div>


      <DivWithHeading className="">
        <h3>Target Audience</h3>
        <p>
          <b>BervHome Tests</b> is primariliy focused on three major stakeholders in the health sector;  the patient, the lab centers, the doctors. BervHomeTest is creating an innovation that promotes good health by making all that humanity needs to keep their body in check  like home visit lab tests and access to professional doctors available. </p>
      </DivWithHeading>
      <DivWithHeading className="">
        <h3>Market and Competitive Analysis</h3>
        <p className="!mb-10">
          At-Home-Lab-Tests is one of the futuristic health innovations in practice today. To have access to a wide range of analysis, determine our lab markers and blood results without the wait at the doctors, at the lab or having to meet a lot of persons is really impressive.
        </p>
        <p>
          Building a product like BervHomeTest required that we have to properly understand the industry and competitive forces within the industry. I had questions that i got clarity on by carefully analysing existing platforms and making hypothesis on discoveries made.
        </p>
      </DivWithHeading>
      <DivWithHeading>
        <p className="!mb-4">Brands I reviewed include:</p>
        <div className="flex items-center justify-between">
          <img src={iCliniq} alt="" />
          <img src={practo} alt="" />
          <img src={labbox} alt="" />
          <img src={cult} alt="" />
          <img src={letsgetchecked} alt="" />
        </div>
      </DivWithHeading>

      <DivWithHeading className=" !max-w-4xl mx-auto">
        <h3 className="text-center">Workflow Stages</h3>
        <img src={workflow} alt=""  className="w-full" />
      </DivWithHeading>

      <DivWithHeading className=" !max-w-4xl mx-auto">
        <h3 className="text-center">Information Architecture</h3>
        <img src={architecture} alt="" className="w-full" />
      </DivWithHeading>

      <DivWithHeading className=" !max-w-5xl mx-auto">
        <h3 className="text-center">User Persona</h3>
        <img src={architecture} alt=""  className="w-full"/>
      </DivWithHeading>
      <DivWithHeading className=" !max-w-5xl mx-auto">
        <h3 className="text-center">Wireframes</h3>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(12)].map((x, i) =>
          <img
            src={require(`../../assets/images/bervHome/wireframe${i + 2}.svg`)}
            alt="" key={i + 1} className="w-full" />
        )}
      </div>
      </DivWithHeading>



      <DivWithHeading className="mt-40">
        <h3>Outcome</h3>
        <p>After successful completion of the interface for Stephar, a usability test was conducted with five participants. While most feedback received was  positive, we are still constantly iterating to ensure best experience for our users while keeping the business goal at the forefront of our thoughts.</p>
      </DivWithHeading>

    </Layout>
  )
}
