const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const traffic = document.querySelector('#traffic');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    traffic.removeEventListener('click', makeRed);
    traffic.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl3.style.background = ('black');
    traffic.removeEventListener('click', makeGreen);
    traffic.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    traffic.removeEventListener('click', makeYellow);
    traffic.addEventListener('click', makeGreen);
}

traffic.addEventListener('click', makeGreen);