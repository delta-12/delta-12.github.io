import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container-lg mt-5 pt-5">
                    <div className="jumbotron mt-5 pt-5">
                        <h1 className="display-4">Hello, world!</h1>
                        <hr className="my-4" />
                        <p><Link to="/about">Learn</Link> more about me and <Link to="/projects">explore</Link> some of my recent projects.</p>
                    </div>
                </div>
            </div>
        )
    }

}