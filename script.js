
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');


function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = (hours % 12) * 30 + (minutes * 0.5);
    const minuteDegrees = minutes * 6 + (seconds * 0.1);
    const secondDegrees = seconds * 6;

    hourHand.style.setProperty('--rotation', `${hourDegrees}deg`);
    minuteHand.style.setProperty('--rotation', `${minuteDegrees}deg`);
    secondHand.style.setProperty('--rotation', `${secondDegrees}deg`);
}


setInterval(updateClock, 1000);


updateClock();
