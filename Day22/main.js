const productsEle = document.getElementById("products");
const previewEle = document.getElementById("preview");
const nextEle = document.getElementById("next");
const currentPageEle = document.getElementById("current-page");

let page = 1;
let limit = 12;
let skip = (page - 1) * limit;

const fetchProducts = async () => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();

    console.log("Dữ liệu API:", data);

    renderUI(data.products);

    return data.products;
  } catch (error) {
    console.error("Lỗi fetch:", error);
  }
};

const renderUI = (list) => {
  productsEle.innerHTML = "";

  list.forEach((product) => {
    const productEle = document.createElement("div");
    productEle.classList.add("product");
    productEle.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" width="150">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
    `;
    productsEle.appendChild(productEle);
  });

  currentPageEle.textContent = page;
};

// Nút next page
nextEle.addEventListener("click", () => {
  page++;
  skip = (page - 1) * limit;
  fetchProducts();
});

// Nút prev page
previewEle.addEventListener("click", () => {
  if (page > 1) {
    page--;
    skip = (page - 1) * limit;
    fetchProducts();
  }
});

// Lần đầu load
fetchProducts();
