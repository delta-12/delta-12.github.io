import React from "react"
import Header from "../components/Header"
import Navbar from "../components/navbar/Navbar"

export default class PlaneTracking extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header header="Plane Tracking" />
      </div>
    )
  }
}