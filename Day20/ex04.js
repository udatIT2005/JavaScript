const result = fetch("https://dummyjson.com/carts");
console.log(result);
result
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log("dữ liệu nè ", data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(0.1 + 0.2 === 0.3); // false
console.log(typeof NaN); // number
console.log([1, 2, 3] + [4, 5, 6]); // ép ra chuỗi
console.log(!!"false"); // ! 2 true và 2 false
