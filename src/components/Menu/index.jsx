import React from 'react';
import "../Menu/menu.css"
import Img from "../../img/dessert1.png"
import Img2 from "../../img/dessert2.png"
import Img3 from "../../img/dessert3.png"
import Img4 from "../../img/dessert4.png"
import Img5 from "../../img/dessert5.png"
import Img6 from "../../img/dessert6.png"
import {Route,Routes} from "react-router-dom";

const Menu = () => {
    return (
        <div id="menu">
            <div className="container">
                <div className="menu">
                    <div className="burger-menu">
                        <a href="delete.html">
                            <div className="burger-0-li">
                                <div className="burger-item burger-0">Desserts</div>
                                <div className="lining"></div>
                            </div>
                        </a>

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
                        <div className="img-title">
                            <img src={Img} alt="img"/>
                            <div className="img-title-1">
                                <h3>Ice Cream <br/> <span>soda,cream,milk,sugar</span></h3>
                                <h2>$9.11</h2>
                            </div>
                        </div>
                        <div className="img-title">
                            <img src={Img2} alt="img"/>
                            <div className="img-title-1">
                                <h3>Ice Cream <br/> <span>soda,cream,milk,sugar</span></h3>
                                <h2>$9.11</h2>
                            </div>
                        </div>
                        <div className="img-title">
                            <img src={Img3} alt="img"/>
                            <div className="img-title-1">
                                <h3>Ice Cream <br/> <span>soda,cream,milk,sugar</span></h3>
                                <h2>$9.11</h2>
                            </div>
                        </div>
                        <div className="img-title">
                            <img src={Img4} alt="img"/>
                            <div className="img-title-1">
                                <h3>Ice Cream <br/> <span>soda,cream,milk,sugar</span></h3>
                                <h2>$9.11</h2>
                            </div>
                        </div>
                        <div className="img-title">
                            <img src={Img5} alt="img"/>
                            <div className="img-title-1">
                                <h3>Ice Cream <br/> <span>soda,cream,milk,sugar</span></h3>
                                <h2>$9.11</h2>
                            </div>
                        </div>
                        <div className="img-title">
                            <img src={Img6} alt="img"/>
                            <div className="img-title-1">
                                <h3>Ice Cream <br/> <span>soda,cream,milk,sugar</span></h3>
                                <h2>$9.11</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;