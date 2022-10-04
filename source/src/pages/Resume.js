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
                        Email: bte12@pitt.edu
                    </p>
                    <h4>Objective</h4>
                    <p>
                        ●	Co-op or internship starting spring or summer of 2023 with the potential for future international work opportunities in later rotations<br />
                        ●	Real-world, impactful work involving multidisciplinary, hands-on projects combining robotics, embedded devices, process control, automation, cloud computing, distributed systems, wireless communications, and/or automotive and ariel vehicles
                    </p>
                    <h4>Education</h4>
                    <p>
                        <strong><i>Swanson School of Engineering | University Honors College at University of Pittsburgh, Class of 2025</i></strong><br />
                        ●	Anticipated BS in Computer Engineering<br />
                        ●	Pitt University Scholarship<br />
                        ●	3.65 GPA<br />
                    </p>
                    <h4>Relevant Experience and Coursework</h4>
                    <p>
                        <strong><i>MSA, Software Quality Engineering Intern - Summer 2022</i></strong><br />
                        ●	Automated software testing for MSA’s G1 SCBA using Python, Pytest, and Raspberry Pis equipped with CAN and relay hats, BLE, and RFID<br />
                        ●	Wrote tool to sniff and parse CAN bus messages<br />
                        ●	Atlassian tools (Confluence, Jira, Bitbucket, Bamboo)<br />
                        <br />
                        <strong><i>Art of Making: engineering course involving hands-on, human-centered system design</i></strong><br />
                        ●	Developed skills involving rapid prototyping, user empathy, project management, communicating, presenting, and data-driven design<br />
                        ●	Projects: SparkFun Redbot robot, littleBits + Arduino Smart Home system, tangible Minecraft user interface, ESP32-based Bluetooth-enabled cycling safety vest, developed computer vision web app for automating gait analysis at UPMC Sports Medicine as part of an intensive 8-week capstone<br />
                        ●	Computer vision web app capstone project: React frontend, backend consisting of Nodejs and Python microservices, MongoDB, processed slow-motion video using OpenCV + FFmpeg<br />
                    </p>
                    <h4>Skills and Other Experience</h4>
                    <p>
                        ●	Languages: C/C++, Python, JavaScript (React, Nodejs), HTML/CSS<br />
                        ●	Proficient with Linux, Bash, Vim, Nano, Git/GitHub, Docker, MongoDB, MATLAB<br />
                        ●	Experience with Swift and Java, TensorFlow and OpenCV, AWS, Heroku<br />
                        ●	Soldering, basic electronics and circuit components<br />
                        ●	Raspberry Pi and Arduino<br />
                        ●	Experience with rudimentary sysadmin and networking tasks, virtualization, and containerization<br />
                        <br />
                        <strong><i>Maker Guest Star for Art of Making - Fall 2022</i></strong><br />
                        ●	Unpaid teaching assistant, assist with student questions, troubleshooting, instructor projects<br />
                        <br />
                        <strong><i>Lehigh Country Club, Utility Staff - Summer 2021</i></strong><br />
                        ●	Washed dishes, cleaned floors, unloaded and organized inventory, performed odd jobs around kitchen including basic food preparation<br />
                    </p>
                    <h4>Projects/Personal</h4>
                    <p>
                        ●	Built and configured a server for virtualization, containerization, and file sharing<br />
                        ●	Built and configured a pfSense router using an old server<br />
                        ●	Deployed several websites, VPN services, a Minecraft hosting service to cloud and severs at home<br />
                        ●	Constructed base stations to track planes and ships<br />
                        ●	Built and programmed a semi-autonomous robot<br />
                        ●	Cross-platform Battleship game w/ GUI implemented in C using SDL<br />
                    </p>
                    <h4>Involvement/Activities</h4>
                    <p>
                        <strong>Clubs</strong><br />
                        <i>Pitt Triathlon Club, 2021 - Present</i><br />
                        ●   President, 2022 - Present<br />
                        <i>Pitt Cycling Club, 2021 - Present</i><br /><br />
                        <strong>Volunteering</strong><br />
                        <i>Fair Districts PA, 2018 - 2022</i><br />
                        Volunteer/Organizer<br />
                        ●	Data collection and database entry, authored letters to the editor and member of state government, chaired information tables at various events<br /><br />
                        <strong>High School Activities</strong><br />
                        <i>Varsity Track and Cross Country</i><br />
                        ●	Captain senior year<br />
                        <i>EPC SAC (Student-Athlete Character) council</i><br />
                        <i>National Honors Society, Math Honors Society, Spanish Honors Society</i><br />
                        <i>Lehigh University Summer Engineering Institute, 2019</i><br />
                        <i>Trained at Leading Edge Martial Arts for 10 years and earned two black belts</i><br />
                    </p>
                    <h4>Github</h4>
                    <p>
                        Username: <code>delta-12</code><br />
                        Github homepage: <Link to="//github.com/delta-12" target="_blank" rel="noopener noreferrer">https://github.com/delta-12</Link><br />
                    </p>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                </div>
            </div >
        )
    }

}