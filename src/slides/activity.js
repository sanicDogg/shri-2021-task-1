import React from "react";
import SlideCaption from "../components/slide__caption";
import ActivityChart from "../components/activity-chart";
import SlideActivityLegend from "../components/slide-activity__legend";

export default class Activity extends React.Component {
    constructor() {
        super();
        this.state = {orientation: window.screen.orientation.type};
    }

    onOrientationChange = e => {
        this.setState({
            orientation: e.currentTarget.type
        })
    }

    componentDidMount() {
        if ('orientation' in window.screen)
            window.screen.orientation.addEventListener("change", this.onOrientationChange)
    }

    componentWillUnmount() {
        if ('orientation' in window.screen) {
            window.screen.orientation.removeEventListener("change", this.onOrientationChange );
        }
    }

    render() {
        return (
            <div className={"slide slide-activity"}>
                <SlideCaption title={this.props.data.title} subtitle={this.props.data.subtitle}/>
                <ActivityChart data={this.props.data.data} orientation={this.state.orientation} />
                <SlideActivityLegend orientation={this.state.orientation}/>
            </div>
        );
    }
}