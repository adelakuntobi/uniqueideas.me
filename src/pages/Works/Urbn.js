import React from 'react'

import Layout from "./Layout";

// import { StepharBG } from '../../assets/images'
import {
  urbn1,
  urbn2,
  urbn3,
  urbn4,
  urbn5,
  urbn6,
  urbn7,
  urbn8,
  urbn9,
  urbn10,
  urbn11,
  urbn12,
  urbn13,
  urbn14,
  urbn15,
  urbn16,
  urbn17,
  urbn18,
  urbn19,
} from '../../assets/images/urbn';

export default function Urbn() {
  let components = [urbn2,
    urbn3, urbn4, urbn5, urbn6, urbn7, urbn8, urbn9,
    urbn10, urbn11, urbn12, urbn13, urbn14, urbn15,
    urbn16, urbn17, urbn18, urbn19]
  for (let i = 2; i < 19; i++) {
    components.push(<img src={`urbn${i}`} alt="" />)
  }
  return (
    <Layout
      title="URBN - Streetwear Fashion Branding"
      banner={urbn1}
      home={true}>
      <div>
        {[...Array(8)].map((x, i) =>
          <img
            data-aos="fade-up" 
            data-aos-anchor-placement="center-bottom"
            src={require(`../../assets/images/urbn/urbn${i + 2}.png`)}
            alt="" key={i + 2} className="w-full" />

        )}
        <h3 className='mt-8 mb-6 font-bold text-xl lg:text-3xl pl-12 '>Use Cases</h3>
        {[...Array(10)].map((x, i) =>
          <img
          data-aos="fade-up" data-aos-delay={1000 * i}
            src={require(`../../assets/images/urbn/urbn${i + 10}.png`)}
            alt="" key={i + 10} className="w-full" />

        )}
      </div>

    </Layout>
  )
}
