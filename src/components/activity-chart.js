import React from "react";
import "./activity-chart.css";
import { isOrientationPortrait } from "../helpers";

export default function ActivityChart (props) {
    let { data } = props;
    let oPortrait = isOrientationPortrait(props.orientation);

    let finalData = getFinalData();

    return (
        <div className={"activity-chart"}> { getActivityChartElements() } </div>
    )

    function getActivityChartElements() {
        let bottom = oPortrait ? 4.45 : 3.5; // 4.45vmin for portrait, 3.5vmin for album
        finalData.reverse();
        return finalData.map((item, i, arr) => {
            return (
                <div style={{bottom: `${(bottom * i).toFixed(2)}vmin`, zIndex: arr.length - i}}
                     className={getClassName(item.dayOfWeek)}
                     key={i}>
                    {item.points}
                </div>
            )
        });
        function getClassName(dayOfWeek) {
            return oPortrait ?
                "activity-chart__day-of-week" :
                "activity-chart__day-of-week activity-chart__" + dayOfWeek
        }
    }

    function getFinalData() {
        return oPortrait ? p() : a();

        function p() {
            let d = [];

            for (const dayOfWeek in data) {
                let current = data[dayOfWeek];
                current.forEach((n, i) => {
                    if (d[i] === undefined) {
                        let arr = [n];
                        d[i] = arr;
                    } else {
                        d[i].push(n)
                    }
                })
            }

            return d.map((nArray, i) => {
                let points = nArray.map((n, j) => (
                    <HeatMapPoint value={n} key={(i + 1) * (j + 1)}/>
                ));
                return {
                    hour: i + 1, points
                }
            });
        }

        function a() {
            let d = []
            for (const dayOfWeek in data) {
                let current = data[dayOfWeek];
                let preparedData = zipHours(current);

                let points = preparedData.map((n, i) => (
                    <HeatMapPoint value={n} key={dayOfWeek+i} />
                ))
                d.push({dayOfWeek, points});
            }
            return d;
        }
    }

    function zipHours(dayOfWeek) {
        let twoHours = [];
        for (let i = 0; i < dayOfWeek.length; i+=2) {
            twoHours.push(dayOfWeek[i] + dayOfWeek[i + 1]);
        }
        return twoHours;
    }
}

class HeatMapPoint extends React.Component {
    render() {
        let className;

        if (this.props.value === 0) className = "activity-chart__min";
        if (this.props.value >= 1 && this.props.value <= 2) className = "activity-chart__mid";
        if (this.props.value >= 3 && this.props.value <= 4) className = "activity-chart__max";
        if (this.props.value >= 5 && this.props.value <= 6) className = "activity-chart__extra";

        return (
            <div className={className} />
        )
    }
}