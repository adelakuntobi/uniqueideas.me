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
  urbn20,
  urbn21,
  urbn22,
  urbn23,
  urbn24,
  urbn25,
  urbn26,
  urbn27,
  urbn28,
  urbn29,
  urbn30,
  urbn31,
} from '../../assets/images/urbn';

export default function Urbn() {
  let components = [ urbn2,
    urbn3, urbn4, urbn5, urbn6, urbn7, urbn8, urbn9,
    urbn10, urbn11, urbn12, urbn13, urbn14, urbn15,
    urbn16, urbn17, urbn18, urbn19, urbn20, urbn21, urbn22, urbn23, urbn24, urbn25, urbn26, urbn27, urbn28, urbn29, urbn30, urbn31,]
  for (let i = 2; i < 30; i++) {
    components.push(<img src={`urbn${i}`} alt="" />)
  }
  return (
    <Layout
      title="URBN - Streetwear Fashion Branding"
      banner={urbn1}
      next="Back to Homepage">
      {/* <div>
        {[...Array(30)].map((x, i) =>
          // <img
          //   src={require(`../../assets/images/urbn/urbn${i + 2}.svg`)}
          //   alt="" key={i + 2} className="w-full" />
       
        )}
      </div> */}
      <div>
        {
          components.map(element => {
            return (
              <img src={element} className="w-full" alt="" />
            )
          })
        }
      </div>
    </Layout>
  )
}
