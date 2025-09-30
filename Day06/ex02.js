// bài 1
const cart = [];
// Thêm vào cuối
cart.push("ice cream", "chocolate", "cook");
// Thêm vào đầu
cart.unshift("book");
// Xóa phần tử ở cuối mảng
cart.pop();
// Xóa phần tử ở đầu mảng
cart.shift();
console.log(cart);
// Bài 2
let queue = ["An", "Bình", "Chi"];
// Thêm cuối nhưng phải có giá trị
queue.push("Dũng");
// Thêm đầu phải có giá trị
queue.unshift("Trang");
// Xóa đầu không cần giá trị
queue.shift();
// Xóa cuối không cần giá trị
queue.pop();
console.log(queue);

// Bài 3 : Đảo ngược mảng
const numbers = [1, , 2, 3, 4, 5, 6];
const reverses = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]) {
    reverses.unshift(numbers[i]);
  }
}
console.log(reverses);
const arr = ["Apple", "Banana", "1anane", "kiwi"];

/** Bài 4
 * * Tìm và in ra trái cây có tên dài nhất, tên ngắn nhất.
 * * Nếu phần tử có độ dài bằng nhau thì lấy phần tử đầu tiên tìm được.
 */

let maxlength = arr[0];
let minlength = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > maxlength.length) {
    maxlength = arr[i];
  }
  if (arr[i].length < minlength.length) {
    minlength = arr[i];
  }
}
console.log(arr);

console.log(maxlength);
console.log(minlength);

// Bài 5 // Ví dụ:
const sum = [1, 2, 3, 4, 5, 6];
let result = [];
for (let i = 0; i < sum.length; i++) {
  if (sum[i] % 2 === 1) {
    result.unshift(sum[i]);
  }
}
console.log(result);

// Kết quả mong đợi:
// [5, 3, 1]
