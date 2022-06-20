import React from 'react'
import styled from 'styled-components';
import { TitleHeading } from '../../components/SelectedWorks';

export default function Experience() {
  return (
    <section className='my-20 flex gap-x-20'>
      <div className='w-full lg:w-1/2'>
        <TitleHeading>Experience</TitleHeading>
        <div>
          <ExperienceDiv>
            <p>Aeeiee.inc <span>Februrary 2021 - today</span></p>
            <p>User Experience Designer</p>
          </ExperienceDiv>
          <ExperienceDiv>
            <p>Aeeiee.inc <span>Februrary 2021 - today</span></p>
            <p>User Experience Designer</p>
          </ExperienceDiv>
          <ExperienceDiv>
            <p>Aeeiee.inc <span>Februrary 2021 - today</span></p>
            <p>User Experience Designer</p>
          </ExperienceDiv>
          <ExperienceDiv>
            <p>Aeeiee.inc, <span>Februrary 2021 - today</span></p>
            <p>User Experience Designer</p>
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
  
`;