import React from "react"
import { Link } from "react-router-dom"

export default class Footer extends React.Component {

  render() {
    return (
      <div className="navbar fixed-bottom navbar-dark bg-dark">
        <div className="container-lg navbar-nav">
          <p>Copyright &copy; delta-12.github.com 2022</p>
          <p>This site was coded by me, Benjamin Esquieres, using React.  View the code on <Link to="//github.com/delta-12/delta-12.github.io" style={{ textDecoration: "none" }}>Github</Link>!</p>
        </div>
      </div>
    )
  }

}