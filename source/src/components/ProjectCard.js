import { Component } from "react"

export default class ProjectCard extends Component {

    render() {
        return (
            <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
                <div className="card-body">
                    <div className="row align-items-center justify-content-between">
                    {
                        (this.props.image) ? <img className="card-image pb-2" height="270" width="250" src={this.props.image} alt={this.props.altText} /> : null
                    }
                    </div>
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        )
    }

}