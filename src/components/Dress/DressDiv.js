import React from 'react'
import styled from 'styled-components';

export default function DressDiv(props) {
  const { children } = props
  return (
    <DressStyle>
      <div className='w-9/12 lg:w-7/12 py-12 lg:py-24 pl-10 lg:pl-20'>
        {children}
      </div>
      <div className='lines flex items-center gap-4 lg:gap-10 w-3/12 lg:w-5/12 justify-center'>
        <div className='first'></div>
        <div className='second'></div>
      </div>
    </DressStyle>
  )
}

const DressStyle = styled.div`
  display: flex;
  position: relative;
  gap: 1.5rem;
  p{
    margin-bottom: 1.5rem;
    color: #F9FAFB;
    font-size: 30px;
    &:last-of-type{
      margin-bottom: 0;
    }
  }

  .lines{ 
    div{
      width: 22px;
      height: 100%;
      background: #FDC741;
    }
  }

  @media (max-width: 1024px) { 
    p{
    margin-bottom: 1rem;
    font-size: 16px;
    }
   }	
`;
