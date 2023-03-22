import React from "react";
import "./Join.css";
import staple from "../images/frame 1.svg";
import Arrow from "../icons/Arrow";
import Phone from "../icons/Phone";
import Email from "../icons/Email";
import Telega from "../icons/Telega";
import Insta from "../icons/Insta";

export default function Join() {
	return (
		<div>
			<section className="container">
				<div className="join">
					<div className="join-lead">
						<div className="visit">
							<img src={staple} alt="" />
							<h4>Visit Restaurant</h4>
						</div>
						<div className="us">
							<h2>Join Us for Happy Hours</h2>
						</div>
						<div className="hood">
							<h5>Your neighborhood</h5>
							<p>225$.Lake Ave.Suite 1150 Pasadena,CA 911101</p>
						</div>
						<div className="open">
							<h5>Opening hours:</h5>
							<p>Mon-Thu: 10:00 am - 01:00 am</p>
							<p>Fri-Sun: 10:00 am - 02:00 am</p>
						</div>
						<div className="btn-card">
							<div className="swift">
								<div className="btn-bord"></div>
							</div>
							<button>
								Purchase gift card <Arrow />
							</button>
							<div className="btn-bord2"></div>
						</div>
					</div>
					<div className="lead-bord">
						<div className="contact">
							<h5>contact Info</h5>
							<p>
								<Phone /> 
                                <span><a href="tel: +996">+771219900</a></span>
							</p>
							<h6>
								<Email />
								<span>motionweb312@gmail.com</span>
							</h6>
						</div>
                        <div className="mess">
                            <a className="tele" href="#"><Telega/></a>
                            <a href="#"><Insta/></a>
                        </div>
						<div className="map">
						<iframe className="map-block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.75660378112!2d74.5854360149787!3d42.8779812102293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec81f4a0a30a7%3A0xebed4865356709e4!2z0JrRi9GA0LPRi9C30YHQutCw0Y8g0LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINGE0LjQu9Cw0YDQvNC-0L3QuNGPINC40LwuINCiLiDQodCw0YLRi9C70LPQsNC90L7QstCw!5e0!3m2!1sru!2skg!4v1679395813123!5m2!1sru!2skg"referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
