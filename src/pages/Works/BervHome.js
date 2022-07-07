
// images
import {
  BervHomeBG,
  cult, iCliniq,
  labbox, letsgetchecked,
  practo, workflow, architecture, BervGif,
  BervGroup1, BervGroup2,

  wireframe1, wireframe2, wireframe3, wireframe4, wireframe5,
  wireframe6, wireframe7, wireframe8,

  User1, User2,
} from "../../assets/images"

// React Icons
import { BiSearch } from "react-icons/bi"
import { TbBriefcase, TbUserCircle } from "react-icons/tb"

import Layout, { DivWithHeading, MyRole } from "./Layout";
import { BERVHOME } from "../../utils/pageUrl";
import styled from "styled-components";
const UserPersonal = [
  {
    img: User1,
    fullName: "Kenechi Ezenwanne",
    occupation: "Medical Lab Scientist",
    age: 35,
    goals: [
      "Prepare for patient’s visit.",
      "Analysing health conditions and creating theories out of these findings.",
      "Learning more about recent technologies and scaling up my career ladder.",
      "Being able to impact the world with knowledge I’ve acquired so we stay healthy.",
    ],
    frustrations: [
      "Difficulty in managing entrance and exit of patients",
      "Lots of time spent in registering patients and getting their biodata",
      "Uncertainities in patient’s medical history. Some tell lies to make their situation look less severe.",
    ]
  },
  {
    img: User2,
    fullName: "Fola Adetunji",
    occupation: "Chronic Diabetes Patient",
    age: 40,
    goals: [
      "Get his routine tests done as at when due without visiting the diagnostics center often. ",
      "Be able to access his medical history as soon as he needs them.",
      "Book consultations with professionals from the comfort of his home.",
    ],
    frustrations: [
      "Constant delay whenever he wants to get his tests done",
      "Physically documenting his results and having to sort through loads of paper when he needs them.",
      "Steady visit to the diagnostics center since its a priority that he checks his sugar level often.",
    ]
  },
]
export default function BervHome() {
  const images = [
    wireframe1, wireframe2, wireframe3, wireframe4, wireframe5,
    wireframe6, wireframe7, wireframe8,
  ]
  return (
    <Layout
      title="BervHome Tests"
      banner={BervHomeBG}
      next="Fintech"
      textDesc="Personal Finance Management"
      route={BERVHOME}>

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
          <p className=" leading-6 lg:!leading-10 lg:!mb-8">
            Physical visits to the diagnostics center are usually time consuming. Most times, we exhaust our day sitting patiently waiting at the doctor’s. Other times we walk away. Even times when we decide to schedule, there are usully inefficiences that stands as blockers.
          </p>
          <p className="  leading-6 lg:!leading-10">
            This has contributed to a great extent to the rate of deterioration of the human health as most individuals purposely miss their checkups or pathological lab appointments because its stressful to get them done.
          </p>
        </DivWithHeading>
        <DivWithHeading>
          <h3>Design Strategy and Solution</h3>
          <div className="flex items-start gap-6 mb-8 mt-6">
            <div className=" h-16 w-16 p-4 hidden lg:grid place-items-center rounded-full" style={{ backgroundColor: "#FEF3C7" }}>
              <TbBriefcase className="text-black text-3xl" />
            </div>
            <div>
              <h4 className="font-semibold mb-4 mt-2 text-2xl">Business Goals</h4>
              <p>In a world of complexities and constant thrive, being in a perfect state of health is top priority. Berv Diagnostics Center aims to help you actualize your health goals without hassle by providing health sustaining facilities to you at the comfort of your home. The aim is to help you live healthier for longer.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className=" h-16 w-16 p-4 hidden lg:grid place-items-center rounded-full" style={{ backgroundColor: "#FEF3C7" }}>
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
        <div className="grid gap-x-2 gap-y-4 grid-cols-2 md:grid-cols-5 place-items-center">
          <img src={iCliniq} alt="" />
          <img src={practo} alt="" />
          <img src={labbox} alt="" />
          <img src={cult} alt="" />
          <img src={letsgetchecked} alt="" />
        </div>
      </DivWithHeading>

      <DivWithHeading className=" !max-w-4xl mx-auto">
        <h3 className="text-center">Workflow Stages</h3>
        <img src={workflow} alt="" className="w-full" />
      </DivWithHeading>

      <DivWithHeading className=" !max-w-4xl mx-auto">
        <h3 className="text-center">Information Architecture</h3>
        <img src={architecture} alt="" className="w-full" />
      </DivWithHeading>

      <DivWithHeading className=" !max-w-5xl mx-auto">
        <h3 className="text-center">User Persona</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {
            UserPersonal.map(user => {
              return (

                <UserPersona key={user.age}>
                  <div className="imgAndText">
                    <img src={user.img} alt="" />
                    <div className=" ">
                      <h5>{user.fullName}</h5>
                      <p className="!my-1" style={{ color: "#D1E2C0" }}>{user.occupation}</p>
                      <p>{user.age} years</p>
                    </div>
                  </div>
                  <div className="my-8">
                    <h6>Goals</h6>
                    <ul>
                      {
                        user.goals.map(goal => {
                          return (
                            <li key={goal}>{goal}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div>
                    <h6>Frustrations</h6>
                    <ul>
                      {
                        user.frustrations.map(frustration => {
                          return (
                            <li key={frustration}>{frustration}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </UserPersona>

              )
            })
          }
        </div>
      </DivWithHeading >

      <DivWithHeading className=" !max-w-5xl mx-auto">
        <h3 className="text-center">User Interface Screens</h3>
        <img src={BervGif} className="w-full" alt="" />

      </DivWithHeading>

      <div className=" max-w-7xl mx-auto">
        <img src={BervGroup1} className="w-full" alt="" />
        <img src={BervGroup2} className="w-full" alt="" />

        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            images.map(element => {
              return (
                <img key={element} src={element} alt="" className="w-full" />
              )
            })
          }
        </div>
      </div>
    </Layout >
  )
}



const UserPersona = styled.div`
  .imgAndText{
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-wrap: wrap;
    span{
      color: #D1E2C0;
    }
    h5{
      font-weight: 500;
      font-size: 24px !important;
      letter-spacing: -0.011em !important;
      color: #F9FAFB;
    }
    p{
      color: #D1D5DB;
      font-size: 18px !important;
    }
  }
  h6{
    font-weight: 700;
    font-size: 24px;
    line-height: 48px;
    letter-spacing: -0.022em;
    color: #F9FAFB;
  }
  ul{
    margin: 1rem 0;
  }
  li{
    font-size: 18px;
    line-height: 24px;
    color: #D1D5DB;
    margin: 0 !important;
  }
  @media (max-width: 640px) { 
    img{
      width: 100%;
    }
   }	
`;