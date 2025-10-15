/**
 * Some : callback : Tìm phần tử trong mảng nếu mà
 * có 1 phần tử đúng trả về true
 * input : item/ index/ arr
 * output: Boolean
 */
/**
 * Every : callback Tìm phần tử trong mảng nếu
 * mà cả mảng mà đúng thì mới trả về true còn chỉ
 * cần có 1 thuộc tính sai thì false
 * input : item/ index/ arr
 * output: boolean
 */

const sum = [1, , 4, 6, 6, 8, , , 9, 10];

// const result = sum.some((item, index, arr) => {
//   console.log(index);
//   console.log(item);
//   console.log(arr);
//   return (item = item = 1);
// });
// console.log(result);

// Cách học : học thụ động hiểu nhưng phải thực hành và vận dụng
const product = [
  { id: 1, name: "nam", pice: 22, quantity: 10 },
  { id: 2, name: "nam", pice: 18, quantity: 4 },
  { id: 3, name: "nam", pice: 20, quantity: 5 },
  { id: 4, name: "nam", pice: 7, quantity: 2 },
];

const result = product.every((item, index, arr) => {
  return (item = item.name === "nam");
});
const result2 = product.some((item, index, arr) => {
  return (item = item.name === "nam");
});
console.log(result);
console.log(result2);
