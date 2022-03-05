import { Component } from "react"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import BitAbode from "../images/bit-abode.jpg"
import Battleship from "../images/battleship-img.png"
import ELock from "../images/elock.jpg"

export default class Projects extends Component {

    render() {
        return (
            <div className="container">
                <Header activePage="projects" />
                <div className="container-lg mt-5 pt-5">
                    <div className="jumbotron mt-5 pt-5">
                        <h1 className="display-4">Projects</h1>
                        <hr className="my-4" />
                        <p>Explore some of my recent projects.</p>
                    </div>
                </div>
                <div className="container col-lg-11">
                <main className="col-md-12 ml-sm-auto px-4 mt-5" >
                    <div className="row gap-1 border-bottom border-primary mb-4">
                        <h2>Recent</h2>
                    </div>
                    <div className="row align-items-center justify-content-between pb-5">
                        <p>No recent work to display.</p>
                    </div>
                    <div className="row gap-1 border-bottom border-primary mb-4">
                        <h2>Upcoming</h2>
                    </div>
                    <div className="row align-items-center justify-content-between pb-5">
                        <ProjectCard image={BitAbode} title="Bit Abode" description="Smart home system made with RasPi, Arduino, and littleBits born out of a foam core design project." />
                        <ProjectCard image={Battleship} title="Battleship" description="Simple implementation of the classic Battleship game in C using the SDL library." />
                        <ProjectCard image={ELock} title="E Lock" description="Proof of concept for a Kensington Lock with Bluetooth alerts if disturbed." />
                    </div>
                </main>
                </div>
            </div>
        )
    }

}