let days = document.querySelector(".days-text");
let hours = document.querySelector(".hours-text");
let minutes = document.querySelector(".minutes-text");
let seconds = document.querySelector(".seconds-text");
let time = document.querySelector(".end ");

let dayValue = 5;
let hourValue = 0;
let minValue = 0;
let secValue = 15;

let end = document.createElement("p");
let endText = document.createTextNode("time is over");
end.classList.add("fs-1","fw-bolder");
end.appendChild(endText);


const id = setInterval(timer, 1000);

function timer() {
  if (secValue == 0) {
    if (minValue >= 1) {
      minValue--;
      secValue = 59;
    }
  }
  if (minValue == 0 && secValue == 0) {
    if (hourValue >= 1) {
      hourValue--;
      minValue = 59;
      secValue = 59;
    }
  }
  if (hourValue == 0 && minValue == 0 && secValue == 0) {
    if (dayValue >= 1) {
      dayValue--;
      hourValue = 23;
      minValue = 59;
      secValue = 59;
    }
  }
  if (dayValue == 0 && hourValue == 0 && minValue == 0 && secValue == 0) {
    clearInterval(id);
    time.appendChild(end);
  }
  secValue--;
  days.textContent = dayValue.toString().padStart(2, "0");
  hours.textContent = hourValue.toString().padStart(2, "0");
  minutes.textContent = minValue.toString().padStart(2, "0");
  seconds.textContent = secValue.toString().padStart(2, "0");
}
