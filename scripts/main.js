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

let logo = document.querySelectorAll('.header__logos__logo');
let logoActiveClass = "header__logo--active";

let slideIndex = 1;
showLogo(slideIndex);

function logoCarousel(n) {
    showLogo(slideIndex += n);
}
function showLogo(n) {
    let i;
    if (document.querySelector(".header__logos__logo")) {
        if (n > logo.length) {
            slideIndex = 1
        };
        if (n < 1) {
            slideIndex = logo.length
        };
        for (i = 0; i < logo.length; i++) {
            logo[i].style.display = "none";
        };

        logo[slideIndex-1].style.display = "block";
    }
}

setInterval(function() {
    logoCarousel(1)
}, 2000);

function init() {
    var touchClass = isTouchDevice() ? "touch" : "no-touch";
    document.body.classList.add(touchClass);
    document.body.classList.remove("preload");
    document.body.classList.add("loaded");
};

window.onload = function () {
    init();
}
