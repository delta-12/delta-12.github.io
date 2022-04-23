import { Component } from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

export default class Header extends Component {

	state = {
        menu: false
    }

    toggleMenu = e => {
        e.preventDefault()
        this.setState({ menu: !this.state.menu })
    }

	render() {
		return (
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<div className="container-lg">
					<Link style={{ textDecoration: "none" }} to="/"><div className="navbar-brand">Benjamin Esquieres</div></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
					<div className={(this.state.menu) ? "navbar-collapse collapse show" : "navbar-collapse collapse"} id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<Link className={classnames((this.props.activePage === "projects") ? "nav-link active" : "nav-link")} to="/projects">Projects</Link>
							</li>
							<li className="nav-item">
								<Link className={classnames((this.props.activePage === "about") ? "nav-link active" : "nav-link")} to="/about">About</Link>
							</li>
							<li className="nav-item">
								<Link className={classnames((this.props.activePage === "resume") ? "nav-link active" : "nav-link")} to="/resume">Resume</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}

}