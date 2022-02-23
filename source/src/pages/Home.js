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
                        <p className="lead">
                            My name is Benjamin Esquieres, and I am currently a first-year engineering student at the University of Pittsburgh,
                            Swanson School of Engineering.  I have a passion for software, code, and technology, and I like working on interdisciplinary projects
                            within engineering.  In the coming weeks I intend to delcare a major in Computer Engineering, and I plan on pursuing an Accelerated Master's
                            degree in Electrical Engineering as well.  I am looking to pursue a career that combines several of my many interests such as
                            embedded devices, robotics, process control, automation, UAV/drones, and automotive vehicles.
                        </p>
                        <hr className="my-4" />
                        <p><Link to="/about">Learn</Link> more about me and <Link to="/projects">explore</Link> some of my recent projects.</p>
                    </div>
                </div>
            </div>
        )
    }

}