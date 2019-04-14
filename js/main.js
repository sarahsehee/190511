function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fixHeights() {
  Array.from(document.getElementsByClassName("vh-100")).forEach(element => {
    element.style.height = window.innerHeight + "px";
  });

  Array.from(document.getElementsByClassName("vh-50")).forEach(element => {
    element.style.height = window.innerHeight / 2 + "px";
  });

  Array.from(document.getElementsByClassName("vh-25")).forEach(element => {
    element.style.height = window.innerHeight / 4 + "px";
  });
}

fixHeights();

const decos = document.querySelectorAll(".deco-grid div svg");
const flowerdiamond = document.querySelectorAll(".deco-grid .scale svg");
const blues = document.querySelectorAll(".deco-grid .rotate svg");

decos.forEach(deco => {
  anime({
    targets: deco,
    delay: (deco, index) => anime.random(500, 1500),
    duration: (deco, index) => anime.random(300, 800),
    loop: false,
    easing: `easeInOutSine`,
    direction: `alternate`,
    opacity: 1,
    autoplay: true
  });
});

flowerdiamond.forEach(item => {
  anime({
    targets: item,
    delay: (item, index) => anime.random(1300, 3000),
    duration: (item, index) => anime.random(2000, 3000),
    scale: (item, index) => anime.random(0.7, 1.2),
    loop: true,
    easing: `easeInOutSine`,
    direction: `alternate`,
    autoplay: true
  });
});

blues.forEach(blue => {
  anime({
    scale: [0.6, 0.8],
    targets: blue,
    delay: (blue, index) => anime.random(3000, 3500),
    duration: 2500,
    rotate: "1turn",
    loop: true,
    easing: "cubicBezier(.5, .05, .1, .3)",
    direction: `alternate`,
    autoplay: true
  });
});

anime({
  targets: ".diamonds svg",
  delay: (element, index) => index * 800,
  duration: 1000,
  scale: (element, index) => anime.random(0.2, 0.5),
  loop: true,
  easing: "cubicBezier(.5, .05, .1, .3)",
  direction: `alternate`,
  autoplay: true
});

anime({
  targets: ".blueflower svg",
  scale: [0.6, 0.8],
  rotate: "1turn",
  delay: (element, index) => index * 1000,
  duration: 1200,
  loop: true,
  direction: "alternate",
  easing: "easeInOutSine"
});
