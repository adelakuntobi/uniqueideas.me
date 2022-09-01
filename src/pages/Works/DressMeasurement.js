import Layout, { DivWithHeading, MyRole } from './Layout'
import Banner from "../../assets/images/dressMeasurement/banner.png"
import Measurement1 from "../../assets/videos/Custom-Measurement.mp4"
import Measurement2 from "../../assets/videos/Reference-Measurement.mp4"
import Measurement3 from "../../assets/videos/iCloud-Submenu.mp4"
import Measurement4 from "../../assets/videos/Page-Settings.mp4"

import Affinity from "../../assets/images/dressMeasurement/affinity.svg"
import User1 from "../../assets/images/dressMeasurement/user1.png"
import User2 from "../../assets/images/dressMeasurement/user2.png"
import Architecture from "../../assets/images/dressMeasurement/architecture.png"
import NewFeel from "../../assets/images/dressMeasurement/new-feel.png"
import Notes from "../../assets/images/dressMeasurement/testing.png"

import { BERVHOME } from '../../utils/pageUrl'
import { UserPersona } from './BervHome'

export default function DressMeasurement() {
  const UserPersonal = [
    {
      img: User1,
      fullName: "Kelvin Grey wood",
      occupation: "Fashion Entrepreneur",
      age: 35,
      goals: [
        "Ability to manage customer data easily",
        "Accessing new or updated measurements that are reliable from customer without a physical meeting",
        "Ability to access customer’s measurement across several devices",
      ],
      frustrations: [
        "Difficulty in managing entrance and exit of customers",
        "Traveling long distances to be able to capture client’s measurement to ensure zero or minimal errors.",
        "Unreliable data from clients because there are no visual clues",
      ]
    },
    {
      img: User2,
      fullName: "Gene Ezejiburu",
      occupation: "Fashion Enthusiast",
      age: 27,
      goals: [
        "Being a lover of fashion, getting perfectly fit clothes.",
        "Have an accessible measurement of family so making fashion decisions for them is easy",
        "Having her clothes properly made without one-on-one with her fashion designer",
      ],
      frustrations: [
        "Always getting oversized/undersized clothes for family",
        "Spending time on physical visits to her fashion designer to update her measurement each time she adds or sheds weight.",
      ]
    },
  ]
  return (
    <Layout
      title="Dress"
      titleBreak="Measurement App"
      banner={Banner}
      next="BervHome Test"
      textDesc="At-Home-Test for Everyone"
      route={BERVHOME}
      topNote="UX Case Study">

      {/* About Section */}
      <DivWithHeading className="my-6">
        <h3>Project Overview</h3>
        <p>
          Take, store and share your clothing and body measurements anywhere. Dress measurement app provides an interactive guide that lets you take your body measurement and stores them on the cloud for easy reference. Easily take down your measurements by sight of an avatar or by a name on our alphabetized list view. Keep the pen and paper away.
        </p>
        <p>
          Product offerings<br />
          As a fashion entrepreneur, keep track of your customers’ measurements in one place, keep them organized and synced to the cloud and easily find your customers with powerful search tools.
          Easily share your measurements as PDF or CSV
          Take notes and store photos specific to each profile.  This is synced to the cloud so no need to worry about losing your data.
        </p>
        <p>
          Easily take down your measurements by sight of an avatar or by a name on our alphatized list view. Keep the pen and paper away
        </p>
      </DivWithHeading>
      {/* <DivWithHeading className="!py-0">
        <h4 className='text-lg lg:text-2xl font-bold'>Product Offerings</h4>
        <ul>
          <li className=''>As a fashion enterpreneur, keep track of your clients’ measurements in one place</li>
          <li className=''>Easily share your measurements as PDF or CSV</li>
          <li className=''>Take notes and store photos specific to each profile.  This is synced to the cloud so no need to worry about loosing your data.</li>
        </ul>
      </DivWithHeading> */}

      <MyRole>
        <p>My role</p>
        <ul>
          <li>User Research</li>
          <li>UX/UI Design</li>
          <li>Prototyping</li>
          <li>Usability Testing</li>
        </ul>
      </MyRole>
      <MyRole>
        <p>Team</p>
        <ul>
          <li>UX Designer</li>
          <li>UX Writer</li>
          <li>2 iOS Engineers</li>
          {/* <Link to={DRESS_BRANDING} className="text-primarye">
            <li>Branding</li>
          </Link> */}
        </ul>

      </MyRole>

      <DivWithHeading className="mt-10">
        <h3>Project Overview</h3>
        <p>
          The goal for this project was for Dress Measurement App to become more user focused and for it to be the go-to app for everyone who wants to keep their clothing measurements accessible. Whether it is to enhance personal shopping experience or for better management of customer’s data.
        </p>
        <p>
          The high level goal was to Redesign the existing app so that it becomes modern, easy and delightful to use.
        </p>
      </DivWithHeading>

      <DivWithHeading className="">
        <h3>UX Process</h3>
        <p>
          As a product with a global audience and interesting product offerings, creating an information architecture that allows for easy exploration was the first major UX hurdle.
        </p>
      </DivWithHeading>
      <DivWithHeading className="!py-2">
        <h3 className='white'>UX Research</h3>
        <p>
          In a bid to align business goals and users needs, I recruited participants to interview within Dress Measurement target demographic to dig deeper into their experience. I conducted a usability test on the live product with 5 participants. This helped me gain clarity on features to be incorporated into the redesign. I further interviewed 3 participants from the niche of interest to properly capture their thought process in detail.
        </p>
      </DivWithHeading>
      <DivWithHeading className="!py-2">
        <h3 className='white'>Affinity Mapping</h3>
        <p>
          After collecting information from surveys and interviews, I created an affinity diagram to better help me sort data generated
        </p>
      </DivWithHeading>
      <DivWithHeading className=" !max-w-[61rem] !mr-0">
        <img src={Affinity} alt="" />
      </DivWithHeading>
      <DivWithHeading>
        <p>
          My high level goals were to uncover user’s experience on using the existing version that was live.
        </p>
        <p>
          The desire for personalization: People want to be able to enter desired body measurements into the app and not necessarily stick to the default measurements made available on the app.
        </p>
        <p>
          Inefficient app performance: Continuous barrier to complete tasks due to bugs that crash the app
        </p>
        <p>
          The need for clarity: In general, users crave an interface that is intuitive, one that has an interface that is relatable and easy to use even on first interaction.

        </p>
      </DivWithHeading>

      <DivWithHeading className=" !max-w-[61rem] !mr-0">
        <h3 className="">User Persona</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {
            UserPersonal.map(user => {
              return (

                <UserPersona key={user.age}>
                  <div className="imgAndText">
                    <img src={user.img} alt="" />
                    <div className="mt-2 ">
                      <h5>{user.fullName}</h5>
                      <p className="!my-1" style={{ color: "#D1E2C0" }}>{user.occupation}</p>
                      <p>{user.age} years</p>
                    </div>
                  </div>
                  <div className="my-8">
                    <h6>Goals</h6>
                    <ul>
                      {
                        user.goals.map(goal => {
                          return (
                            <li key={goal}>{goal}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                  <div>
                    <h6>Frustrations</h6>
                    <ul>
                      {
                        user.frustrations.map(frustration => {
                          return (
                            <li key={frustration}>{frustration}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </UserPersona>

              )
            })
          }
        </div>
      </DivWithHeading >



      <DivWithHeading className="">
        <h3>UX Solution</h3>
        <p>
          One of my priorities for both the user is to have a clear and intuitive information architecture. The image below gives a clear view of how all features will be arranged.
        </p>
      </DivWithHeading>
      <DivWithHeading className=" !max-w-[61rem] !mr-0 !py-2">
        <h3 className='white'>Information Architecture</h3>
        <img src={Architecture} alt="" />
      </DivWithHeading>

      <DivWithHeading className="mt-10">
        <h3>A new feel, a unique experience</h3>
        <p>
          I aimed at creating designs that are human centered at every touchpoint. By Utilizing simple avatars with closely stated guidelines, Dress Measurement App shaped up to become warm and user-friendly as intended
        </p>
        <img src={NewFeel} className="pt-10 pb-8" alt="" />
        <p>Key features introduced into the redesign include:</p>
      </DivWithHeading>




      <DivWithHeading>
        <h3 className='white'>Custom Pages and Measurement</h3>
        <p>
          This feature made it possible for users to create their own pages and personal measurements as they want. Users are allowed to add as many pages and measurements as they desire without limits.  </p>
        <video playsInline={true} className='mt-6' autoPlay={true} loop={true} controls={false}>
          <source src={Measurement1} type="video/mp4" />
        </video>
      </DivWithHeading>


      {/* IMAGE */}

      <DivWithHeading>
        <h3 className='white'>Reference Measurements</h3>
        <p>This feature is similar to custom measurement. It informs the user on areas to concentrate on. It is a measurement guide with no visible label that gives the user a clue on a specific area to focus on by showing them a greyed out measurement nearby. Furthermore, it’s a way of visually telling the user, “hey, we are focusing on the knee bone and not the thigh”.</p>
        <video playsInline={true} className='mt-6' autoPlay={true} loop={true} controls={false}>
          <source src={Measurement2} type="video/mp4" />
        </video>
      </DivWithHeading>

      <DivWithHeading>
        <h3 className='white'>Page Settings</h3>
        <p>This feature lets you turn on/off pages so that only what you want to see is visible to a profile. This feature is only available to premium subscribers.</p>
        <video playsInline={true} className='mt-6' autoPlay={true} loop={true} controls={false}>
          <source src={Measurement4} type="video/mp4" />
        </video>
      </DivWithHeading>


      <DivWithHeading>
        <h3>Usability Testing</h3>
        <p>
          I conducted my usability testing remotely over zoom, asking participants to share their screens and think aloud while I recorded their interaction on the prototype. I asked participants to place themselves in the following scenario:
        </p>
        <p>
          I want you to imagine newly downloading the app. Create a profile, add custom measurements, add reference measurements, add notes and photos to the profile created.
        </p>
      </DivWithHeading>

      <DivWithHeading>
        <h3 className='white'>Testing Insights</h3>
        <p>
          After conducting my usability test, I created an affinity diagram with key insights, behaviors and findings. During the test, 100% of the participants completed the task in under 5 minutes. All participants complimented the general look and feel of the interface and concise presentation of guidelines
        </p>
        <img src={Notes} className="pt-10 pb-8" alt="" />
        <p>
          The key insights derived from the usability test conducted include:
        </p>
        <p>
          Users want more transparency with iCloud activities. Leaving the user clueless on its status makes them anxious and expectant.
        </p>
      </DivWithHeading>

      <DivWithHeading>
        <h3>Priority Changes</h3>
        <p>Based off observing users while they interacted with the prototype and feedback received, I prioritized making the iCloud submenu more user-friendly.</p>
      </DivWithHeading>
      <DivWithHeading>
        <h3 className='white'><span className='normal-case'>iCloud</span> Submenu</h3>
        <p>
          The initial approach to the iCloud functionality was to have the activity running in the background. This leaves the user completely clueless on the status of their upload or download. Upon iteration, I introduced a submenu. This provided specific updates on the status of the following:
        </p>
        <p>
          iCloud Storage Stats: Real time updates on how many major functionalities in the app like profiles, measurements, notes, photos, custom measurements, custom pages, reference measurements have either uploaded or downloaded depending on the action the user is taking.
        </p>
        <p>
          Auto Sync Status: This tells if autosync is OFF or ON
        </p>
        <p>
          Pull from iCloud / Push to iCloud: This overwrites information on the Local device with information on the cloud or overwrites information on iCloud with information on the local device.
        </p>
        <p>
          Save Local Backup: Uploads information on the local device to the cloud.
        </p>
        <video playsInline={true} className='mt-6' autoPlay={true} loop={true} controls={false}>
          <source src={Measurement3} type="video/mp4" />
        </video>
      </DivWithHeading>


      <DivWithHeading>
        <h3>Outcome</h3>
        <p>Working on a product aimed at meeting both business goals and user needs to be made me very intentional about every choice. I executed the design process end-to-end. From research to implementation with input from the UX writer. This forced me to be self-sufficient and agile, relying on insights from users to guide me through further iterations.</p>
      </DivWithHeading>

      <DivWithHeading>
        <h3>Lessons and key takeaways</h3>
        <p>I learned the value of digging deep into user’s frustrations and championing users needs to ensure it meets all requirements to ensure it becomes a widely used product that is user centered and can make the fashion industry experience way better
        </p>
        <p>
          Going forward, Dress Measurement app will focus on expanding its product offering to further meet the needs of large scale fashion enterprises and agencies.
        </p>
        <p>
          In the meantime, I appreciate the positive feedback received. Its performance on the App Store has also been really pleasing.</p>
      </DivWithHeading>

      <DivWithHeading className='animate-bounce'>
        <a
          className='  text-xl'
          target="_blank" rel='noreferrer'
          href='https://apps.apple.com/app/id1125279242'>
          <span className='text-primary '>Live Link</span>: https://apps.apple.com/app/id1125279242</a>
      </DivWithHeading>

    </Layout >
  )
}
