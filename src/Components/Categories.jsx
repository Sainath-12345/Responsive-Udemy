import React from 'react';
import Develop from './Develop';

function Categories() {
  return (
    <div>
    <li><a id='development'>Development {">"}<div id='develop' > <Develop/></div> </a></li>
    <li><a href="" id='business'>Business 
          <div id='business-hide'>
            <li><a href="">Enterpreneurship</a></li>
            <li><a href="">Communication</a></li>
            <li><a href="">Management</a></li>
            <li><a href="">Business strategy</a></li>
            <li><a href="">Operations</a></li>
            <li><a href="">Project management</a></li>
            <li><a href="">Business law</a></li>
            <li><a href="">Human resource</a></li>
          </div> 
        </a>
    </li>
    <li><a href="">Finance & Accounting</a></li>
    <li><a href="">IT & Software</a></li>
    <li><a href=""></a></li>
    <li><a href="">Personal Development</a></li>
    <li><a href="">Design</a></li>
    <li><a href="">Marketing</a></li>
    <li><a href="">LifeStyle</a></li>
    <li><a href="">Photography & Video</a></li>
    <li><a href="">Health & Fitness</a></li>
    <li><a href="">Music</a></li>
    <li><a href="">Teaching & Academics</a></li>
    </div>
  )
}

export default Categories
