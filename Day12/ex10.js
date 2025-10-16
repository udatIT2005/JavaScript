// 1. Tính tổng
function sumReduce(arr) {
  return arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}
console.log(sumReduce([1, 2, 3, 4])); // 10

// 2. Đếm số lần xuất hiện của “a”
function countOccurrences(arr, value) {
  const result = arr.reduce((acc, cur) => {
    if (cur === value) {
      acc++;
    }
    return acc;
  }, 0);
  return result;
}
console.log(countOccurrences(["a", "b", "a", "c", "a"], "a")); // 3

// 3. Gom nhóm theo tuổi
const people = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 },
];
function groupByAge(arr) {
  const result = arr.reduce((acc, cur) => {
    // Nếu không có tuổi này
    if (!acc[cur.age]) {
      acc[cur.age] = 1;
    } else {
      // Có rồi thì thêm
      acc[cur.age]++;
    }
    return acc;
  }, {});
  return result;
}
console.log(groupByAge(people));
// { 20: 2, 21: 1 }

// if kiểm tra giá trị truthy và faslsy
