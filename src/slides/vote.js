import React from "react";

import SlideCaption from "../components/slide__caption";
import SlideVoteUsers from "../components/slide-vote__users";

export default class Vote extends React.Component {
    constructor() {
        super();
        this.state = this.getResolutionObject()
    }

    onResize = e => {
        this.setState(this.getResolutionObject())
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
        window.screen.orientation.addEventListener("change", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
        window.screen.orientation.removeEventListener("change", this.onResize);
    }

    getResolutionObject() {
        return {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            orientation: window.screen.orientation.type
        }
    }

    render() {
        return(
            <div className={"slide slide-vote"}>
                <SlideCaption title={this.props.data.title} subtitle={this.props.data.subtitle} />
                <SlideVoteUsers data={this.props.data} resolution={this.state}/>
            </div>
        )
    }
}