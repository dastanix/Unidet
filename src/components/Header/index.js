import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="bg-gray-900 z-[1]">
            <div className="container">
                <div className="flex items-center justify-between py-4">
                    <h2 className="text-3xl text-white font-serif">Restaurant</h2>
                    <nav className=" navbar text-white">
                        <a href="#">Interior</a>
                        <a className="mx-8" href="#">About Us</a>
                        <a href="#">Menu</a>
                        <a className="mx-8" href="#">Contacts</a>
                    </nav>
                    <input type="text" className="bg-red-600 py-2 border-none rounded-lg"/>
                <div className="bg-red-500 w-10 h-7 text-center rounded-[20%] ">
                    <a className="navbar text-white font-serif">En</a>
                </div></div>
            </div>
        </div>
    );
};

export default Header;