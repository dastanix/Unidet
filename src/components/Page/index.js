import React from 'react';
import {TiDeleteOutline} from "react-icons/ti";



const Page = () => {
    return (
        <div id="page">
            <div className="icon text-3xl text-white"> <TiDeleteOutline/></div>
            <div className="container">
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

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;