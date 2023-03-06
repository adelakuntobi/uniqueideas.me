import React from 'react'
import styled from 'styled-components';
import { TitleHeading } from '../../components/SelectedWorks';

export default function Experience() {
  return (
    <section id='experience' className='lg:my-20 flex flex-col lg:flex-row gap-x-20 gap-y-10'>

      <div className='w-full lg:w-1/2'>
        <TitleHeading>Experience</TitleHeading>
        <div>
          <ExperienceDiv data-aos="fade-up-right" >
            <p>Aeeiee.inc, <span>February 2021 - today</span></p>
            <p>UI/UX Designer</p>
          </ExperienceDiv>
          <ExperienceDiv data-aos="fade-up-right" data-aos-delay="500" >
            <p>Crownswap, <span>September 2020 - February 2021</span></p>
            <p>UI/UX Designer</p>
          </ExperienceDiv>
          <ExperienceDiv data-aos="fade-up-right" data-aos-delay="1000" >
            <p>Liquid Driver, <span>August 2020- December 2020</span></p>
            <p>User Interface Designer</p>
          </ExperienceDiv>
          <ExperienceDiv data-aos="fade-up-right" data-aos-delay="1500" >
            <p>HNGi7, <span>May 2020 - August 2020</span></p>
            <p>UI/UX Intern (Finalist)</p>
          </ExperienceDiv>
          {/* <ExperienceDiv data-aos="fade-up-right" data-aos-delay="2000" >
            <p>Innovation Growth Hub, <span>Dec 2019 - March 2020</span></p>
            <p>User Experience Intern</p>
          </ExperienceDiv> */}
          <ExperienceDiv data-aos="fade-up-right" data-aos-delay="2000" >
            <p>Infusion Lawyers, <span>August 2018 - June 2020</span></p>
            <p>Brand Designer</p>
          </ExperienceDiv>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <TitleHeading>Skills</TitleHeading>
        <Skills>
          <li  data-aos="fade-up-left">Visual Design</li>
          <li data-aos="fade-up-left" data-aos-delay="500">User Experience Design</li>
          <li data-aos="fade-up-left" data-aos-delay="750">Interaction Design</li>
          <li data-aos="fade-up-left" data-aos-delay="1000">Product Strategy </li>
          <li data-aos="fade-up-left" data-aos-delay="1250">User Research</li>
          <li data-aos="fade-up-left" data-aos-delay="1500">Brand Design</li>
          <li data-aos="fade-up-left" data-aos-delay="1750">Usability Testing</li>
          <li data-aos="fade-up-left" data-aos-delay="2000">Motion Graphics</li>
        </Skills>
      </div>

    </section>
  )
}

const ExperienceDiv = styled.div`
  border-bottom: 1px solid #374151;
  padding: 1.5rem 0;
  &:last-of-type{
    border-bottom: 0;      
    }
  p{
    color: #F3F4F6;
    font-size: 24px;
    line-height: 27px;
    font-weight: 400;
    margin-bottom: 0.75rem;
    &:last-of-type{
      margin-bottom: 0;
    }
    span{
      opacity: 0.6;
    } 
  }
  @media (max-width: 1024px) { 
    padding: 1rem 0;
    p{
      font-size: 18px;
      line-height: 24px;
    }	
   }	
`;

const Skills = styled.ul`

  li{
    border-bottom: 1px solid #374151;
    padding: 1.5rem 0;
  font-size: 24px;
    line-height: 27px;
  &:last-of-type{
    border-bottom: 0;
      
    } 
    } 
    @media (max-width: 1024px) { 
    
    li{
      font-size: 18px;
      line-height: 24px;
      padding: 1rem 0;
    }	
   }	
`;