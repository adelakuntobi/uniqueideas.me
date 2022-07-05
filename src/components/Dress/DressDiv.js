import React from 'react'
import styled from 'styled-components';

export default function DressDiv(props) {
  const { children } = props
  return (
    <DressStyle>
      <div className='lg:w-7/12 py-24 pl-20'>
        {children}
      </div>
      <div className='lines flex items-center gap-10 lg:w-5/12 justify-center'>
        <div className='first'></div>
        <div className='second'></div>
      </div>
    </DressStyle>
  )
}

const DressStyle = styled.div`
display: flex;
position: relative;
p{
  margin-bottom: 1.5rem;
  color: #F9FAFB;
  /* font-weight: 450; */
font-size: 30px;
  &:last-of-type{
    margin-bottom: 0;

  }
}

.lines{
  /* position: absolute;
  right: 0; */
  div{
    width: 22px;
    height: 100%;
    background: #FDC741;

    &.first{
      /* left: 0; */
    }
  }
}
`;
