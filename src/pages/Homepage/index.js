import React from 'react'
import Navbar from '../../components/Navbar'
import { selected } from "../../assets/images";
import { SelectedWork } from '../../components/SelectedWorks';
import About from './About';

const Homepage = () => {
  const SelectedArray = [
    {
      img: selected,
      title: "Testing Header",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
    {
      img: selected,
      title: "Testing Header",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
    {
      img: selected,
      title: "Testing Header",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
    {
      img: selected,
      title: "Testing Header",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
    {
      img: selected,
      title: "Testing Header",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
    {
      img: selected,
      title: "Testing Header",
      desc: [
        "Research",
        "Innovative",
        "Design"
      ]
    },
  ]
  return (
    <div className='container'>
      <header className=''>
        <Navbar />
        <div className='justify-between min-h-screen'>
          <h1 className='text-5xl font-bold'>Passionately designing thoughtful, intuitive, and delightful experiences for all human.</h1>
          <p className='text-primary'>
            Hi, my name is{" "}
            <span className='text-white uppercase'>Ify</span>.
            <br />
            A product designer passionate about solving complex issues by designing user-friendly digital products and
            web experiences.</p>
        </div>
      </header>

      <main>
        {/* Selected Works */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-10'>
          {
            SelectedArray.map((item,num) => {
              return (
                <SelectedWork key={num} name={item.title} img={item.img} desc={item.desc} />
              )
            })
          }

        </section>
        {/* End of Selected Works */}
        <About />
      </main>
    </div>
  )
}
export default Homepage