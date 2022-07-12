
import Navbar from '../../components/Navbar'
import { selected } from "../../assets/images";
import { SelectedWork, TitleHeading } from '../../components/SelectedWorks';
import About from './About';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Experience from './Experience';
import * as PageURL from "../../utils/pageUrl"
import { HiOutlineArrowRight } from "react-icons/hi"

import Stephar from "../../assets/images/landing/stephar.svg"
import Bervhome from "../../assets/images/landing/bervhome.svg"
import Everypenny from "../../assets/images/landing/everypenny.svg"
import DressBranding from "../../assets/images/landing/dressBranding.svg"
import DressManagement from "../../assets/images/landing/dressManagement.svg"
import Urbn from "../../assets/images/landing/urbn.svg"


import Happiness from "../../assets/images/happiness.png"

const HeaderDiv = styled.header`
  height: calc( 100vh - 200px);
`;

const ReadyToWork = styled.section`
  border-top: 1px solid #374151;
  /* border-bottom: 1px solid #6B7280; */
  padding-top: 3rem;
  padding-bottom: 3rem;
`;


const Homepage = () => {
  const SelectedArray = [
    {
      img: selected,
      title: "Dress Measurement",
      route: PageURL.DRESS_MANAGEMENT,
      desc: [
        "Research",
        "Strategy",
        "Design"
      ],
      color: "#FDC741",
      imageText: "Easily take, store and share your measurements",
      case: "UX Case Study",
      imageImg: DressManagement
    },
    {
      img: selected,
      title: "BervHome Tests",
      route: PageURL.BERVHOME,
      desc: [
        "Research",
        "Strategy",
        "Design"
      ],
      color: "#FEF3C7",
      imageText: "At-home tests for everyone",
      case: "UX Case Study",
      imageImg: Bervhome,
    },
    {
      img: selected,
      title: "Stephar",
      route: PageURL.STEPHAR,
      desc: [
        "Research",
        "Innovative",
        "Design"
      ],
      color: "#41BED4",
      imageText: "Metaverse and NFT Analysis platform",
      case: "UX Case Study",
      imageImg: Stephar
    },
    {
      img: selected,
      title: "EveryPenny",
      route: "/",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ],
      color: "#4159D4",
      imageText: "Personal Finance Management",
      case: "UX Case Study",
      imageImg: Everypenny,
      comingSoon: true,
    },

  ]
  const BrandingArray = [
    {
      img: selected,
      title: "Dress Measurement App",
      route: PageURL.DRESS_BRANDING,
      desc: [
        "Research",
        "Branding"
      ],
      color: "#41BED4",
      imageText: "Easily take, store and share your measurements",
      case: "Branding",
      imageImg: DressBranding
    },
    {
      img: selected,
      title: "URBN Brand",
      route: PageURL.URBN,
      desc: [
        "Research",
        "Branding"
      ],
      color: "#FF5254",
      imageText: "Streetwear Fashion Brand",
      case: "Branding",
      imageImg: Urbn
    },
  ]

  return (
    <div className='container relative'>
      <header className='min-h-screen'>
        <Navbar />
        <HeaderDiv className='flex-col lg:flex-row justify-center lg:justify-between flex items-center '>
          <div className='lg:w-7/12'>
            <h1 className='text-3xl lg:text-5xl font-bold leading-tight tracking-wide mb-4'>Passionately designing thoughtful, intuitive, and delightful experiences for all human.</h1>
            <p className='text-primary text-base lg:text-lg tracking-wideimage.png'>
              Hi, I’m <span className='font-medium'>IFY, a product designer passionate</span> about people and how technology enhances our living experience. I love to create products that people love and trust.
            </p>
          </div>
          <div className='lg:w-5/12 grid place-items-center'>
            <HiOutlineArrowRight className='text-5xl' />
          </div>
        </HeaderDiv>
      </header>

      <main>

        {/* Selected Works */}
        <section id='works' className='border-t border-b py-12' style={{ borderColor: "#374151" }}>
          <TitleHeading>Selected -- Works</TitleHeading>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10'>
            {
              SelectedArray.map((item, num) => {
                return (
                  <SelectedWork key={num} item={item} />
                )
              })
            }
          </div>
        </section>
        <section className='border-t border-b py-12' style={{ borderColor: "#374151" }}>
          <TitleHeading>Branding Projects</TitleHeading>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10'>
            {
              BrandingArray.map((item, num) => {
                return (
                  <SelectedWork key={num} item={item} />
                )
              })
            }
          </div>
        </section>
        {/* End of Selected Works */}


        <About />

        <Experience />

        {/* Lets get to work */}
        <ReadyToWork id="contact" className='items-center flex-col'>
          <p className='mb-7 text-4xl'>
            <img src={Happiness} alt="" className='w-10 ' />
          </p>
          <h5 className='uppercase font-bold text-xs mb-2' style={{ color: "#9CA3AF" }}>Ready to start a project?</h5>
          <h2 className='text-text font-bold text-3xl mb-7'>Let's work together</h2>
          <a href="mailto:Uniqueideas85@gmail.com">
            <button className='bg-primary py-4 px-9 text-black'>Email Me</button>
          </a>
        </ReadyToWork>
      </main>

      <Footer />
    </div>
  )
}
export default Homepage