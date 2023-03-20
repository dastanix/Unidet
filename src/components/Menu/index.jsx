import React from 'react';
import "../Menu/menu.css"
import Img from "../../img/dessert1.png"
import Img2 from "../../img/dessert2.png"
import Img3 from "../../img/dessert3.png"
import Img4 from "../../img/dessert4.png"
import Img5 from "../../img/dessert5.png"
import Img6 from "../../img/dessert6.png"


const Menu = () => {
    return (
        <div id="menu">
            <div className="container">
                <div className="menu flex items-center justify-between">
                    <div className="burger-menu">
                        <div className="burger-item burger-0">Desserts</div>
                        <div className="burger-item burger-1">Hot Drinks</div>
                        <hr/>
                        <div className="burger-item burger-1">Cold Drinks</div>
                        <hr/>
                        <div className="burger-item burger-1">National Foods</div>
                        <hr/>
                        <div className="burger-item burger-1">Eastern cuisine</div>
                        <hr/>
                        <div className="burger-item burger-1">Fast foods</div>
                        <hr/>
                    </div>
                    <div className="photo">
                        <img src={Img} alt="img"/>
                        <img src={Img2} alt="img"/>
                        <img src={Img3} alt="img"/>
                        <img src={Img4} alt="img"/>
                        <img src={Img5} alt="img"/>
                        <img src={Img6} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;