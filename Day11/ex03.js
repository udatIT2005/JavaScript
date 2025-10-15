/**
 * map callback():
 * input : item , index , arr
 * output : trả về mảng đã biến đổi và có độ dài mảng bằng độ dài mảng ban đầu
 */

const students = [
  { id: 1, name: "Ứng Đạt", age: 22 },
  { id: 2, name: "Ứng tài", age: 18 },
  { id: 3, name: "Ứng trí", age: 20 },
  { id: 4, name: "Ứng văn", age: -1 },
  { id: 5, name: "Ứng hải", age: 29 },
];

/**
 * trả về mảng mới với tất cả các phần tử thêm 1 cặp key-value : "role" : "student"
 */
const results = students.map((item, index, arr) => {
  //   console.log(item);

  return { ...item, role: "student" };
});
// console.log(results);

const product = [
  { id: 1, name: "tomato", pice: 22, quantity: 10 },
  { id: 2, name: "Apple", pice: 18, quantity: 4 },
  { id: 3, name: "Kiwwi", pice: 20, quantity: 5 },
  { id: 4, name: "orange", pice: 7, quantity: 2 },
];

/**
  { id: 1, name: "tomato", pice: 22, quantity: 10 },
  { id: 2, name: "Apple", pice: 18, quantity: 4 },
  { id: 3, name: "Kiwwi", pice: 20, quantity: 5 },
  { id: 4, name: "orange", pice: 7, quantity: 2 },
 */

const result = product.map((item, index, arr) => {
  console.log(item);
  return { ...item, amount: item.pice * item.quantity };
});

console.log(...result);

const test1 = students.forEach((item) => item);
const test2 = students.map((item) => {
  return item;
});

// Nếu dùng 2 phương thức map và foreach chung 1 array thì biến gán phương thức foreach bị underfined còn map vẫn ra bình thường
console.log(test1);
console.log(test2);
