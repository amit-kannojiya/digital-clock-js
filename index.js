const hourEl = document.getElementById("hour");

const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let sec = new Date().getSeconds();
  let ampm = "AM";
  ampm = hr < 12 ? apmm : "PM";

  hourEl.innerText = hr;
  minutesEl.innerText = min;
  secondEl.innerText = sec;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
