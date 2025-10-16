// const numbers = [1, 6, 3, " hello"];

// const result = numbers.reduce((a, b, c, d) => {
//   console.table([a, b]);
//   console.info(...numbers);

//   return a + b;
// });

// console.log(result);

// accunulator : biến tích lũy
// currentValue : Value giá trị đang được duyệt
// currentIndex : Index index của Value
// arr : array
// initialValue : giá trị khởi tạo của accumulator

/**
 * reduce((acc, curValue, Index, arr)=> {
 * }, initialValue)
 * : là một phương thức của mảng, dùng để "rút gọn" tất cả các phần tử của mảng
 * thành 1 biến tích lũy duy nhất
 */

const words = ["apple", "banana", "apricot", "blueberry", "cherry"];
const result = words.reduce((acc, cur, index, arr) => {
  firstKey = cur[0];
  if (!acc[firstKey]) {
    acc[firstKey] = [];
  }
  acc[firstKey].push(cur);
  return acc;
}, {});
console.log(result);

/* Kết quả mong muốn:
{
  a: ['apple', 'apricot'],
  b: ['banana', 'blueberry'],
  c: ['cherry']
}
*/
