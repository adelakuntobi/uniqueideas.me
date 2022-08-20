
import Navbar from '../../components/Navbar'
import { SelectedWork } from '../../components/SelectedWorks';
import About from './About';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Experience from './Experience';
import * as PageURL from "../../utils/pageUrl"
import { HiOutlineArrowRight } from "react-icons/hi"

import HeaderPhoto from "../../assets/images/photo.svg"
import Roller from "../../assets/images/roller.png"
import Stephar from "../../assets/images/landing/stephar.svg"
import Bervhome from "../../assets/images/landing/bervhome.svg"
import Everypenny from "../../assets/images/landing/everypenny.svg"
import DressBranding from "../../assets/images/landing/dm-app.svg"
import DressManagement from "../../assets/images/landing/dress-measurement.svg"
import Urbn from "../../assets/images/landing/urbn.svg"
import { Link } from "react-scroll"
import * as Scroll from 'react-scroll';

import Happiness from "../../assets/images/happiness.png"
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';




const HeaderDiv = styled.section`
  height: calc( 100vh - 120px);
`;

const ReadyToWork = styled.section`
  border-top: 1px solid #374151;
  /* border-bottom: 1px solid #6B7280; */
  padding-top: 3rem;
  padding-bottom: 3rem;
`;



const Homepage = () => {
  const [loaded, setLoaded] = useState(false)
  const Element = Scroll.Element;


  useEffect(() => {
    new Typewriter("#type", {
      loop: true,
      deleteSpeed: 100,
      delay: 200,
      strings: ['thoughtful', 'intuitive', 'delightful'],
      autoStart: true,
      cursor: "",
    });
  }, [])

  const LeftArray = [
    {
      title: "Dress Measurement",
      route: PageURL.DRESS_MANAGEMENT,
      case: "UX Case Study",
      img: DressManagement
    },
    {
      title: "Stephar",
      route: PageURL.STEPHAR,
      case: "UX Case Study",
      img: Stephar
    },
    {
      title: "Dress Measurement App",
      route: PageURL.DRESS_BRANDING,
      case: "Branding",
      img: DressBranding
    },


  ]
  const RightArray = [
    {
      title: "BervHome Tests",
      route: PageURL.BERVHOME,
      case: "UX Case Study",
      img: Bervhome,
    },
    {
      title: "EveryPenny",
      route: "/",
      case: "UX Case Study",
      img: Everypenny,
      comingSoon: true,
    },
    {
      title: "URBN Brand",
      route: PageURL.URBN,
      case: "Branding",
      img: Urbn
    },
  ]

  return (
    <div className='container relative'>
      {!loaded && <Loader />}
      <header className='min-h-screen'>
        <Navbar />
        <HeaderDiv className='flex-col gap-y-6 lg:flex-row justify-center lg:justify-between flex items-center '>

          <div className='lg:w-7/12'>
            <p className='text-primary text-lg lg:text-2xl'>Hello, I'm <span className='font-bold uppercase'>Ify</span></p>
            <h1 className='ivy text-4xl lg:text-6xl font-bold !leading-tight tracking-wide mb-4'>
              Designing {" "}
              <span id="type"></span>
              {" "} experiences for all.
            </h1>
            <p className='text-primary text-lg lg:text-2xl hidden lg:block max-w-xl'>
              I'm a Product Designer and Visual Thinker passionate about designing intuitive products that are accessible to everyone.
            </p>
          </div>
          <div className='relative lg:mb-3 lg:w-5/12 grid place-items-center'>
            <img src={HeaderPhoto} className="w-full" alt="" onLoad={() => setLoaded(true)} />
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500} className=' cursor-pointer absolute right-0 bottom-10'>
              <div className='relative p-6 lg:p-12 grid place-items-center'>
                <img src={Roller} alt="" className='absolute animate-spin' />
                <HiOutlineArrowRight className='text-5xl' />
              </div>
            </Link>
          </div>
          <p data-aos="fade-right" data-aos-delay="1000" className='text-primary text-lg lg:text-2xl block lg:hidden'>
            I'm a Product Designer and Visual Thinker passionate about designing intuitive products that are accessible to everyone.
          </p>
        </HeaderDiv>
      </header>

      <main>

        {/* Selected Works */}
        <Element name="works" id="works">

          <section className='border-t border-b py-12' style={{ borderColor: "#374151" }}>
            <h3 className='font-bold ivy text-4xl lg:pl-7 mt-2 mb-5'>Selected Works</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16  '>
              <div>
                {
                  LeftArray.map((item, num) => {
                    return (
                      <SelectedWork key={num} item={item}
                      />
                    )
                  })
                }
              </div>


              <div className='lg:pt-20'>
                {
                  RightArray.map((item, num) => {
                    return (
                      <SelectedWork key={num} item={item} />
                    )
                  })
                }
              </div>
            </div>
          </section>
        </Element>
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
            <button className='bg-primary py-4 px-9 font-medium text-black'>Email Me</button>
          </a>
        </ReadyToWork>
      </main>

      <Footer />
    </div>
  )
}
export default Homepage