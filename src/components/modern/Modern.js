import React from 'react'
import "./Modern.css"
import sqr from "../images/frame 1.svg"
import srq from "../images/frame 2.svg"

export default function Modern() {
  return (
    <div>
      <section className='section'>
        <div className='modern'>
            <div className='txt'>
                <img src={sqr} alt=''/>
                <h4>modern interior</h4>
                <img src={srq} alt=''/>
            </div>
            
        </div>
      </section>
    </div>
  )
}
