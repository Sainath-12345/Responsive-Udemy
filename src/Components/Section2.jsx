import React from 'react'
import { CgProfile } from "react-icons/cg";

function Section2() {
  return (
    <div>
      <h1 className='lines'>See what others are achieving through learning</h1>
      <section className="test">
        <div className="test1">
            <h1>"</h1>
            <span>Udemy was rated the <b>most popular online course or certification program </b> for learning how to code according to</span>
            <a href="">StackOverflow’s 2023 Developer survey.</a>

            <div className="innerdiv">
              stack <b>overflow</b>
              <p>37,076 responses collected</p>
            </div>

            <a href="">View web development courses</a>
        </div>

        <div className="test1">
            <h1>"</h1>
            <span>Udemy was truly  <b> a game-changer and a great guide </b>for me as we brought Dimensional to life.</span>
            <a href="">StackOverflow’s 2023 Developer survey.</a>

            <div className="innerdiv">
              <CgProfile id='proficon' /> <span>Alvin Lim Technical Co-Founder, CTO at Dimensional</span>
            </div>

            <a href="">View this iOS & Swift course</a>
        </div>

        <div className="test1">
            <h1>"</h1>
            <span>Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to <b>get a new role.</b></span>
           

            <div className="innerdiv">
              
            <CgProfile id='proficon' /><span>William A. Wachlin Partner Account Manager at Amazon Web Services</span>
            </div>

            <a href="">View this AWS course</a>
        </div>

        <div className="test1">
            <h1>"</h1>
            <span>With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help <b>drive their careers forward.</b></span>
      

            <div className="innerdiv">
            <CgProfile id='proficon' /><span>Ian Stevens Head of Capability Development, North America at Publicis Sapient</span>
            </div>

            <a href="">Read Full story</a>
        </div>
      </section>

      <section id='nextTest'>
        <div><big><h2>Top trends for the future of work</h2></big>
        <p><big><big>GenAI and leadership are at the core of today's skills-based economy. Get the 2024 Global Learning & Skills Trends Report to learn more.</big></big></p>
        <button><big><b>Get the report </b></big></button>
        </div>
        <div id='img2'><img  src="https://cms-images.udemycdn.com/content/ag3rqs5nxw/png/2024_Angled_Trends_report_image.png?position=c&quality=80&x.app=portals" alt="" /></div>
      </section>
    </div>
  )
}

export default Section2
