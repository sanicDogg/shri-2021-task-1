import React from "react";
import './slide__caption.css';

export default function SlideCaption(props) {
    return (
        <div className={"slide__caption"}>
            <div className={"slide__title"}>{props.title}</div>
            <div className={"slide__subtitle"}>{props.subtitle}</div>
        </div>
    )
}
