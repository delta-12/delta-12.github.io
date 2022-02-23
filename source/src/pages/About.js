import { Component } from "react"
import Header from "../components/Header"

export default class About extends Component {

    render() {
        return (
            <div>
                <Header activePage="about" />
                <div className="container-lg mt-5 pt-5">
                    <div className="jumbotron mt-5 pt-5">
                        <h1 className="display-4">About</h1>
                        <hr className="my-4" />
                        <p>Learn more about me.</p>
                    </div>
                </div>
            </div>
        )
    }

}