import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./custom.css"

import LandingPage from "./LandingPage"
import Geolocation from "./articles/Geolocation"
import PlaneTracking from "./articles/PlaneTracking"

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/geolocation" component={Geolocation} />
          <Route exact path="/plane-tracking" component={PlaneTracking} />
        </div>
      </Router>
    )
  }
}