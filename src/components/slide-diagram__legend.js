import React from "react";
import './slide-diagram__legend.css';

export default function SlideDiagramLegend (props) {
    let {data} = props;

    return (
            <div className={"slide-diagram__legend"}>
                {getTexts()}
            </div>
    );

    function getTexts() {
        return data.map((item, i) => (
                <div className={"slide-diagram__text-content"} key={i+1}>
                    <div className={"slide-diagram__group"} style={{display: "flex"}}>
                        <div className={`slide-diagram__dot slide-diagram__dot-${i+1}`} />
                        <div className={"slide-diagram__title"}>{item.title}</div>
                    </div>
                    <div className={"slide-diagram__group"} style={{display: "flex"}}>
                        <div className={"slide-diagram__diff"}>{removeLetters(item.differenceText)}</div>
                        <div className={"slide-diagram__value"}>{removeLetters(item.valueText)}</div>
                    </div>
                </div>
            )
        )
    }
}

function removeLetters(input) {
    let n = [];
    if  (input[0] === "+") n.push("+");
    n.push(parseInt(input));
    return n.join("");
}