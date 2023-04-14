import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

// Navigation responsivity
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", (event) => {
  drawer.classList.toggle("open");
  event.preventDefault();
});

hero.addEventListener("click", () => {
  drawer.classList.remove("open");
});

main.addEventListener("click", () => {
  drawer.classList.remove("open");
});

// Fetch from json

const posts = document.querySelector(".posts");

document.addEventListener("DOMContentLoaded", async () => {
  const jsonData = await import("../DATA.json");
  const objData = jsonData.default.restaurants;

  let postElement = "";

  objData.forEach((data) => {
    postElement += `
            <div class="post-item">
            <img
                src="${data.pictureId}"
                alt="${data.name}"
                class="post-item__thumbnail"
            />
            <div class="post-item__content">
                <h1 class="post-item__title">${data.name}</h1>
            <div class="post-item__sub-content">
                <p class="post-item__city">${data.city}</p>
                <p class="post-item__rating">${data.rating}</p>
            </div>
            <p class="post-item__description">
                ${data.description}
            </p>
            </div>
            </div>
        `;
  });

  posts.innerHTML = postElement;
});
