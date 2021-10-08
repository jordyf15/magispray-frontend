function smoothScroll(target, duration) {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if(t<1) return c/2 * t * t +b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }

    requestAnimationFrame(animation);
}

const scrollToLandings = document.getElementsByClassName('scroll-to-landing');
console.log(scrollToLandings);
Array.from(scrollToLandings).forEach((anchor)=>{
    anchor.addEventListener('click', ()=>{
        smoothScroll('#landing-section', 1000);
    });
});

const scrollToProducts = document.getElementsByClassName('scroll-to-product');
Array.from(scrollToProducts).forEach((anchor) => {
    anchor.addEventListener('click', ()=>{
        smoothScroll('#product-section', 1000);
    });
});

const scrollToAboutUs = document.getElementsByClassName('scroll-to-about-us');
Array.from(scrollToAboutUs).forEach((anchor) => {
    anchor.addEventListener('click', () => {
        smoothScroll('#about-us-section', 1000);
    });
});

function displayPopup() {
    const body = document.querySelector("body");
    const popUpBg = document.createElement('div');
}

const notifyButton = Array.from(document.getElementsByClassName('notify-button'));
notifyButton.forEach((button)=>{
    button.addEventListener('click', displayPopup);
});
