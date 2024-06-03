import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoIosCheckmarkCircle } from "react-icons/io";


function Section1() {
  return (
    <div>
      <div>
            <div className='lines'>
                <h1>Accelerate growth for you or your organization</h1>
                <p><big>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</big></p>
            </div>
            <section id="sectionCards">
                <div id="secCard1">
                   <div className='div1'>
                   <h2>Personal Plan</h2>
                    <p>For you</p>
                    <CgProfile /> <span>Individual</span>
                   </div>
                   <div className='div2'>
                    <h3>Starting at ₹850 per month</h3>
                    <p>Billed monthly or annually. Cancel anytime.</p>
                   </div>

                   <button className='btnsub'><big><b>Start Subscripton</b></big></button>

                   <div className="div2">
                   <li> <IoIosCheckmarkCircle />Access to 11,000+ top courses</li>
                   <li> <IoIosCheckmarkCircle />Certification prep</li>
                   <li><IoIosCheckmarkCircle />Goal-focused recommendations</li>
                   <li><IoIosCheckmarkCircle />AI-powered coding exercises</li>
                   </div>
                </div>

                <div id="secCard2">
                   <div className='div1'>
                   <h2>Team Plan</h2>
                    <p>For you team</p>
                    <CgProfile /> <span> 2 to 20 people</span>
                   </div>
                   <div className='div2'>
                    <h3>₹1,167 a month per user</h3>
                    <p>Billed annually. Cancel anytime.</p>
                   </div>

                   <button className='btnsub'><big><b>Start Subscripton</b></big></button>

                   <div className="div2">
                   <li><IoIosCheckmarkCircle /> Access to 11,000+ top courses</li>
                   <li> <IoIosCheckmarkCircle />Certification prep</li>
                   <li><IoIosCheckmarkCircle />Goal-focused recommendations</li>
                   <li> <IoIosCheckmarkCircle /> AI-powered coding exercises</li>
                   <li> <IoIosCheckmarkCircle />Analytics and adoption reports</li>
                   </div>
                </div>

                <div id="secCard3">
                   <div className='div1'>
                   <h2>Enterprise Plan</h2>
                    <p>For your whole organization</p>
                    <CgProfile /> <span>More than 20 people</span>
                   </div>
                   <div className='div2'>
                    <h3>Contact sales for pricing</h3>
                   </div>

                   <button className='btnsub' style={{marginTop:`20px`}}><big><b>Request a demo</b></big></button>

                   <div className="div2">
                   <li><IoIosCheckmarkCircle />Access to 11,000+ top courses</li>
                   <li><IoIosCheckmarkCircle />Certification prep</li>
                   <li><IoIosCheckmarkCircle />Goal-focused recommendations</li>
                   <li><IoIosCheckmarkCircle />AI-powered coding exercises</li>
                   <li><IoIosCheckmarkCircle />Advanced analytics and insights</li>
                   <li><IoIosCheckmarkCircle />Dedicated customer success team</li>
                   <li><IoIosCheckmarkCircle />International course collection featuring 15 languages</li>
                   <li><IoIosCheckmarkCircle />Customizable content</li>
                   <li><IoIosCheckmarkCircle />Hands-on tech training with add-on</li>
                   <li><IoIosCheckmarkCircle />Strategic implementation services with add-on</li>
                   </div>
                </div>
            </section>

            
        </div>

    </div>
  )
}

export default Section1;
