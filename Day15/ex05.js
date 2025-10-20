const data = [
  { id: 1, name: "iphone", price: 2000 },
  { id: 2, name: "apple", price: 4000 },
  { id: 3, name: "samsung", price: 8000 },
];

const products = document.getElementsByClassName("products")[0];
console.log(products);

let maxPrice = data[0].price;
for (let i = 0; i < data.length; i++) {
  if (data[i].price > maxPrice) {
    maxPrice = data[i].price;
  }
}
data.forEach((item) => {
  let liElement = document.createElement("li");
  liElement.innerHTML = `
  <h2>${item.name}</h2>
  <p>${item.price}</p>
  `;
  if (item.price === maxPrice) {
    liElement.style.color = "red";
  }
  products.appendChild(liElement);
});
