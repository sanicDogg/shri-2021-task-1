import React from "react";
import SlideCaption from "../components/slide__caption";
import DoughnutChart from "../components/doughnut-chart";
import SlideDiagramLegend from "../components/slide-diagram__legend";
import "./diagram.css";

export default class Diagram extends React.Component {
    render() {
        return (
            <div className={"slide slide-diagram"}>
                <SlideCaption title={this.props.data.title} subtitle={this.props.data.subtitle}/>
                <div className={"slide-diagram__content-wrapper"}>
                    <DoughnutChart data={this.props.data}/>
                    <SlideDiagramLegend data={this.props.data.categories}/>
                </div>
            </div>
        );
    }
}