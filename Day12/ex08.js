// Bài tập filter : lọc phần tử trong mảng dựa theo điều kiện
// 1. Lọc số chẵn
function filterEven(arr) {
  const result = arr.filter((item) => {
    item = item % 2 === 0;
    return item;
  });
  return result;
}
console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2,4,6]

// 2. Lọc chuỗi dài hơn 3 ký tự
function filterLongWords(arr) {
  const result = arr.filter((item) => {
    return item.length > 3;
  });
  return result;
}
console.log(filterLongWords(["hi", "hello", "yo", "welcome"])); // ["hello","welcome"]

// 3. Lọc user có age >= 18
const users = [
  { name: "Nam", age: 17 },
  { name: "Huy", age: 22 },
  { name: "Lan", age: 19 },
];
function filterAdult(arr) {
  const result = arr.filter((item) => {
    return item.age >= 18;
  });
  return result;
}
console.log(filterAdult(users)); // [{name:"Huy", age:22}, {name:"Lan", age:19}]

// Dùng length để đo ký tự khi dùng filter
