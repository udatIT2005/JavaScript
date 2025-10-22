const h1Element = document.createElement("h1");
h1Element.innerHTML = " Hello anh em ";
document.body.appendChild(h1Element);

// bài tập mảng
// 🧩 Phần 1: Cơ bản – tạo và truy cập mảng

// Tạo một mảng fruits gồm: "apple", "banana", "mango", "orange".

// In ra phần tử đầu tiên và cuối cùng.

// Thêm "grape" vào cuối mảng.

// Xóa phần tử đầu tiên của mảng.

// In ra độ dài của mảng.

// Kiểm tra xem "banana" có trong mảng không.

// const arr = ["apple", "banana", "mango", "orange"];

// console.log(arr[0]);
// console.log(arr[3]);
// arr.push("grape");
// arr.shift("apple");
// console.log(arr);
// console.log(arr.length);
// console.log(arr.includes("banana"));

// Phần 2: Duyệt mảng

// Tạo mảng numbers = [1, 2, 3, 4, 5, 6].

// Dùng for in ra từng phần tử.

// Dùng for...of in ra bình phương của từng phần tử.

// Dùng forEach() in ra các số chẵn trong mảng.

// Tính tổng các phần tử trong mảng numbers.

// Tạo mảng mới doubleNumbers chứa các phần tử gấp đôi numbers ban đầu.

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// // }
// for (let key of numbers) {
//   console.log(key);
//   console.log(key * key);
// }

// numbers.forEach((item, index, arr) => {
//   if (item % 2 === 0) {
//     console.log(item);
//   }
// });
const numbers = [1, 2, 3, 4, 5, 6];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

const doubleNumbers = [...numbers];

const result = doubleNumbers.map((item, index, arr) => item * 2);

console.log(result);
