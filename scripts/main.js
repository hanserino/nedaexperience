var siteInfo = {
    "sitename": "NEDA Experience",
    "contact": {
        "name": "Hans Kristian Smedsrød",
        "phone": "+47 928 41 558",
        "github": "https://github.com/hanserino/",
        "email": "eplehans@gmail.com"
    }
}


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
    document.body.classList.remove("preload");
    document.body.classList.add("loaded");
};

window.onload = function () {
    init();
}
