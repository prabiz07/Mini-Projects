// UI Variables
const hourHand = document.querySelector('.hour__hand');
const minuteHand = document.querySelector('.minute__hand');
const secondHand = document.querySelector('.second__hand');

// Function setDate init
function setDate(){
    const date = new Date();

    // Get Hour
    const hour = date.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    // Get Minute
    const minute = date.getMinutes();
    const minuteDegree = ((minute / 60) *360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    
    // Get Second
    const second = date.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(setDate, 1000);