import { Component } from "react"
import Header from "../components/Header"

export default class Projects extends Component {

    render() {
        return (
            <div>
                <Header activePage="projects" />
                <div className="container-lg mt-5 pt-5">
                    <div className="jumbotron mt-5 pt-5">
                        <h1 className="display-4">Projects</h1>
                        <hr className="my-4" />
                        <p>Explore some of my recent projects.</p>
                    </div>
                </div>
            </div>
        )
    }

}