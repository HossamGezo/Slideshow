let img = document.querySelector("img");
let i = 1;
let arrImg = [
  `assets/images/show-1.png`,
  `assets/images/show-2.png`,
  `assets/images/show-3.png`,
  `assets/images/show-4.png`,
  `assets/images/show-5.png`,
  `assets/images/show-6.png`,
  `assets/images/show-7.png`
];

setInterval(slideShow, 3000);

function slideShow() {
  img.src = `${arrImg[i]}`;
  i + 1 === arrImg.length ? i = 0 : ++i;
}