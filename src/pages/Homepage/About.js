import React from 'react'
import styled from 'styled-components'
import { TitleHeading } from '../../components/SelectedWorks'

export default function About() {
  return (
    <section className='py-24'>
      <TitleHeading>About Me</TitleHeading>
      <div className=' lg:w-10/12'>
        <Ptag className='text-lg lg:text-3xl'>
          In the past few years, I’ve worked across B2B, B2C firms in varying niches creating long lasting experiences that are focused on simplicity, accessibility, inclusivity and relatable interactions.
        </Ptag>
        <Ptag className='text-lg lg:text-3xl'>
          I enjoy the process of taking products from 0 to 1, navigating from product strategy and customer feedback, combing through data, and balancing business and user needs to create functional products.
        </Ptag>
        <Ptag className='text-lg lg:text-3xl'>
          At my leisure, I spend time surfing the internet randomly scrolling through products and digging deep through the thought process of talented creators especially in rising technogies like AR/VR and blockchain development.
        </Ptag>
        <Ptag className='text-lg lg:text-3xl'>
          Outside Design, I love to chill and vibe to good music.
        </Ptag>
      </div>
    </section>
  )
}

const Ptag = styled.p`
  font-style: normal;
/* font-weight: 450; */
/* font-size: 1.75rem; */
line-height: 40px;
/* or 125% */
margin-bottom: 1.5rem;


color: #E5E7EB;

`;