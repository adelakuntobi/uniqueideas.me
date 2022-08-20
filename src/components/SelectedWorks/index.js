import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const TitleHeading = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #D1E2C0;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-family: 'Ivy Mode', sans-serif;
  @media (max-width: 1024px) { 
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 1rem;
   }	
`;

export const SelectedWork = (props) => {
  const { item } = props
  return (
    <div className='flex flex-col mb-10'>
      <Link to={item.route}>
        {/* <img src={item.img} className="w-full" alt="" /> */}
        {/* <SelectedImg>
          <div className='p-4 md:p-8 lg:p-10 items-center justify-between h-full'>
            <div className='gap-4 justify-between h-full flex-col !items-start'>
              <span className='case'>{item.case}</span>
              <div className=' md:w-52'>
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
            <img src={item.imageImg} alt="" className='w-24 lg:w-1/4' />
          </div>
          <img src={RightBG} alt="" className='absolute right-0 top-10 w-28 md:w-32' />
          <img src={BottomBG} alt="" className='absolute bottom-0 right-6 md:right-12 w-40 md:w-auto' />
        </SelectedImg> */}
        <img src={item.img} className="w-full" alt="" />
      </Link>
      {/* <hr className='mt-3' style={{ borderColor: "#374151" }} /> */}
      <div className='justify-between mt-2'>
        <h4 className='text-2xl md:text-3xl '>{item.title}</h4>
        {
          item.comingSoon &&
          <p className='coming-soon items-center gap-3 px-3 py-2' style={{ color: "#41BED4", backgroundColor: "#163b42", }}>
            <span className=' h-3 w-3 block rounded-full  ' style={{ backgroundColor: "#41BED4" }}></span>
            Coming Soon
          </p>
        }
      </div>
      <p className='text-[#9CA3AF]'>{item.case}</p>
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
// eslint-disable-next-line no-unused-vars
const SelectedImg = styled.div`
    height: 250px;
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
    @media (max-width: 1024px) { 
      height: 230px;
   }
   /* @media (max-width: 768px) { 
      height: 200px;
   } */
  `;
