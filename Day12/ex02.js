// Luyện tập sort : sắp xếp mảng
// Luyện tập filter : lọc mảng
// Luyện tập map : ánh xạ mảng duyệt mảng

// const result = numbers.filter((item, index, arr) => (item = item % 2 === 0));
// console.log(result);
// Output : 2,4,6,6
// const result = numbers.map((item, index, arr) => (item = item * 2));
// console.log(result);
// Output :  [2, 4, 6, 8, 10, 12, 12]
// const result = numbers.sort((a, b) => a - b);
// console.log(result);
const numbers = [1, 6, 3, 8, 2, 10];
const result = numbers
  .filter((item, index, arr) => (item = item > 5))
  .map((item) => (item = item * 3))
  .sort((a, b) => b - a);
console.log(result);
