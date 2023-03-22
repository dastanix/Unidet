import React from 'react';
import {TiDeleteOutline} from "react-icons/ti";
import "../Page/page.css"
import Img from "../../img/dessert1.png"
import Img3 from "../../img/dessert3.png";
import Img4 from "../../img/dessert4.png"
import Img5 from "../../img/dessert5.png"
import Img6 from "../../img/dessert6.png"

const Page = () => {
    return (
        <div id="page">
            <div className="icon"> <TiDeleteOutline/></div>
            <div cassName="container">
                <div className="hero">
                    <div className="burger-menu">
                        <div className="burger-0-li">
                            <div className="burger-item burger-0">Desserts</div>
                            <div className="lining"></div>
                        </div>
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
                    <div className="dessert">
                        <div className="coffee">
                            <div className="coffee-photo">
                                <img src={Img} alt="img"/>
                                <div className="coffee-photo-title">
                                    <h3>Ice Cream <br/><span>soda,cream,milk,sugar</span></h3>
                                    <h2>$9.11</h2>
                                </div>
                            </div>
                            <div className="coffee-title">
                                <div className="coffee-extras">
                                    <div className="coffee-extras-1">
                                        <h2>Extras</h2>
                                        <h3>Cherry</h3>
                                        <h3>Cherry</h3>
                                    </div>
                                    <div className="coffee-extras-2">
                                        <h4>$0.90</h4>
                                        <h4>$0.90</h4>
                                    </div>
                                </div>
                                <div className="coffee-drinks">
                                    <div className="coffee-drinks-1">
                                        <h2>Drinks</h2>
                                        <h3>Coca Cola</h3>
                                        <h3>Coca Cola</h3>
                                    </div>
                                    <div className="coffee-drinks-2">
                                        <h4>$0.90</h4>
                                        <h4>$0.90</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="similar">
                            <h1>Similar gueries</h1>
                            <div className="similar-photo">
                                <div className="similar-photo-1">
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
                                </div>
                                <div className="similar-photo-2">
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
                </div>
            </div>

        </div>
    );
};

export default Page;