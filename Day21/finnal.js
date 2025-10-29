const fetchProducts = async () => {
  try {
    // Biến này để fetch dữ liệu BE
    const res = await fetch("https://dummyjson.com/carts");
    console.log(res);
    // chuyển về chuỗi json
    const { carts } = await res.json();
    console.log(carts);
    // Trả về dữ liệu
    return carts;
  } catch (error) {
    console.log(error);
  }
};

fetchProducts();
const productsElement = document.getElementById("product");
const previewsElement = document.getElementById("preview");
const currentPageElement = document.getElementById("current-page");
const nextElement = document.getElementById("next");

let page = 1;
let limit = 12;
let skip = (page - 1) * limit;
