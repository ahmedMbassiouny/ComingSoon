"use strict";

var days = document.querySelector(".days-text");
var hours = document.querySelector(".hours-text");
var minutes = document.querySelector(".minutes-text");
var seconds = document.querySelector(".seconds-text");
var time = document.querySelector(".end ");
var dayValue = 5;
var hourValue = 0;
var minValue = 0;
var secValue = 15;
var end = document.createElement("p");
var endText = document.createTextNode("time is over");
end.classList.add("fs-1", "fw-bolder");
end.appendChild(endText);
var id = setInterval(timer, 1000);

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
//# sourceMappingURL=main.dev.js.map
