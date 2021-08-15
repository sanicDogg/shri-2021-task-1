import React from "react";
import SlideCaption from "../components/slide__caption";
import SlideChartUsers from "../components/slide-chart__users";
import SlideChartDiagram from "../components/slide-chart__diagram";

export default class Chart extends React.Component {
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
                <SlideChartDiagram values={this.props.data.values} resolution={this.state}/>
                <SlideChartUsers users={this.props.data.users} resolution={this.state}/>
            </div>
        )
    }
}