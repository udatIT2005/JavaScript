// Luyện tập
// Phần 1: forEach : là phương thức của mảng dùng để duyệt các phần tử của mảng thực thi một hành động của mỗi phần tử không trả về giá trị
// 1. In ra từng phần tử
const numbers = [1, 2, 3, 4, 5];
function printArray(arr) {
  arr.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
  });
}
printArray(numbers);
// Output: 1 2 3 4 5

// 2. In ra "Value: x - Index: i"
function printWithIndex(arr) {
  arr.forEach((item, index) => {
    console.log(`Value ${item} - Index ${index}`);
  });
}
printWithIndex(["a", "b", "c"]);
// Output:
// Value: a - Index: 0
// Value: b - Index: 1
// Value: c - Index: 2

// 3. Tính tổng
function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
