/**
 * ! shallow Coppy
 * 1. Array
 * 2. Object
 */
/// Cách copy shallow copy nông
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copy theo spread

const arr3 = arr1.concat(arr2); // nối mảng

console.log(arr1);
console.log(arr2);
console.log(arr2 === arr1);

const obj1 = {
  name: "dat",
  infor: {
    age: 33,
    sex: "male",
  },
};

const obj2 = { ...obj1 };
// Cùng tham chiếu tới địa chỉ ô nhớ heap
console.log(obj2);
obj2.infor.sex = "female"; // Deep copy
console.log("obj1", obj1);
console.log("obj2", obj2);
