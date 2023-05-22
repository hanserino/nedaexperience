var siteInfo = {
    "sitename": "Rauma Badeklubb",
    "contact": {
        "name": "Hans Kristian Smedsrød",
        "phone": "+47 928 41 558",
        "github": "https://github.com/hanserino/",
        "email": "eplehans@gmail.com"
    }
}

moment.locale('nb');

const today = new Date(),
    todaysDate = moment(today).format("YYYY-MM-DD"),
    tomorrowsDate = moment(today).add(1,'days').format("YYYY-MM-DD");

var isTouchDevice = function () {
    return (
        !!(typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch &&
                    typeof document !== 'undefined' &&
                    document instanceof window.DocumentTouch))) ||
        !!(typeof navigator !== 'undefined' &&
            (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
    );
};

function init() {
    var touchClass = isTouchDevice() ? "touch" : "no-touch";
    document.body.classList.add(touchClass);
}

window.onload = function () {
    init();
    renderData();
    document.body.classList.remove("preload");
    document.body.classList.add("loaded");
}
