// 🟢 Cơ bản

// In ra các số từ 1 đến 10.
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// In ra các số chẵn từ 1 đến 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// In ra các số lẻ từ 1 đến 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// Tính tổng các số từ 1 → N (nhập N từ bàn phím).
// const n = parseFloat(prompt("Vui lòng nhập n"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// Tính tích (giai thừa) của 1 số N.

// 🟡 Trung bình

// In ra bảng cửu chương (2 → 9).
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let sum = i * j;
//     console.log(`${i} * ${j} = ${sum}`);
//   }
// }
// In ra tất cả số chia hết cho 3 và 5 từ 1 → 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
// Đếm có bao nhiêu số chẵn và bao nhiêu số lẻ trong khoảng 1 → N.
// const n = parseInt(prompt("Vui lòng nhập n"));
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     evenCount++; // số chẵn
//   } else {
//     oddCount++; // số lẻ
//   }
// }

// console.log("Số chẵn:", evenCount);
// console.log("Số lẻ:", oddCount);

// Tính tổng các số lẻ từ 1 → N.
// const n = parseInt(prompt("Vui lòng nhập n"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//     console.log(n);
//   }
// }
// console.log(sum);

// Nhập 1 số N, kiểm tra xem nó có phải số nguyên tố không.
// const n = parseInt(prompt("Vui lòng nhập n"));

// for (let i = 0; i <= n; i++) {
//   if (n % 2 === 0) {
//     console.log("Không phải số nguyên tố");
//   } else {
//     console.log("Số nguyên tố");
//   }
// }

// 🔴 Nâng cao

// In ra tất cả số nguyên tố từ 1 → 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(`Số nguyên tố `, i);
//   }
// }

// Vẽ tam giác vuông bằng dấu * (cao N dòng).

const n = parseInt(prompt("Vui lòng nhập n"));

for (let i = 1; i <= n; i++) {
  let line = "";
  // Tạo dấu *
  for (let j = 1; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}
