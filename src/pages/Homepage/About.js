import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <section id='about' className='py-16 lg:py-24 text-center mx-auto'>
      {/* <TitleHeading>About Me</TitleHeading> */}
      <div className='mx-auto max-w-4xl'>
        <Ptag className='text-lg lg:text-3xl'>In my 3 years of experience, I’ve worked across B2B, B2C firms in varying niches creating long lasting experiences that are focused on simplicity, accessibility, inclusivity and relatable interactions.</Ptag>
        <Ptag className='text-lg lg:text-3xl'>I enjoy the process of taking products from 0 to 1, navigating from product strategy and customer feedback, combing through data, and balancing business and user needs to create functional products.</Ptag>
        <Ptag className='text-lg lg:text-3xl'>I’m interested in AR/VR and I’m eager to contribute to enhance its impact on our day-to-day living.</Ptag>
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
@media (max-width: 1024px) { 
  line-height: 30px;
/* or 125% */
margin-bottom: 1rem;
   }	

`;