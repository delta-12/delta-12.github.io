import { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"

export default class CyclingSafetyVest extends Component {

    state = {
        windowWidth: window.innerWidth    
      }
    
      componentDidMount() {
        window.addEventListener("resize", this.handleResize)
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize)
      }
    
      handleResize = e => {
        e.preventDefault()
        this.setState({
          windowWidth: window.innerWidth
        })
      }

    render() {
        return (
            <div>
                <Header />
                <div className="container-lg mt-5 pt-5">
                    <div className="d-flex mt-4">
                        <Link to="/projects" style={{ textDecoration: "none" }}>&#8592; Back to Projects</Link>
                    </div>
                    <div className="jumbotron mt-3 pt-5">
                        <h1 className="display-4">Cycling Safety Vest</h1>
                        <hr className="my-4" />
                    </div>
                    <p>
                        Cycle safely with the cycling safety vest. The vest uses an Adafruit Circuit Playground Bluefruit to drive a series of Neopixel strips attached to the rear of the vest. The Circuit Playground pairs wirelessly using Bluetooth with a control module based around an ESP32 that resides on the handlebars of the bike. The ESP32 takes inputs from buttons and sensors on the handlebars to determine if the rider is turning or braking. These inputs are then relayed to the vest, which displays braking or turning indicators to drivers, other cyclists, and pedestrians using the Neopixel strips.
                    </p>
                    <p style={{ fontWeight: "bold" }}>
                        Please visit <Link to="//sites.google.com/view/bicyclesafetyvest/home">https://sites.google.com/view/bicyclesafetyvest/home</Link> for a more detailed, comprehensive overiew of the Cycling Safety Vest.
                    </p>
                    <p>View the code for this project code on <Link to="//github.com/delta-12/cycling-safety-vest">Github</Link>!</p>
                    <div className="container col-md-9 justify-content-between text-center">
                        <iframe className="mt-3" width={this.state.windowWidth * 0.5} height={this.state.windowWidth * 0.5 / 1.6} src="https://www.youtube.com/embed/49KoyJveJM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                    <h4>Notice</h4>
                    <p>
                        This project was developed as part of the University of Pittsburgh Swanson School of Engineering course ENGR 0716 The Art of Making: An Introduction to Hands-On System Design and Engineering.
                    </p>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                    <hr className="my-5" style={{ visibility: "hidden" }}></hr>
                </div>
            </div>
        )
    }

}