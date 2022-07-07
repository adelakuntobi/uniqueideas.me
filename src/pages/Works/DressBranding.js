import Layout from "./Layout";
import dress1 from "../../assets/images/dress/dress1.png"
import DressDiv from "../../components/Dress/DressDiv";
import { URBN } from "../../utils/pageUrl";

export default function Dress() {
  return (
    // <Layout
    // title="Dress Measurement App Branding"
    // banner={dress1}
    // next="URBN Branding">
    <Layout
      title="Dress Measurement App Branding"
      banner={dress1}
      next="URBN Branding"
      textDesc=""
      route={URBN}>
      <DressDiv>
        <p>Dress Measurement app as the name implies is an app that let’s you take, store and send your clothing and body measurements anywhere. It guides you on how to take your body measurements and stores them in the cloud for easy future reference.
        </p>
        <p>
          It is targeted at enterprenuers in the fashion industry and individuals who would love to have their clothing measurements handy
        </p>
      </DressDiv>
      {[...Array(2)].map((x, i) =>
        <img
          src={require(`../../assets/images/dress/dress${i + 2}.png`)}
          alt="" key={i + 2} className="w-full" />
      )}
      <DressDiv>
        <p>
          The goal of the new identity was to create an iconic mark that embodies the brand’s message which is , ‘’making the experience for taking, storing and sharing measurements as seamless as possible’’.
        </p>
        <p>
          The new design direction revolved around geometry and minimalism while introducing components revolving around a human body being measured which also accomodated the brands acronyms, DM. This new identity is simple, unique and resonates better with the brands audience
        </p>
      </DressDiv>
      {[...Array(2)].map((x, i) =>
        <img
          src={require(`../../assets/images/dress/dress${i + 4}.png`)}
          alt="" key={i + 4} className="w-full" />
      )}
      <DressDiv>
        <p>The identity was duplicated to form a pattern that’s unique to the brand. It can be applied across all brand assets ranging from social media to merchandise, stationaries, prints, packaging, etc</p>
      </DressDiv>
      {[...Array(2)].map((x, i) =>
        <img
          src={require(`../../assets/images/dress/dress${i + 6}.png`)}
          alt="" key={i + 4} className="w-full" />
      )}
      <DressDiv>
        <p>Several applications of how the new identity will be used across various brand assets have been demonstrated below</p>
      </DressDiv>
      {[...Array(10)].map((x, i) =>
        <img
          src={require(`../../assets/images/dress/dress${i + 8}.png`)}
          alt="" key={i + 4} className="w-full" />
      )}
    </Layout>
  )
}
