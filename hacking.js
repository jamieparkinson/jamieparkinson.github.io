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
const iKnowImage = document.getElementById("i-know-img");
// Preload
I_KNOW_IMAGES.forEach((name) => { new Image().src = `images/i-know/${name}.gif`; });
let currentIndex = 0;
setInterval(() => {
  iKnowImage.src = `images/i-know/${I_KNOW_IMAGES[currentIndex]}.gif`;
  iKnowImage.alt = I_KNOW_IMAGES[currentIndex];
  currentIndex = (currentIndex + 1) % I_KNOW_IMAGES.length;
}, IMAGE_ROTATE_PERIOD);
