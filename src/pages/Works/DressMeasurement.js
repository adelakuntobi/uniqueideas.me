import Layout, { DivWithHeading, MyRole } from './Layout'
import Banner from "../../assets/images/dressMeasurement/banner.svg"
import Measurement1 from "../../assets/images/dressMeasurement/measurement1.svg"
import Measurement2 from "../../assets/images/dressMeasurement/measurement2.svg"
import Measurement3 from "../../assets/images/dressMeasurement/measurement3.svg"
import Measurement4 from "../../assets/images/dressMeasurement/measurement4.svg"
import { BERVHOME } from '../../utils/pageUrl'

export default function DressMeasurement() {
  return (
    <Layout
      title="Dress Measurement App"
      banner={Banner}
      next="BervHome Test"
      textDesc="At-Home-Test for Everyone"
      route={BERVHOME}>

      {/* About Section */}
      <DivWithHeading className="my-6">
        <h3>About Dress Measurement </h3>
        <p>
          <b>Dress Measurement App</b> is an app that lets you take, store and share your clothing and body meassurements easily. It guides you on how to take your body measurements and stores them in the cloud for easy future reference.
          It aims to meet the needs of enterpreneurs in the fashion industry and individuals who want to have their clothing measurements handy.
        </p>
        <p>
          Easily take down your measurements by sight of an avatar or by a name on our alphatized
        </p>
      </DivWithHeading>
      <DivWithHeading className="!py-0">
        <h4 className='text-lg lg:text-2xl font-bold'>Product Offerings</h4>
        <ul>
          <li className=''>As a fashion enterpreneur, keep track of your clients’ measurements in one place</li>
          <li className=''>Easily share your measurements as PDF or CSV</li>
          <li className=''>Take notes and store photos specific to each profile.  This is synced to the cloud so no need to worry about loosing your data.</li>
        </ul>
      </DivWithHeading>

      <DivWithHeading className="my-10">
        <h3>Work Overview </h3>
        <p>
          <b>Dress Measurement App</b> has a global audience because of its unique product offering. It is built for everyone who wants to keep their clothing measurements assessible whether it is to enhance personal shopping experience or for better management of clients’ data.
        </p>
        <p>
          In my first year at Aeeiee, I worked with a UX writer amongst engineers to create a redesign. The aim of the redesign was to create interfaces that was more usable and intentional, meeting the needs of our target audience, increasing adoption and meeting the business needs as well.
        </p>
        <p>
          This modification materialised the firm’s business goal of increased adoption   as Dress Measurement App now has over 24k users and revenue has increased by 3x so far.
        </p>
      </DivWithHeading>
      <MyRole>
        <p>My role</p>
        <ul>
          <li>User Reasearch</li>
          <li>Product Strategy</li>
          <li>Interface Design</li>
          <li>Branding</li>
        </ul>

      </MyRole>

      <DivWithHeading className="mt-10">
        <p className='!mb-14'>Recently, we have added more user tailored product offerings like:</p>
        <h3>Custom Pages and Measurement</h3>
        <p>
          This feature made it possible for users to create their own pages and personal measurements as they want. Users are allowed to add as many pages and mesasurements as they desire without limits.
        </p>
        <p>
          This feature was made available to only premium subscribers. Free users get to enjoy measurements made available in default pages.
        </p>
        <img src={Measurement1} alt="" className='mt-6' />
      </DivWithHeading>


      {/* IMAGE */}

      <DivWithHeading>
        <h3>Reference Measurements</h3>
        <p>This feature is similar to custom measurement. It gives the user clues on areas to focus on. It is a measurement with no visible label that guides the user in identifying the measurement they are taking by showing them a greyed out measurement nearby. It’s a way of visually telling the user, “hey, we are focusing on the knee bone and not the thigh”.</p>
        <img src={Measurement2} alt="" className='mt-6' />
      </DivWithHeading>


      {/* IMAGE */}

      <DivWithHeading>
        <h3>iCloud Submenu</h3>
        <p>
          The initial approach to the iCloud functionality was to have the activity running in the background. This leaves the user completely clueless on the status of their upload or download. Upon iteration, I introduced a submenu. This provided specific updates on the status of the following:
        </p>
        <ul>
          <li>
            <span>iCloud Storage Stats:</span> Real time updates on how much major functionalities in the app like profiles, measurements, notes, photos , custom measurements, custom pages, reference measurements have either uploaded or downloaded depending on the action the user is taking.
          </li>
          <li>
            <span>Auto Sync Status:</span> This tells if autosync is OFF or ON
          </li>
          <li>
            <span>Pull from iCloud / Push to iCloud:</span> This overwrites information on the Local device with information on the cloud or overwrites information on iCloud with information on the local device.
          </li>
          <li>
            <span>Save Local Backup:</span> Uploads information on the local device to the cloud.
          </li>
        </ul>
        <img src={Measurement3} alt="" className='w-full' />
      </DivWithHeading>


      <DivWithHeading>
        <h3>Page Settings</h3>
        <p>This feature lets you turn on/off pages so that only what you want to see is visible to a profile. This feature is only available to premium subscribers.</p>
        <img src={Measurement4} alt="" className='mt-6' />
      </DivWithHeading>


      <DivWithHeading>
        <h3>Outcome</h3>
        <p>Working with a cross-functional team, identifying gaps and figuring out suitable solutions backed with research to meet them have helped us put together a usable product.  After a few iterations and releases we got to a well-performing baseline. The foundation was in place so we could gather valuable data, optimise the journey, and start to introduce other core features to the journey.</p>
        <img src={Measurement2} alt="" className='mt-6' />
      </DivWithHeading>

      <DivWithHeading className='animate-bounce'>
        <a
          className='  text-xl'
          target="_blank" rel='noreferrer'
          href='https://apps.apple.com/app/id1125279242'>
          <span className='text-primary '>Live Link</span>: https://apps.apple.com/app/id1125279242</a>
      </DivWithHeading>

    </Layout>
  )
}
