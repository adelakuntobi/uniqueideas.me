import Layout, { DivWithHeading, MyRole } from './Layout'
import Banner from "../../assets/images/dressMeasurement/banner.svg"
export default function DressMeasurement() {
  return (
    <Layout
      title="Dress Measurement App"
      banner={Banner}
      next="Fintech platform">

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
        <h4 className='text-2xl font-bold'>Product Offerings</h4>
        <ul className=' list-disc text-2xl pl-10 flex flex-col gap-2'>
          <li className=''>As a fashion enterpreneur, keep track of your clients’ measurements in one place</li>
          <li className=''>Easily share your measurements as PDF or CSV</li>
          <li className=''>Take notes and store photos specific to each profile.  This is synced to the cloud so no need to worry about loosing your data.</li>
        </ul>
      </DivWithHeading>

      <DivWithHeading className="my-6">
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

      <DivWithHeading>
        <p className='!mb-14'>Recently, we have added more user tailored product offerings like:</p>
        <h3>Custom Pages and Measurement</h3>
        <p>
          This feature made it possible for users to create their own pages and personal measurements as they want. Users are allowed to add as many pages and mesasurements as they desire without limits.
        </p>
        <p>
          This feature was made available to only premium subscribers. Free users get to enjoy measurements made available in default pages.
        </p>
      </DivWithHeading>


      {/* IMAGE */}

      <DivWithHeading>
        <h3>Reference Measurements</h3>
        <p>This feature is similar to custom measurement. It gives the user clues on areas to focus on. It is a measurement with no visible label that guides the user in identifying the measurement they are taking by showing them a greyed out measurement nearby. It’s a way of visually telling the user, “hey, we are focusing on the knee bone and not the thigh”.</p>
      </DivWithHeading>


      {/* IMAGE */}

      <DivWithHeading>
        <h3>iCloud Submenu</h3>
        <p>
          The initial approach to the iCloud functionality was to have the activity running in the background. This leaves the user completely clueless on the status of their upload or download. Upon iteration, I introduced a submenu. This provided specific updates on the status of the following:
        </p>
        <ul>
          <li>
            iCloud Storage Stats: Real time updates on how much major functionalities in the app like profiles, measurements, notes, photos , custom measurements, custom pages, reference measurements have either uploaded or downloaded depending on the action the user is taking.
          </li>
          <li>
            Auto Sync Status: This tells if autosync is OFF or ON
          </li>
          <li>
            Pull from iCloud / Push to iCloud: This overwrites information on the Local device with information on the cloud or overwrites information on iCloud with information on the local device.
          </li>
          <li>
            Save Local Backup: Uploads information on the local device to the cloud.
          </li>
        </ul>
      </DivWithHeading>



    </Layout>
  )
}
