import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Ben from "../images/ben.jpg"

export default class About extends Component {

    render() {
        return (
            <div>
                <Header activePage="about" />
                <div className="container-lg mt-5 pt-5">
                    <div className="d-flex mt-4">
                        <Link to="/home" style={{ textDecoration: "none" }}>&#8592; Back to Home</Link>
                    </div>
                    <div className="jumbotron mt-3 pt-5">
                        <h1 className="display-4">About</h1>
                        <hr className="my-4" />
                        <p className="lead">
                            My name is Benjamin Esquieres, and I am currently a first-year student at the University of Pittsburgh,
                            Swanson School of Engineering.  I plan to obtain my B.S. in Computer Engineering and then go on to earn an Accelerated Master's
                            degree in Electrical Engineering as well.  I have a passion for software, code, and technology, and I like working on multidisciplinary, hands-on projects
                            within engineering.  I am looking to pursue a career that makes a tangible, real-world impact on people's lives and combines several of my many interests such as
                            embedded devices, robotics, process control, automation, cloud computing, distributed systems, wireless communications, UAV/drones, and automotive vehicles.
                        </p>
                        <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                        <img className="mx-auto d-block mt-2 mb-3" height="470" width="520" src={Ben} alt="ben.png" />
                    </div>
                </div>
            </div>
        )
    }

}