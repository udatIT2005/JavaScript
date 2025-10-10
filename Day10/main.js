// Flat : làm phẳng mảng
//default value : mặc định là làm phẳng 1 cấp
// Còn nếu mà không xác định được thì dùng infinity
const arr1 = [1, undefined, null, 4, [5, 67, NaN, [3, , 5, 7, [1]]]];
// arr1.flat(4);
// console.log(arr1);
// const flatArr = arr1.flat();
// console.log(flatArr);

const myArr = [
  [1, 2],
  [7, -1],
  [9, 8],
  [0, -1, [100, 6, 9]],
];
// Tìm giá trị lớn nhất trong mảng
// đầu tiên thì làm phẳng mảng sau đó tạo function truyền giá trị muốn tìm số lớn nhất
//sau đó duyệt vòng lặp và cho max = phần tử đầu tiên
// sau đó nếu mà max mà nhỏ hơn phần tử trong mảng thì
// gán lại cho max
// và return max để ra kết quả vì nếu không return thì kết quả cứ mãi  trong hàm
const flatArray = myArr.flat(Infinity);
console.log(flatArray);

function flatArr(flatArray) {
  let max = flatArray[0];
  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] > max) {
      max = flatArray[i];
    }
  }
  return max;
}

console.log(flatArr(flatArray));

/**
 * Viết hàm flat(deeth) mo phỏng lại cách hoạt động
 * của phương thức array.flat() nhưng không được dùng flat()
 */

function flat(arr, depth = 1) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      newArr.push(...flat(arr[i], depth - 1));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(flat([1, , 2, [5], null, undefined, NaN, 3, 4, [5]], Infinity));
