import React from "react"
import { Link } from "react-router-dom"

export default class Card extends React.Component {
  render() {
    return (
      <Link className="card" to={this.props.link}>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.caption}</p>
          <img src={this.props.img} alt="" />
        </div>
      </Link>
    )
  }
}