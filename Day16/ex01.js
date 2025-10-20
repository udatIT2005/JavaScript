const data = [
  { id: 1, name: "iphone", price: 2000 },
  { id: 2, name: "apple", price: 4000 },
  { id: 3, name: "samsung", price: 8000 },
];

const products = document.getElementsByClassName("products")[0];
// console.log(products);

let maxPrice = data[0].price;
for (let i = 0; i < data.length; i++) {
  if (data[i].price > maxPrice) {
    maxPrice = data[i].price;
  }
}

// Tạo ra 1 mảng sản phẩm bổ sung thuộc tính slug
// Bọc thẻ h2 cho sản phẩm trong thẻ a
// Bổ sung href cho thẻ a với slug
const newData = data.map((item) => ({
  ...item,
  slug: `${item.name.toLocaleLowerCase().replaceAll(" ", "-")}-${item.id}`,
}));
newData.forEach((item) => {
  let liElement = document.createElement("li");
  liElement.innerHTML = `
  <a href="/${item.slug}">
  <h2>${item.name}</h2>
  </a>
  <p>${item.price}</p>
  `;
  if (item.price === maxPrice) {
    liElement.style.color = "red";
  }
  products.appendChild(liElement);
});
