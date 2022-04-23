import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import BitAbode from "../images/bit-abode.jpg"
import Battleship from "../images/battleship-img.png"
import ELock from "../images/elock.jpg"
import Minecraft from "../images/minecraft.png"
import CyclingSafetyVest from "../images/cycling-safety-vest.png"
import Navigait from "../images/navigait.png"
import Makeycraft from "../images/makeycraft.jpg"

export default class Projects extends Component {

    render() {
        return (
            <><Header activePage="projects" />
            <div className="container mt-5 pt-5">
                <div className="d-flex mt-4">
                    <Link to="/home" style={{ textDecoration: "none" }}>&#8592; Back to Home</Link>
                </div>
                <div className="jumbotron mt-3 pt-5">
                    <h1 className="display-4">Projects</h1>
                    <hr className="my-4" />
                    <p>Explore some of my recent projects.</p>
                </div>
                <div className="container col-lg-11">
                <main className="col-md-12 ml-sm-auto px-4 mt-5" >
                    <div className="row gap-1 border-bottom border-primary mb-4">
                        <h2>Recent</h2>
                    </div>
                    <div className="row align-items-center justify-content-between pb-5">
                        <Link to="/projects/bit-abode" className="col-md-4" style={{ textDecoration: "none" }}>
                            <ProjectCard image={BitAbode} title="Bit Abode" description="Smart home system made with RasPi, Arduino, and littleBits born out of a foam core design project." />
                        </Link>
                        <Link to="/projects/cycling-safety-vest" className="col-md-4" style={{ textDecoration: "none" }}>
                            <ProjectCard image={CyclingSafetyVest} title="Cycling Saftey Vest" description="Stay safe and visible while cycling with LED strips on a vest that indcate braking and turn." />
                        </Link>
                        <Link to="//sites.google.com/zeibari.com/makeycraft/home" className="col-md-4" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                            <ProjectCard image={Makeycraft} title="MAKEYCRAFT" description="A new and immersive way to play one of the most popular games of all time, Minecraft!" />
                        </Link>
                    </div>
                    <div className="row gap-1 border-bottom border-primary mb-4">
                        <h2>Upcoming</h2>
                    </div>
                    <div className="row align-items-center justify-content-between pb-5">
                        <ProjectCard image={Battleship} title="Battleship" description="Simple implementation of the classic Battleship game in C using the SDL library." />
                        <ProjectCard image={ELock} title="E Lock" description="Proof of concept for a Kensington Lock with Bluetooth alerts if disturbed." />
                        <ProjectCard image={Minecraft} title="Minecraft MongoDB" description="Minecraft Java plugin that connects a server to MongoDB." />
                        <ProjectCard image={Navigait} title="NaviGAIT" description="Using computer vision to perform gait analysis frequently and proactively with the ultimate aim of improving preventative care for runners." />
                    </div>
                </main>
                </div>
            </div></>
        )
    }

}