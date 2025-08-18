let clock = document.querySelector(".p");
let format = document.querySelector(".format");

function updateClock() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    clock.innerHTML = `${hours + ":" + minutes + ":" + seconds}`;
    format.innerText = hours >= 12 ? "pm" : "am";
};

setInterval(updateClock, 1000);
updateClock();