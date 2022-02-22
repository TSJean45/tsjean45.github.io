// Scrolling Animated Text
const txts = document.querySelector(".animated-text").children,
  txtsLen = txts.length;
let i = 0;
const slideInTimer = 3500,
  slideOutTimer = 3500;

function animateText() {
  for (let j = 0; j < txtsLen; j++) {
    txts[j].classList.remove("slide-in", "slide-out");
  }
  txts[i].classList.add("slide-in");

  setTimeout(function () {
    txts[i].classList.add("slide-out");
  }, slideOutTimer)

  setTimeout(function () {

    if (i == txtsLen - 1) {
      i = 0;
    }
    else {
      i++;
    }
    animateText();
  }, slideInTimer);
}

window.onload = animateText;