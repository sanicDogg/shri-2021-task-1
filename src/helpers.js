export function isOrientationPortrait(o) {
    if (window.innerWidth > 1000)
        return window.innerWidth > window.innerHeight ? 0 : 1;
    if (o === "landscape-primary" || o === "landscape-secondary") return 0;
    else return 1;
}

export function getScale(resolution) {
    let { innerWidth, innerHeight } = resolution;
    let scale = 1;
    if (innerWidth > 1000) scale = 2;
    if (innerWidth > 1500) scale = 3;
    if (innerWidth > 2250) scale = 4;
    if (innerWidth === 768 && innerHeight === 1024) {
        scale = 2;
    }
    return scale;
}

const switchFullScreenMode = () => {
    if (!document.fullscreenElement)
        window.root.requestFullscreen()
            .then()
            .catch((err) => console.log(err))
    else
        document.exitFullscreen()
            .then()
}

const onTouchStart = (e) => {
    // Если тапнули по заголовку, переходим в полноэкранный режим и обратно
    if (e.target.classList.contains("slide__title")) {
        switchFullScreenMode()
        return
    }

    // Если тапнули по пользователю в слайде vote, не переключаем слайд
    if (e.target.classList.contains("vote__user") ||
        e.target.classList.contains("vote__user-name") ||
        e.target.classList.contains("vote__user-avatar") ||
        e.target.classList.contains("vote__user-emoji"))
        return;
    if (e.target.classList.contains("vote__bottom-btn_active") ||
        e.target.classList.contains("vote__top-btn_active"))
        return;

    let touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    let touchPosition = { x: touchStart.x, y: touchStart.y };
    let halfOfScreen = window.innerWidth / 2;
    if (touchPosition.x > halfOfScreen)
        changeSlide("ArrowRight");
    if (touchPosition.x < halfOfScreen)
        changeSlide("ArrowLeft");
}

const changeSlide = (eCode) => {
    window.currSlide += eCode === "ArrowRight" ? 1 : -1;
    if (window.currSlide < 1) window.currSlide = window.allSlidesData.length;
    if (window.currSlide > window.allSlidesData.length)
        window.currSlide = 1
    let slideData = window.allSlidesData[window.currSlide - 1];
    const { alias, data } = slideData;
    window.renderTemplate(alias, data);
    changeUrl(document.title, `/?slide=${window.currSlide}&theme=${window.currTheme}`)
}

export function addEventListeners() {
    document.body.addEventListener("keydown", (e) => {
        if (e.code === "KeyF")
            switchFullScreenMode();

        if (e.code === "ArrowRight" || e.code === "ArrowLeft")
            changeSlide(e.code);
    });

    document.body.addEventListener("touchstart", onTouchStart);
}

function changeUrl(title, url) {
    if (typeof (window.history.pushState) != "undefined") {
        let obj = { Title: title, Url: url };
        window.history.pushState(obj, obj.Title, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}