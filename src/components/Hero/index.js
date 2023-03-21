import React from 'react';
import background from '../../img/Canoe-Interior-Evening-Vibes-5170.jpg'
import "./Hero.css"
import frame11 from "../../img/Frame 11.svg"

const Hero = () => {

    return (
        <div>

            <div className='relative'>
                <img  src={background} alt=""/>
                <img className="absolute top-[15%] left-[41%]" src={frame11} alt=""/>
                <h1 className="txt-abs text-7xl text-white absolute font-mono">Italian Cuisine</h1>
                <p className="text-white top-[30%] left-[30.5%] text-[15px] absolute text-center txt-p">Classic steak & delicious with delightfully unexpenced twists. <br/>
                    The Restaurant`s sunny decor was inspired by the diners</p>
                <div className="absolute top-[37%] left-[44%] aboutBtn">
                    <div className="aboutDivs"></div>
                    <div className="text-center">
                        <button className="aboutBtnBtn text-white font-mono">Reserve Your Table</button>
                    </div>
                    <div className="aboutDivs"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;