import React from 'react';
import "./Header.css"
import {BsSearch} from 'react-icons/bs'
const Header = () => {
    return (
        <div className="bg-gray-900 z-[1]">
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    <h2 className="tex  t-3xl text-white font-serif">Restaurant</h2>
                    <nav className=" navbar text-white">
                        <a href="#">Interior</a>
                        <a className="mx-8" href="#">About Us</a>
                        <a href="#">Menu</a><a className="mx-8" href="#">Contacts</a>
                    </nav>
                    <div>
                        <div>
                            <input placeholder="Search" style={{paddingLeft:"50px",color:"white",fontSize:"15px"}} type="text" className="bg-red-600 py-2 border-none rounded-lg"/>
                        </div>
                        <div>
                            <BsSearch style={{marginTop:"-30px",marginLeft:"10px",fontSize:"20px",color:'white'}}/>
                        </div>
                    </div>
                    <div className="bg-red-500 w-10 h-7 text-center rounded-[20%] ">
                        <a className="navbar text-white font-serif">En</a>
                    </div></div>
            </div>
        </div>
    );
};

export default Header;