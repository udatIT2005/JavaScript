// Dạng 1 : Biến và toán tử
// Bài 1: Tổng hiệu tích thương
// let a = 10;
// let b = 6;
// console.log("Tổng", a + b);
// console.log("Hiệu", a - b);
// console.log("Tích", a * b);
// console.log("Thương", a / b);

// 2. Viết chương trình chuyển đổi độ từ C sang F công thức : F = C * 9/5 + 32
// let C = 9;
// console.log("F = ", C * (9 / 5) + 32);

// 3. Nhập vào bán kính r tính chu vi diện tích hình tròn
// let r = parseFloat(prompt("Vui lòng nhập bán kính"));
// console.log("Chu vi hình tròn : ", r * 2 * 3.14);
// console.log("Diện tích hình tròn : ", r * r * 3.14);

// 4 . Viết phương trình kiểm tra số có chẵn hay lẻ
// let Number1 = parseFloat(prompt("Vui lòng nhập 1 số ngẫu nhiên"));

// if (Number1 % 2 === 0) {
//   console.log("số chẵn ");
// } else {
//   console.log("Số lẻ");
// }

// 5 . Tính bình phương và lập phương trình của 1 số
// let Number1 = parseFloat(prompt("Vui lòng nhập số"));

// console.log("Bình phương", Number1 * Number1);
// console.log("Lập phương", Number1 ** 3);

// Dạng 2 : Câu lệnh điều kiện if / switch case

// Bài 1 : Nhập vào tuổi - kiểm tra tuổi bầu cử >= 18 ;
// let Age = parseInt(prompt("Vui lòng nhập tuổi "));
// console.log(Age);

// if (Age >= 18) {
//   console.log("Đã đủ tuổi bầu cử");
// } else if (isNaN(Age)) {
//   console.log("Vui lòng nhập thông tin");
// } else {
//   console.log(" Chưa đủ tuổi");
// }

// 7. Nhập vào một số → cho biết là dương, âm hay bằng 0.

// let Number1 = parseFloat(prompt("Bạn hãy nhập 1 số ngẫu nhiên"));
// console.log(Number1);
// // input : Nhập 1 số ngẫu nhiên
// //logic
// if (Number1 > 1) {
//   console.log("Số dương");
// } else if (Number1 === 0) {
//   console.log("Số trung tính");
// } else {
//   console.log("Số âm");
// }
//Ouput : Số âm, dương , âm , trung tính

// 8. Viết chương trình nhập vào 3 số → tìm số lớn nhất.

// let BigNumber1 = parseFloat(prompt("Vui lòng nhập vào số thứ 1"));
// let BigNumber2 = parseFloat(prompt("Vui lòng nhập vào số thứ 2"));
// let BigNumber3 = parseFloat(prompt("Vui lòng nhập vào số thứ 3"));
// // input : tìm số lớn nhất
// //logic
// let max;
// if (BigNumber1 > BigNumber2 && BigNumber1 > BigNumber3) {
//   max = BigNumber1;
// } else if (BigNumber2 > BigNumber3 && BigNumber2 > BigNumber1) {
//   max = BigNumber2;
// } else {
//   max = BigNumber3;
// }
// console.log("Số lớn nhất là :", max);

//output : số lớn nhất trong 3 số

// 9. Nhập vào một số (1–7) → in ra thứ trong tuần (ví dụ 1 = Chủ nhật).
// let BigNumber1 = parseFloat(prompt("Vui lòng nhập vào số thứ 1-7"));
// switch (BigNumber1) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Vui lòng nhập ký tự và từ 1-7 thôi nhé v");
//     break;
// }

// Dạng 3 : Vòng lặp (for/ while)
// 1. In ra các số từ 1-100;
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// 2. In ra các bảng cửu chương từ 2 - 9

// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let sum = i * j;
//     console.log(`${i} * ${j} == ${sum}`);
//   }
// }

// 3. Tính tổng các số từ 1 đến N.

// let n = parseFloat(prompt("Vui lòng nhập n"));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("Tổng từ 1 đến", n, "là:", sum);
// 4. Input In ra tất cả số nguyên tố từ 1 → 100.
// In ra tất cả số nguyên tố từ 1 → 100
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  // kiểm tra từ 2 đến i - 1
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
