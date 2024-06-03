import React from 'react'

function Section4() {
  return (
    <div id='sec4Par'>
      <section id='sec4'>
        <div className='sec4Child'>
            <p style={{textAlign:`center`}}><big><big><big>Booz | Allen | Hamilton </big></big></big></p>
            <h1><small><small>Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</small></small></h1>
            <div className='childDiv'>
            <div className='childDiv-1'>  
                <h1>93%</h1>
                <p>retention rate among participating <br /> employees</p></div>
            <div className='childDiv-1'>
                <h1>65%</h1>
                <p>of learners noted a positive impact on <br /> their productivity</p>
            </div>  
            </div>
        </div>
        <img id="sideImgLast" src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals" alt="" />
        
      </section>
    </div>
  )
}

export default Section4
