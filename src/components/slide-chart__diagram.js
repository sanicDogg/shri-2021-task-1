import React from "react";
import { isOrientationPortrait } from "../helpers";
import "./slide-chart__diagram.css";

export default function SlideChartDiagram (props) {
    let { values } = props;

    let [preparedValues, max] = prepareData(values);

    return (
        <div className={"slide-chart__diagram"}>
            {getDiagram()}
        </div>
    );

    function getDiagram() {
        return preparedValues.map((item, i) => {
            let { value, title, active } = item;
            let isWide = value.toString().length > 4 ? "_wide" : "";
            let isActive = active ? "_active" : "";

            return (
                <div className={"slide-chart__item" + isWide} key={i}>
                    <div className={"slide-chart__text-top" + isActive}>{value || ""}</div>
                    <div className={"slide-chart__column" + isActive}
                         style={{height: `calc(${value / max} * var(--max-column-height))`}}/>
                    <div className={"slide-chart__text-bottom"}>{title}</div>
                </div>
            )
        })
    }

    function prepareData(values) {
        let valuesCount = isOrientationPortrait(props.resolution.orientation) ? 6 : 9;
        let activeValueIndex;
        values.forEach((item, i) => {
            if (item.active) activeValueIndex = i;
        })
        if (!activeValueIndex) return;
        let preparedValues = values.slice(activeValueIndex - valuesCount + 3, activeValueIndex + 3);
        let max = preparedValues[0].value;
        for (const item of preparedValues) {
            if (item.value > max) max = item.value;
        }
        return [preparedValues, max];
    }
}
