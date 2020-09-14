import React from "react"
import Header from "./components/Header"
import Navbar from "./components/navbar/Navbar"
import Card from "./components/Card"

import location from "./images/location.png"
import jsb from "./images/jsb.png"

export default class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<Header header="Hello World"/>
		  	<div className="center-cards">
					<div className="cards">
						<Card title="Geolocation" caption="Find your current location based on IP address or GPS/AGPS!" link="/geolocation" img={location}/>
						<Card title="JSB" caption="Check out Josh's Sound Board" link="/jsb" img={jsb}/>
						<Card title="Plane Tracking" caption="Good ol' ADS-B" link="/plane-tracking"/>
					</div>
				</div>
			</div>
		)
	}
}