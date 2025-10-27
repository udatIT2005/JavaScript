// const arr = ["apple", "banana", "mango"];

// const result = arr.forEach((item, index, arr) => {
//   console.log(item.toLocaleUpperCase());
// });

// const number = [1, 2, 3, 4, 5];
// number.forEach((item) => {
//   item *= item;
//   console.log(item);
// });

// const users = [
//   { name: "Dat", age: 20 },
//   { name: "Lan", age: 25 },
//   { name: "Huy", age: 30 },
// ];
// users.forEach((item) => {
//   console.log(`${item.name} is ${item.age} years old`);
// });

// Bài tập Map
// const number = [1, 2, 3, 4, 5];

// const result = number.map((item) => {
//   console.log(item);
//   let sum = 0;

//   item *= item *= item;
//   sum += item;
//   return sum;
// });
// console.log(result);

const fruits = ["apple", "banana", "orange"];

function mapsFruits(fruits) {
  let sum = 0;

  const result = fruits.map((item) => {
    const len = item.length; // hoặc item.split("").length
    sum += len; // cộng dồn
    return len; // mỗi phần tử trả về độ dài
  });

  console.log("Từng độ dài:", result);
  console.log("Tổng:", sum);
}
mapsFruits(fruits);
