import React from "react";

import SlideCaption from "../components/slide__caption";
import Podium from "../components/podium";

export default class Leaders extends React.Component {
    constructor() {
        super();
        this.state = this.getResolutionObject()
    }

    onResize = e => {
        this.setState(this.getResolutionObject())
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    getResolutionObject() {
        return {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        }
    }

    render() {
        return (
            <div className={"slide slide-leaders"}>
                <SlideCaption title={this.props.data.title} subtitle={this.props.data.subtitle}/>
                <Podium data={this.props.data} resolution={this.state}/>
            </div>
        );
    }
}