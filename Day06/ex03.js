// Nối 2 mảng
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a.concat(b));
console.log(b);

// Thêm sửa xóa thay đổi phần tử trong mảng (thay đổi mảng gốc)

let sum = [1, 2, 3, , 5, 7, 89, 6];
console.log(sum.splice(0, 2, 3, 4, 5));
console.log(sum);
// clice( start end ) cắt mảng nhưng không thay đổi mảng gốc
let result = [1, 2, , 3, 4, 5, 67, 8, 9];
result.slice(0, 4);
console.log(result.slice(0, 3));
let hi = console.log(result);
/// Bài tập dễ
// Bài 1
// let arr = [10, 20, 30, 40, 50, 40];

// console.log(arr.slice(1, 3));

// Lấy ra 20 , 30

// Bài 2
// let arr = ["a", "b", "c", "d"];
// → Xóa "c" và "d" ra khỏi mảng gốc.
// arr.splice(2, 3);
// console.log(arr);

// Bài 6
// let arr = [100, 200, 300, 400];
// → Thay 200 và 300 thành 250, 275, 290.
// arr.splice(1, 2, 250, 275, 290);
// console.log(arr);

/// Bài 7
let arr = [1, 2, 3, 4, 5, 6];
// → Tạo mảng mới thành [1, 2, 6, 5, 4, 3].
arr.splice(2, 5, 6, 5, 4, 3);
console.log(arr);
// Bài 8
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
console.log(arr1.concat(arr3).concat(arr2));
const Kqua = arr1.concat(arr3).concat(arr2);
Kqua.splice(3, 6, 9, 8, 7);
console.log(Kqua.concat(arr2));

// → Tạo ra [1, 2, 3, 9, 8, 7, 4, 5, 6].
