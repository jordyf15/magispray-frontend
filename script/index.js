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

function closePopUp() {
    const body = document.querySelector("body");
    const popUpBg = document.querySelector('#popup-bg');
    body.removeChild(popUpBg);
}

function displayPopup() {
    const body = document.querySelector("body");
    const popUpBg = document.createElement('div');
    popUpBg.id = 'popup-bg';
    popUpBg.addEventListener('click', closePopUp);

    const textContainer = document.createElement('div');
    textContainer.id = 'form-text-container';

    const notifyForm = document.createElement('form');
    notifyForm.id = 'notify-form';
    notifyForm.addEventListener('click',(e)=>{
        e.stopPropagation();
    })

    const titleForm = document.createElement('p');
    titleForm.id = 'title-form';
    titleForm.textContent = 'Enter your email address';
    textContainer.appendChild(titleForm);

    const subtitleForm = document.createElement('p');
    subtitleForm.id = 'subtitle-form';
    subtitleForm.textContent = 'so we can let you know when our product is ready';
    textContainer.appendChild(subtitleForm);

    notifyForm.appendChild(textContainer);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email-input';
    emailInput.placeholder = 'Email Address';
    emailInput.required = true;
    notifyForm.appendChild(emailInput);

    const submitButton = document.createElement('button');
    submitButton.id = 'submit-button';
    submitButton.textContent = 'Notify Me';
    notifyForm.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.id = 'form-close-button';
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fas');
    closeIcon.classList.add('fa-times');
    closeButton.type = 'button';
    closeButton.appendChild(closeIcon);
    closeButton.addEventListener('click', closePopUp);
    notifyForm.appendChild(closeButton);

    popUpBg.appendChild(notifyForm);
    body.appendChild(popUpBg);
}

const notifyButton = Array.from(document.getElementsByClassName('notify-button'));
notifyButton.forEach((button)=>{
    button.addEventListener('click', displayPopup);
});
