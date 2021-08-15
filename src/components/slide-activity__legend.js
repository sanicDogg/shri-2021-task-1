import React from "react";
import {isOrientationPortrait} from "../helpers";
import "./slide-activity__legend.css";

export default function SlideActivityLegend (props) {
    let oPortrait = isOrientationPortrait(props.orientation);
    let hoursText = oPortrait ? "1 час" : "2 часа";
    let textsArray = [hoursText, "0", "1 — 2", "3 — 4", "5 — 6"];

    return (
        <div className={"activity-chart__legend"}>
            {getList()}
        </div>
    )

    function getList() {
        return textsArray.map((currText, i) => {
            return (
                    <div className={"activity-chart__legend-item"} key={i}>
                        <div className={"activity-chart__legend-indicator-"+i} />
                        <div className={"activity-chart__legend-text"}>{currText}</div>
                    </div>
            )
        })
    }
}