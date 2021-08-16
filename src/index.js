import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from "react-dom";
import './fonts/fonts.css';
import './index.css';
import { addEventListeners } from "./helpers";

import Leaders from './slides/leaders';
import Diagram from "./slides/diagram";
import Activity from "./slides/activity";
import Vote from "./slides/vote";
import Chart from "./slides/chart";

const fetchSlideData = async () => {
    return await fetch('./data.json').then(response => response.json());
};

fetchSlideData()
    .then(r => {
        window.allSlidesData = r;
        const { slideNumber, theme } = getUrlParameters();
        const slideData = r[slideNumber - 1];
        window.currSlide = parseInt(slideNumber);
        window.currTheme = theme;

        setTheme(theme, window.root);

        if (slideData) {
            const { alias, data } = slideData;
            renderTemplate(alias, data);
        }
    })
    .then(() => {
        addEventListeners();
    })

const renderTemplate = (alias, data) => {
    let slideComponent;

    switch (alias) {
        case "leaders":
            slideComponent = <Leaders data={data}/>
            break;
        case "diagram":
            slideComponent = <Diagram data={data} />
            break;
        case "activity":
            slideComponent = <Activity data={data} />
            break;
        case "vote":
            slideComponent = <Vote data={data} />
            break;
        case "chart":
            slideComponent = <Chart data={data} />
            break;
        default:
            slideComponent = "Компонент не найден";
    }

    ReactDOM.render(slideComponent, window.root);
    return ReactDOMServer.renderToStaticMarkup(slideComponent);
}

window.renderTemplate = renderTemplate;
window.root = document.getElementById("stories");

export const getUrlParameters = () => {
    let {searchParams} = new URL(document.location.href);
    let slideNumber = searchParams.get("slide");
    let theme = searchParams.get("theme");

    slideNumber = slideNumber || 1;
    theme = theme || "dark";

    return { slideNumber, theme }
}

const setTheme = (theme, root) => {
    root.classList.remove("theme_dark");
    root.classList.remove("theme_light");
    root.classList.add("theme_" + theme);
}