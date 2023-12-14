const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("Minutes");
const secondEl = document.getElementById("Seconds"); 
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h < 10 ? "0" + h : h;
    minuteEl.innerText = m < 10 ? "0" + m : m;
    secondEl.innerText = s < 10 ? "0" + s : s;
    ampmEl.innerText = ampm;

    setTimeout(updateClock, 1000);
}

updateClock();



