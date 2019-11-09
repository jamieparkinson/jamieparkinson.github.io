// Infinite marquees
const marquees = document.querySelectorAll(".marquee");
marquees.forEach((marquee) => {
  const inner = marquee.firstElementChild;
  const inner2 = inner.cloneNode(true);
  inner2.style.animationName = "marquee2";
  inner2.style.animationDuration = "18s";
  inner2.style.animationIterationCount = "infinite";
  inner2.style.animationDelay = "9s";
  marquee.appendChild(inner2);
});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Make rainbow text
const RAINBOW = [
  "#f69",
  "#54e6e4",
  "#fffd37",
  "#676bfb",
  "#48c42c",
  "#9f97fa",
  "violet",
  "red",
];
const emphases = document.querySelectorAll("em");
emphases.forEach((em) => {
  const characters = em.innerText.split("");
  const thisRainbow = shuffle(RAINBOW);
  const spans = characters.map((c, i) =>
    c !== " " ? `<span style="color: ${thisRainbow[i % RAINBOW.length]}">${c}</span>` : " "
  );
  em.innerHTML = spans.join("");
});


// Rotate the things what I know
const IMAGE_ROTATE_PERIOD = 1500;
const I_KNOW_IMAGES = shuffle([
  "html",
  "javascript",
  "aws",
  "docker",
  "c",
  "css",
  "python",
  "react",
  "monads"
]);
const imageElements = I_KNOW_IMAGES.map((name) => {
  const img = new Image();
  img.id = "i-know-img";
  img.src = `images/i-know/${name}.gif`;
  img.alt = name;
  return img;
});
let currentIndex = 0;
setInterval(() => {
  const img = document.getElementById("i-know-img");
  img.parentNode.replaceChild(imageElements[currentIndex], img);
  currentIndex = (currentIndex + 1) % I_KNOW_IMAGES.length;
}, IMAGE_ROTATE_PERIOD);
