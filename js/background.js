const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bg_img");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);

console.log(bgImage);

