import { Component } from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
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
                        <p>Not sure where to start?  Checkout <Link to="//sites.google.com/view/navigait/home" target="_blank" rel="noopener noreferrer">NaviGAIT</Link> and take a look at my <Link to="//github.com/delta-12" target="_blank" rel="noopener noreferrer">Github (https://github.com/delta-12)</Link></p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}