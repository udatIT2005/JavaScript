// const arr = [1, 2, , 4, , 6, 7, 8, 9, , 0, 100];

// const result = arr.filter((item, index, arr) => item < 5);
// console.log(result);

/**
 * Filter : callback dùng để lọc các phần tử tronng mảng dựa vào điều kiện.
 * input : item / index / array
 * output : [](mảng thỏa mãn ) / [] mảng rỗng
 */

// Bài tập lọc nhũng sinh viên nhỏ hơn hoặc bằng 20 tuổi

const students = [
  { id: 1, name: "Ứng Đạt", age: 22 },
  { id: 2, name: "Ứng tài", age: 18 },
  { id: 3, name: "Ứng trí", age: 20 },
  { id: 4, name: "Ứng văn", age: -1 },
  { id: 5, name: "Ứng hải", age: 29 },
];

console.log(students);

// Cú pháp rút gọn của arow Function
const result = students.filter((item) => item.age <= undefined);
console.log(result);

// Và tất cả các phương thức tìm kiếm không thay đổi mảng gốc
