import { Component } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

export default class Header extends Component {

	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<div className="container-lg">
					<Link style={{ textDecoration: "none" }} to="/"><div className="navbar-brand">Benjamin Esquieres</div></Link>
					<div className="collapse navbar-collapse" id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<Link className={classnames((this.props.activePage === "projects") ? "nav-link active" : "nav-link")} to="/projects">Projects</Link>
							</li>
							<li className="nav-item">
								<Link className={classnames((this.props.activePage === "about") ? "nav-link active" : "nav-link")} to="/about">About</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}

}