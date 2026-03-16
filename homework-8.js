import { products } from "./products.js";

const productsContainer = document.querySelector(".product-card-wrapper");
const productTemplate = document.getElementById("product-template");

const productsMap = products.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});
console.log(productsMap);

let count = Number(prompt("Сколько карточек показать? (1-5)"));
if (isNaN(count) || count < 1 || count > 5) {
  count = 5;
};

products.slice(0, count).forEach(product => {
  const card = productTemplate.content.cloneNode(true);
  card.querySelector(".product-card__title").textContent = product.title;
  card.querySelector(".product-card__type").textContent = product.type;
  card.querySelector(".product-card__description").textContent = product.description;
  card.querySelector(".product-card__price-digit").textContent = product.price + " ₽";
  card.querySelector(".product-card__img").src = product.image;
  card.querySelector(".product-card__img").alt = product.alt;
  const compoundList = card.querySelector(".product-card__compound");
  product.compound.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("product-card__comp-item");
    li.textContent = item;
    compoundList.appendChild(li);
  });

  productsContainer.appendChild(card);
});