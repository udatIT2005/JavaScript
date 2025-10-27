const arr = [
  {
    name: "hoang",
  },
  {
    name: "dat",
  },
];
console.log(JSON.stringify(arr));
// console.log(typeof arr);
const obj1 = JSON.stringify(arr);

console.log(JSON.parse(obj1));

const arr1 = {
  products: [
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 18.19,
      rating: 2.86,
      stock: 34,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "BEA-GLA-EYE-002",
      weight: 9,
      returnPolicy: "7 days return policy",
      minimumOrderQuantity: 20,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
  ],
  total: 194,
  skip: 0,
  limit: 30,
};
localStorage.setItem("products", JSON.stringify(arr1));
// JSON.parse(arr);

const animals = {
  park: [
    {
      id: 1,
      name: "dog",
      age: 10,
    },
  ],
};
console.log(JSON.stringify(animals));

localStorage.setItem("park", JSON.stringify(animals));
