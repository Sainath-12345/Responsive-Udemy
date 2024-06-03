import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import Categories from "./Categories";

import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>
<li><GiHamburgerMenu className="logo2" id="sidelogo"/></li>
<li><img id="logo" src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg" alt="" />
</li>
<li className='a'><a id='hidden-a'>Categories<div id='categories'><Categories/></div></a></li>


<li id="search"><LuSearch /></li>
<li className='a'><input id="navip" type="text" placeholder='Search for anything'/></li>
<li className='a'><a href='' id="plans">Plans & pricing</a></li>
<li className='a'><a href='' id='udemybus'>Udemy Business
                      <div id='udemybus-hide'>
                        <h3>Get your team access to <br></br> over 25000 top Udemy <br></br> courses, anytime,<br></br> anywhere. </h3>
                        <button><b>Try Udemy Business</b></button>
                      </div>
                  </a>
</li>
<li className='a'> <a href='' id='teach'>Teach on Udemy
                      <div id='teach-hide'>
                        <h3>Turn what you know it into an <br></br> opportunity and reach<br></br> millions around the world </h3>
                        <center><button><b>Learn more</b></button></center>
                      </div>
                  </a>
</li>
<li>     <a href='' id='cart'><MdOutlineShoppingCart className="logo2"/>
            <div id='cart-hide'>
                        <p>Your cart is empty.</p>
                        <h3>Keep shopping</h3>
                      </div>
            </a>
              
</li>
<li className='a'><button className='navbtn-1'>Login</button></li>
<li className='a'><button className='navbtn-2'>Sign Up</button></li>
<li className='a'><img id="logo3" src="https://icons.veryicon.com/png/o/miscellaneous/smart-icon-library/internet-61.png" alt="" /></li> 
</nav>

    </div>
  )
}

export default Navbar
