import React from 'react'
import { BsGlobe2 } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer>
     <div id='footFirst'>
     <h2>Top companies choose Udemy Business to build in-demand career skills.</h2>
      <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt=''></img>
      <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg' alt=''></img>
      <img src='https://s.udemycdn.com/partner-logos/v4/box-light.svg' alt=''></img>
      <img src='https://s.udemycdn.com/partner-logos/v4/netapp-light.svg' alt=''></img>
      <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg' alt=''></img>
     </div>
     <section id='footSec'>
      <div>
        <li><a href='a'>Udemy Business</a></li>
        <li><a href='a'>Teach on Udemy</a></li>
        <li><a href='a'>Get the app</a></li>
        <li><a href='a'>About us</a></li>
        <li><a href='a'>Contact us</a></li>
      </div>
      <div>
        <li><a href='a'>Careers</a></li>
        <li><a href='a'>Blog</a></li>
        <li><a href='a'>Help and support</a></li>
        <li><a href='a'>Affiliate</a></li>
        <li><a href='a'>Investors</a></li>
      </div>
      <div>
        <li><a href='a'>Terms</a></li>
        <li><a href='a'>Privacy policy</a></li>
        <li><a href='a'>Cookie setting</a></li>
        <li><a href='a'>Sitemap</a></li>
        <li><a href='a'>Accesibility statement</a></li>
      </div>
      <div><button id='globeicon'><BsGlobe2 /> English</button></div>
     </section>
    <section>
    <div><img id='lastlogo' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt='logo'></img></div>
    {/* <div><p>2024 Udemy, Inc.</p></div> */}
    </section>
    </footer>

    </div>
  )
}

export default Footer
