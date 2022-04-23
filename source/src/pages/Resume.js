import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default class Resume extends Component {

    render() {
        return (
            <div>
                <Header activePage="resume" />
                <div className="container-lg mt-5 pt-5">
                    <div className="d-flex mt-4">
                        <Link to="/home" style={{ textDecoration: "none" }}>&#8592; Back to Home</Link>
                    </div>
                    <div className="jumbotron mt-3 pt-5">
                        <h1 className="display-4">Resume</h1>
                        <hr className="my-4" />
                    </div>
                    <h4>Contact</h4>
                    <p>
                        btesq235@gmail.com, bte12@pitt.edu / 484-280-2433<br />
                        Permanent Address: 5843 Snowy Orchid Lane / Allentown, PA 18104<br />
                        University Address: 3725 Sutherland Drive / Pittsburgh, PA 15213
                    </p>
                    <h4>Objective</h4>
                    <p>
                        ●	Looking to pursue a co-op or internship involving electronics, programming, and robotics<br />
                        ●	Areas of interest include embedded devices, process control, UAV/drones, autonomous vehicles
                    </p>
                    <h4>Education</h4>
                    <p>
                        University of Pittsburgh, Swanson School of Engineering, Class of 2025<br />
                        ●	Anticipated BS in Computer Engineering<br />
                        ●	Pitt University Scholarship<br />
                        ●	3.5 GPA<br />
                    </p>
                    <h4>Relevant Skills</h4>
                    <p>
                        ●	Experience with rudimentary sysadmin and networking tasks, virtualization, and containerization<br />
                        ●	Proficient in C/C++, JavaScript, Python, and HTML/CSS<br />
                        ●	Proficient with React, Nodejs, and web app design (PWAs)<br />
                        ●	Experience with Swift, Java, and TensorFlow Python API<br />
                        ●	Linux CLI/Bash<br />
                        ●	Proficient with Raspberry Pi and Arduino<br />
                    </p>
                    <h4>Projects/Personal</h4>
                    <p>
                        ●	Built and configured a server for virtualization, containerization, and file sharing<br />
                        ●	Built and configured a pfSense router using an old server<br />
                        ●	Deployed several websites and hosts various VPN services on servers at home and in the cloud<br />
                        ●	Constructed a base station to track planes and ships<br />
                        ●	Built and programmed a semi-autonomous robot<br />
                        ●	Minecraft hosting service for some friends<br />
                        ●	Implemented Bluetooth and wrote iOS app (Swift) for Kensington “E-Lock” POC<br />
                        ●	Art of Making - SparkFun Redbot, littleBits + Arduino Smart Home system, human-centered design “pretotyping”<br />
                    </p>
                    <h4>Involvement/Activities</h4>
                    <p>
                        <strong>Clubs</strong><br />
                        Pitt Triathlon Club, 2021 - Present<br />
                        Pitt Cycling Club, 2021 - Present<br /><br />
                        <strong>Volunteering</strong><br />
                        Fair Districts PA, 2018 - Present<br />
                        Volunteer/Organizer<br />
                        ●	Data collection and database entry, authored letters to the editor and member of state government, chaired information tables at various events<br /><br />
                        <strong>High School Activities</strong><br />
                        Varsity Track and Cross Country<br />
                        ●	Captain senior year<br />
                        EPC SAC (Student-Athlete Character) council<br />
                        National Honors Society, Math Honors Society, Spanish Honors Society<br />
                        Lehigh University Summer Engineering Institute, 2019<br />
                        Trained at Leading Edge Martial Arts for 10 years and earned two black belts<br />
                    </p>
                    <h4>Work Experience</h4>
                    <p>
                        Lehigh Country Club, Utility Staff - Summer 2021
                    </p>
                    <h4>Github</h4>
                    <p>
                        Username: <code>delta-12</code><br />
                        Github homepage: <Link to="//github.com/delta-12" target="_blank" rel="noopener noreferrer">https://github.com/delta-12</Link><br />
                    </p>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                </div>
            </div>
        )
    }

}