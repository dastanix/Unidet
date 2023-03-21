import React from 'react';
import Image from '../../img/Frame 13.svg'
import image from '../../img/Frame 15.png'
import IMAGE from '../../img/Frame 16.png'
import Img from '../../img/Frame 10.svg'
import image1 from '../../img/Frame 19.png'
import image2 from '../../img/Frame 20.png'
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";

const AboutLine = () => {
    return (
        <div className="">
            <div className="container">
                <div>
                    <div className="flex items-center justify-around mt-32">
                        <div>
                            <img src={Image} alt=""/>
                            <h1 className="text-4xl text-white mt-10">A Journey Throught <br/>
                                Cafesio Flavors</h1>
                        </div>
                        <p className="w-4/12 text-white">Try dishes that will open up new tastes for you
                            and delight your eyes with their appearance.
                            Here you will find a cozy atmosphere,
                            excellent service and attention to each guest.
                            Book a table now and enjoy a unique experience of <br/>
                            taste discovery!
                        </p>
                    </div>
                    <div className="flex items-center justify-around mt-20">
                        <img src={image} alt=""/>
                        <img src={IMAGE} alt=""/>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-around">
                        <div className="flex items-center justify-around mt-32">
                            <div>
                                <div className="flex">
                                    <img src={Img} alt=""/>
                                    <span className="text-white text-xl font-mono mx-8">Best Sellers</span>
                                </div>
                                <h1 className="text-4xl text-white mt-10">You Only Reserve <br/>
                                    Exception</h1>
                                <p className="w-4/12 text-white mt-10">Each location has a menu that`s curated just for them.
                                    See what new at your Cafesio and You`ll find Cafesio
                                    Covent Carden moments.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center ">
                            <img src={image1} alt=""/>
                            <img className="mx-8" src={image2} alt=""/>
                        </div>
                        <MdOutlineKeyboardDoubleArrowRight className="text-white text-5xl ml-20"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutLine;