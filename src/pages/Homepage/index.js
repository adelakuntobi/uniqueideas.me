
import Navbar from '../../components/Navbar'
import { selected } from "../../assets/images";
import { SelectedWork, TitleHeading } from '../../components/SelectedWorks';
import About from './About';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Experience from './Experience';
import * as PageURL from "../../utils/pageUrl"


const HeaderDiv = styled.header`
  height: calc( 100vh - 200px);
`;

const ReadyToWork = styled.header`
  border-top: 1px solid #6B7280;
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
      ]
    },
    {
      img: selected,
      title: "BervHome Tests",
      route: PageURL.BERVHOME,
      desc: [
        "Research",
        "Strategy",
        "Design"
      ]
    },
    {
      img: selected,
      title: "Stephar",
      route: PageURL.STEPHAR,
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
    {
      img: selected,
      title: "EveryPenny",
      route: PageURL.STEPHAR,
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
   
  ]

  return (
    <div className='container relative'>
      <header className='min-h-screen'>
        <Navbar />
        <HeaderDiv className='justify-between'>
          <h1 className='text-5xl font-bold'>Passionately designing thoughtful, intuitive, and delightful experiences for all human.</h1>
          <p className='text-primary'>
            Hi, my name is{" "}
            <span className='font-medium uppercase'>Ify</span>.
            <br />
            A product designer passionate about solving complex issues by designing user-friendly digital products and
            web experiences.</p>
        </HeaderDiv>
      </header>

      <main>

        {/* Selected Works */}
        <section className='border-t border-b py-12' style={{ borderColor: "#374151" }}>
          <TitleHeading>Selected -- Works</TitleHeading>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10'>
            {
              SelectedArray.map((item, num) => {
                return (
                  <SelectedWork key={num} name={item.title} img={item.img} desc={item.desc} route={item.route} />
                )
              })
            }
          </div>
        </section>
        <section className='border-t border-b py-12' style={{ borderColor: "#374151" }}>
          <TitleHeading>Branding</TitleHeading>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10'>
            {
              SelectedArray.map((item, num) => {
                return (
                  <SelectedWork key={num} name={item.title} img={item.img} desc={item.desc} route={item.route} />
                )
              })
            }
          </div>
        </section>
        {/* End of Selected Works */}


        <About />

        <Experience />

        {/* Lets get to work */}
        <ReadyToWork className='items-center flex-col'>
          <p className='mb-7 text-4xl'> &#x1F642;</p>
          <h5 className='uppercase font-bold text-xs mb-2' style={{ color: "#9CA3AF" }}>Ready to start a project?</h5>
          <h2 className='text-text font-bold text-3xl mb-7'>Let's work together</h2>
          <button className='bg-primary py-4 px-9 text-black'>Email Me</button>
        </ReadyToWork>
      </main>

      <Footer />
    </div>
  )
}
export default Homepage