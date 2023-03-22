import React from "react";
import "./Footer.css";
import TT from "../icons/TT";
import II from "../icons/II";

export default function Footer() {
	return (
		<div id="footer">
			<section className="container">
				<div className="footer">
					<div className="foot-txt">
						<h4>Restaurant</h4>
					</div>
					<div className="foot-nav">
						<a href="#">Interior</a>
						<a href="#">About us</a>
						<a href="#">Menu</a>
						<a href="#">Contacts</a>
					</div>
					<div className="foot-icons">
						<p>
							<a href="#">
								<TT />
							</a>
						</p>
						<a href="#">
							<II />
						</a>
					</div>
				</div>
				<div className="foot-bord"></div>
				<div className="cooperate">
					<h6>c 2023 Motion Study LLC</h6>
				</div>
			</section>
		</div>
	);
}
