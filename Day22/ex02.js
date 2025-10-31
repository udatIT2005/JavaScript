const productEle = document.getElementById("products");
const previewEle = document.getElementById("preview");
const currentpageEle = document.getElementById("current-page");
const nextEle = document.getElementById("next");

let page = 1;
let limit = 12;
let skip = (page - 1) * 12;
const fetchProducts = async (limit = 12, skip = 0) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const { products } = await res.json();
    console.log(products);
    renderUI(products);
    return products;
  } catch (error) {
    console.log(error);
  }
};

const renderUI = (data) => {
  data.forEach((product) => {
    const prodEle = document.createElement("div");
    prodEle.classList.add("product");
    prodEle.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" width="150">
      <h3>${product.title}</h3>
      <p>Price: ${product.price}</p>
    `;
    productEle.appendChild(prodEle);
  });
  currentpageEle.textContent = page;
};

nextEle.addEventListener("click", () => {
  page++;
  skip = (page - 1) * limit;
  fetchProducts();
});
previewEle.addEventListener("click", () => {
  if (page > 1) {
    page--;
    skip = (page - 1) * limit;
    fetchProducts();
  }
});

fetchProducts();
