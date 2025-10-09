const arr = [1, 8, 3, 4, 20, 6, 7, 11, 20];
/**
 * Sắp xếp mảng tăng dần không dùng phương thức sort
 * + Thuật toán quick sort
 * + merge sort
 * + Bubble Sort
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr; // Nếu mảng = 1 hoặc nhỏ hơn 1 thì nó đã được sắp xếp và kết thúc vòng lặp

  let pivot = arr[arr.length - 1]; // pivot = phần tử cuối

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // phần tử nhỏ hơn pivot → left
    } else {
      right.push(arr[i]); // phần tử ≥ pivot → right
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.time("countTime");

console.time("countTime"); // bắt đầu đo thời gian
console.log(quickSort(arr)); // chạy hàm quickSort
console.timeEnd("countTime");
