import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Selected from "../../assets/images/selected.svg"


export const TitleHeading = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #D1E2C0;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  @media (max-width: 1024px) { 
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 1rem;
   }	
`;

export const SelectedWork = (props) => {
  return (
    <div>
      <Link to={props.route} >
        <img src={props.img} className="w-full" alt="" />
      </Link>
      <hr className='my-3' style={{ color: "#9CA3AF" }} />
      <h4 className='text-2xl lg:text-3xl font-medium '>{props.name}</h4>
      <ul className='flex list-disc gap-6 uppercase' style={{ color: " #9CA3AF" }}>
        {
          props.desc.map((des, num) => {
            return (
              <li key={num} className=' text-sm lg:text-base first-of-type:list-none'>{des}</li>
            )
          })
        }
      </ul>
    </div >
  )
}
