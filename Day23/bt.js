const fetchApi = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();
    console.log(products);

    return data;
  } catch (error) {
    console.log(error);
  }
};
fetchApi();
