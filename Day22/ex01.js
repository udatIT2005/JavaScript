const fetchData = async (limit = 12, skip = 0) => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();
    console.log(products);
    return products;
  } catch (error) {
    console.log(error);
  }
};

fetchData();
