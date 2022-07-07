import React from 'react'
import styled from 'styled-components';
import { TitleHeading } from '../../components/SelectedWorks';

export default function Experience() {
  return (
    <section id='experience' className='lg:my-20 flex flex-col lg:flex-row gap-x-20 gap-y-10'>

      <div className='w-full lg:w-1/2'>
        <TitleHeading>Experience</TitleHeading>
        <div>
          <ExperienceDiv>
            <p>Aeeiee.inc, <span>Februrary 2021 - today</span></p>
            <p>User Experience Designer</p>
          </ExperienceDiv>
          <ExperienceDiv>
            <p>Crownswap, <span>September - Februrary 2021</span></p>
            <p>User Experience Designer - Contract</p>
          </ExperienceDiv>
          <ExperienceDiv>
            <p>HNGi7, <span>May 2020 - August 2020</span></p>
            <p>User Experience Intern</p>
          </ExperienceDiv>
          <ExperienceDiv>
            <p>Innovation Growth Hub, <span>Dec 2019 - March 2020</span></p>
            <p>User Experience Intern</p>
          </ExperienceDiv>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <TitleHeading>Skills</TitleHeading>
        <Skills>
          <li>Visual Design</li>
          <li>Interface Design</li>
          <li>User Experience Design</li>
          <li>User Research</li>
          <li>Usability Testing</li>
          <li>Product Stretegy</li>
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