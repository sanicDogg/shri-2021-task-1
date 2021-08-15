import React from "react";
import './doughnut-chart.css';
import { arc } from "d3-shape";

export default function DoughnutChart (props) {
    const arcGenerator = arc().cornerRadius(6).padAngle(0.017); // 1 deg in radians
    let outerRadius = 120;
    let innerRadius = outerRadius * 0.7;
    let size = 240;
    let {categories} = props.data;
    let preparedData = prepareData(categories);
    let arcs = getArcs(preparedData);

    let colors = {
        dark: {
            grad1: [
                'rgba(255, 163, 0, 0.8)',
                'rgba(91, 58, 0, 0.8)'
            ],
            grad2: [
                'rgba(99, 63, 0, 0.5)',
                'rgba(15, 9, 0, 0.5)'
            ],
            grad3: [
                'rgba(155, 155, 155, 0.5)',
                'rgba(56, 41, 0, 0.5)'
            ],
            grad4: [
                'rgba(77, 77, 77, 0.5)',
                'rgba(56, 41, 0, 0.5)'
            ]
        },
        light: {
            grad1: [
                'rgba(255, 184, 0, 1)',
                'rgba(255, 239, 153, 1)'
            ],
            grad2: [
                'rgba(255, 184, 0, 0.7)',
                'rgba(255, 239, 153, 0.5)'
            ],
            grad3: [
                'rgba(166, 166, 166, 0.3)',
                'rgba(203, 203, 203, 0.2)'
            ],
            grad4: [
                'rgba(191, 191, 191, 0.8)',
                'rgba(228, 228, 228, 0.6)'
            ]
        }
    }

    let themeColor = document.querySelector(".theme_light") ? colors.light : colors.dark;
    let {totalText, differenceText} = props.data;

    return (
        <div className={"doughnut-chart"}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={"doughnut-chart__svg"}>
                <defs>
                    <radialGradient gradientUnits="userSpaceOnUse" fr="33%" cx="0" cy="0" r="55%" id="grad1">
                        <stop offset="0%" stopColor={`${themeColor.grad1[0]}`}/>
                        <stop offset="65%" stopColor={`${themeColor.grad1[1]}`}/>
                        <stop offset="70%" stopColor={`${themeColor.grad1[1]}`}/>
                        <stop offset="100%" stopColor={`${themeColor.grad1[0]}`}/>
                    </radialGradient>
                    <radialGradient gradientUnits="userSpaceOnUse" fr="33%" cx="0" cy="0" r="55%" id="grad2">
                        <stop offset="0%" stopColor={`${themeColor.grad2[0]}`}/>
                        <stop offset="65%" stopColor={`${themeColor.grad2[1]}`}/>
                        <stop offset="70%" stopColor={`${themeColor.grad2[1]}`}/>
                        <stop offset="100%" stopColor={`${themeColor.grad2[0]}`}/>
                    </radialGradient>
                    <radialGradient gradientUnits="userSpaceOnUse" fr="33%" cx="0" cy="0" r="55%" id="grad3">
                        <stop offset="0%" stopColor={`${themeColor.grad3[0]}`}/>
                        <stop offset="65%" stopColor={`${themeColor.grad3[1]}`}/>
                        <stop offset="70%" stopColor={`${themeColor.grad3[1]}`}/>
                        <stop offset="100%" stopColor={`${themeColor.grad3[0]}`}/>
                    </radialGradient>
                    <radialGradient gradientUnits="userSpaceOnUse" fr="33%" cx="0" cy="0" r="55%" id="grad4">
                        <stop offset="0%" stopColor={`${themeColor.grad4[0]}`}/>
                        <stop offset="65%" stopColor={`${themeColor.grad4[1]}`}/>
                        <stop offset="70%" stopColor={`${themeColor.grad4[1]}`}/>
                        <stop offset="100%" stopColor={`${themeColor.grad4[0]}`}/>
                    </radialGradient>
                </defs>
                <g transform={`translate(${outerRadius} ${outerRadius})`}>
                    <path d={arcs[0]} fill="url(#grad1)"/>
                    <path d={arcs[1]} fill="url(#grad2)"/>
                    <path d={arcs[2]} fill="url(#grad3)"/>
                    <path d={arcs[3]} fill="url(#grad4)"/>
                </g>
            </svg>
            <div className={"doughnut-chart__text"}>
                <div className={"doughnut-chart__text-total"}>{totalText}</div>
                <div className={"doughnut-chart__text-difference"}>{differenceText}</div>
            </div>
        </div>
    )

    function getArcs(data) {
        let sum = data.reduce((sum, item) => sum + item);
        let radians = data.map(item => 2 * Math.PI * (item / sum));
        let arcsArray = [
            getArcObject(
                innerRadius, outerRadius,
                - Math.PI / 6, radians[0] - Math.PI / 6)
        ];

        radians.reduce((acc, item) => {
            arcsArray.push(getArcObject(
                innerRadius, outerRadius,
                acc - Math.PI / 6, acc + item - Math.PI / 6));
            return acc + item;
        });

        return arcsArray
    }

    function getArcObject(iR, oR, sA, eA) {
        return arcGenerator({
            innerRadius: iR,
            outerRadius: oR,
            startAngle: sA,
            endAngle: eA,
        });
    }

    function prepareData(data) {
        return data.map(item => parseInt(item.valueText));
    }
}
