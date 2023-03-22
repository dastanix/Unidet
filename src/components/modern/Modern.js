import React from 'react'
import "./Modern.css"
import sqr from "../images/frame 1.svg"
import srq from "../images/frame 2.svg"
import cont from "../images/Component 1.png"
import cont2 from "../images/Component 2.png"
import cont3 from "../images/Component 3.png"
import cont4 from "../images/Component 4.png"
import cont5 from "../images/Component 5.png"

export default function Modern() {
  return (
    <div>
      <section className='container'>
        <div className='modern'>
            <div className='txt'>
                <img src={sqr} alt=''/>
                <h4>modern interior</h4>
                <img src={srq} alt=''/>
            </div>
            <div className='slider'>
              <div className='bord'></div>
              <img className='firs' src={cont} alt='' />
              <div className='middle'>
                  <img className='second' src={cont2} alt='' />
                  <div className='middle-mid'>
                      <img className="third" src={cont3}  alt=''/>
                      <img className='fourth' src={cont4}  alt=''/>
                  </div>
              </div>
              <img className='fivth' src={cont5} alt='' />
            </div>
        </div>
      </section>
    </div>
  )
}
