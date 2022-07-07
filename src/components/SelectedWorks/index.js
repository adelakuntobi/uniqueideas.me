import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RightBG from "../../assets/images/rightBG.svg"
import BottomBG from "../../assets/images/bottomBG.svg"



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
  const { item } = props
  return (
    <div>
      <Link to={item.route} >
        {/* <img src={item.img} className="w-full" alt="" /> */}
        <SelectedImg>
          <div className='p-10 items-center justify-between h-full'>
            <div className='justify-between h-full flex-col !items-start'>
              <span className='case'>{item.case}</span>
              <div className=' w-52'>
                <span style={{ backgroundColor: item.color }} className='line'></span>
                <p>{item.imageText}</p>
              </div>
              <ul className='flex list-disc gap-3 uppercase' style={{ color: "#D1D5DB" }}>
                {
                  item.desc.map((des, num) => {
                    return (
                      <li key={num} className=' lg:text-base first-of-type:list-none'>{des}</li>
                    )
                  })
                }
              </ul>
            </div>
            <img src={item.imageImg} alt="" className='' />
          </div>
          <img src={RightBG} alt="" className='absolute right-0 top-10' />
          <img src={BottomBG} alt="" className='absolute bottom-0 right-12' />
        </SelectedImg>
      </Link>
      <hr className='my-3' style={{ color: "#9CA3AF" }} />
      <h4 className='text-2xl lg:text-3xl font-medium '>{item.title}</h4>
      {/* <ul className='flex list-disc gap-8 uppercase my-2' style={{ color: " #9CA3AF" }}>
        {
          item.desc.map((des, num) => {
            return (
              <li key={num} className=' text-xs lg:text-base first-of-type:list-none'>{des}</li>
            )
          })
        }
      </ul> */}
    </div >
  )

}
const SelectedImg = styled.div`
    height: 290px;
    background: #15181E;
    position: relative;
 
    span.case{
      font-size: 10px;
      text-transform: uppercase;
      color: #41BED4;
    }
    .line{
      width: 44px;
      height: 3px;
      background-color: blue;
      margin-bottom: 1.5rem;
      display: block;
    }
    p{
      font-size: 18.8431px;
      line-height: 120%;
      color: #D1D5DB;
    }
    li{
      font-size: 7.27401px;
      line-height: 9px;
    }
  `;
