// Bài 1 : const colors = ["red", "green", "blue"] lấy ra red và blue
const colors = ["red", "green", "blue"];
const [red, , blue] = colors;
console.log(red);
console.log(blue);
// Bài 2 : const user = { name: "Dat", age: 21, city: "HN" };
// 👉 Dùng destructuring lấy ra name và city.

const user = { name: "Dat", age: 21, city: "HN" };
const { name, city } = user;
console.log(name);
console.log(city);

// Bài 3:

// Cho object:

const product = { name: "Laptop", price: 1500 };
const { name: title = "alias" } = product;
console.log(title);

// 👉 Đặt name thành biến title bằng destructuring

// Bài 4:

// Gộp 2 mảng bằng spread:

const arr1 = [1, 2];
const arr2 = [3, 4];

const inFo = arr1.concat(arr2);

// 👉 Kết quả: [1, 2, 3, 4]

// 🌾 Phần 3: Rest Parameter
// Bài 7:

// Viết hàm nhận số lượng tham số không giới hạn, trả về tổng:

function sum(...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 7, 9, 9));
