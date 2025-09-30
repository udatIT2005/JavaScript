const arr = [1, 2, , null, 3, 4]; // [4, 3, , ,2,1]
// Reverse : Đảo ngược mảng thay đổi mảng gốc
arr.reverse();
console.log(arr);

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[arr.length - 1 - i];
// }
// console.log(result);

// console.log(arr);

//toReverse : Đảo ngược mảng và trả về mảng mới không thay đổi mảng gốc

// arr.toReversed();
// console.log(arr);

// console.log(arr);

/// Join : Gộp mảng thành chuỗi

/// toString : Biến mảng thành chuỗi
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());
let mixed = ["Js", Number, NaN, 2025, Object];
console.log(mixed.toString());
console.log(mixed);

let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits.join());
console.log(fruits.join("-"));
