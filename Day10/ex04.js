// Lấy ra red và blue bằng destructuring.
const colors = ["red", "green", "blue"];

const [red, , blue] = colors;
console.log(red);
console.log(blue);
console.log(colors);

// Bài 2 : Lấy name và country ra khỏi object.
// const user = { name: "Khai", age: 20, country: "Vietnam" };
// const { name, country } = user;
// console.log(user);

// Bài 3 : Gộp hai mảng
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log(c);

// Kết quả: [1, 2, 3, 4]
// Bài 4 : Rest parameter
// Viết hàm nhận n số bất kỳ và trả về tổng.

function sum(...rest) {
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 67));

// Bài 5 : Lấy ra city từ object sau
const person = {
  name: "Lan",
  address: { street: "ABC", city: "Ha Noi" },
};

const { city } = person.address;
console.log(city);
// Bài 6 : Lấy name nhưng đổi tên thành fullName.

const { name: fullName = "fullName" } = person.name;

console.log(person);
// Bài 7 : Sao chép object product nhưng đổi giá price thành mới
const product = { name: "Oto", price: 10000 };
const newproduct = { ...product, price: 15000 };
console.log(newproduct);
//Bài 8 : Loại bỏ phần tử đầu tiên khỏi mảng bằng destructuring
const numbers = [1, 2, 3, 4];
const [_, ...number] = numbers;
console.log(number);

// Kết quả: restNumbers = [2, 3, 4]

// Bài 9 : Deep clone object (shallow vs spread) – phân biệt
const user = {
  name: "Khai",
  info: { age: 20, country: "Vietnam" },
};

const cloneUser = { ...user }; // spread copy

cloneUser.info.age = 25;

console.log(user.info.age); // ❗25 - bị ảnh hưởng
