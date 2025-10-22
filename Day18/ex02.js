// 🟢 PHẦN 1: BÀI TẬP VỀ for
// 🔹 Bài 1:

// In ra các số từ 1 đến 10.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// 🔹 Bài 2:

// In ra các số chẵn từ 1 đến 20.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 🔹 Bài 3:

// Tính tổng các số từ 1 đến 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   // lặp từng lần cộng
//   console.log(sum);
// }
// // tổng
// console.log(sum);

// 🔹 Bài 4:

// In ra bảng cửu chương của 5 (dạng 5 x 1 = 5, 5 x 2 = 10, ...).

// for (let i = 1; i <= 5; i++) {
//   console.log(`Bảng nhân ${i}`);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`Bảng nhân ${i} * ${j} = `, i * j);
//   }
// }
// 🔹 Bài 5:

// Tính tổng các số lẻ từ 1 → 50.
// let sumOdd = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 1) {
//     sumOdd += i;
//     console.log(i);
//   }
// }
// console.log(sumOdd);
// 🔹 Bài 6:

// Nhập vào số n.
// In ra giai thừa của n (ví dụ: 5! = 120).
// const input = parseInt(prompt("Vui lòng nhập số ngẫu nhiên"));
// let sum = 1;
// for (let i = 1; i <= input; i++) {
//   sum *= i;
// }
// console.log(sum);

// 🔹 Bài 7:

// In ra chuỗi ngôi sao như sau (sử dụng for lồng nhau):

// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//   let hihi = "";
//   for (let j = 1; j <= i; j++) {
//     hihi += "*";
//   }
//   console.log(hihi);
// }
// 🔹 Bài 8:

// Tạo mảng numbers = [1, 5, 7, 10, 12, 15]
// Dùng for để in ra các phần tử lớn hơn 7.

// Nếu có mảng thì lấy từng phần tử bằng cách [i]
// const numbers = [1, 5, 7, 10, 12, 15];
// for (let i = 1; i <= numbers.length; i++) {
//   if (numbers[i] > 7) {
//     console.log(numbers[i]);
//   }
// }

// 🔹 Bài 9:

// Cho mảng arr = [2, 4, 6, 8, 10]
// Dùng for để tính tổng các phần tử trong mảng.

// let arr = [2, 4, 6, 8, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// 🔹 Bài 10:

// Dùng for để đảo ngược chuỗi "javascript"
// (👉 gợi ý: duyệt từ cuối chuỗi về đầu).

// 🟡 PHẦN 2: BÀI TẬP VỀ if, else if, else, switch
// 🔹 Bài 11:

// Nhập một số x.
// Nếu x > 0 → in "Số dương"
// Nếu x < 0 → in "Số âm"
// Nếu x = 0 → in "Số không".

// const x = parseFloat(prompt("Vui lòng nhập 1 số bất kỳ"));
// if (x > 0) {
//   console.log("số dương ");
// } else if (x < 0) {
//   console.log("số âm");
// } else {
//   console.log("Số 0");
// }
// console.log(x);

// 🔹 Bài 12:

// Nhập điểm của học sinh (0–10).

// 8–10: "Giỏi"

// 6.5–7.9: "Khá"

// 5–6.4: "Trung bình"

// < 5: "Yếu"

// const pointStudent = parseFloat(prompt("Vui lòng nhập điểm học sinh:"));

// switch (true) {
//   case pointStudent >= 8 && pointStudent <= 10:
//     console.log("Giỏi");
//     break;
//   case pointStudent >= 6.5 && pointStudent < 8:
//     console.log("Khá");
//     break;
//   case pointStudent >= 5 && pointStudent < 6.5:
//     console.log("Trung bình");
//     break;
//   default:
//     console.log("Yếu");
//     break;
// }

// 🔹 Bài 13:

// Nhập 3 số a, b, c.
// In ra số lớn nhất trong 3 số.
// Khi so sánh nhiều giá trị thì phải dùng toán tử logic && thì mới
// chặt chẽ về thuật toán
// const a = parseFloat(prompt("Nhập số a:"));
// const b = parseFloat(prompt("Nhập số b:"));
// const c = parseFloat(prompt("Nhập số c:"));

// if (a > b && a > c) {
//   console.log("Số lớn nhất là a");
// } else if (b > a && b > c) {
//   console.log("Số lớn nhất là b");
// } else if (c > a && c > b) {
//   console.log("Số lớn nhất là c");
// } else {
//   console.log("Có ít nhất hai số bằng nhau");
// }

// 🔹 Bài 14:

// Kiểm tra xem số nhập vào có chia hết cho 3 và 5 không.
// const a = parseFloat(prompt("Nhập số a:"));
// if (a % 5 === 0 && a % 3 === 0) {
//   console.log("Chia hết cho 5 và 3");
// } else {
//   console.log("Ckhoong chia hết");
// }

// 🔹 Bài 15:

// Nhập tháng (1–12), in ra số ngày của tháng đó.
// 👉 Dùng switch-case.
// const a = parseFloat(prompt("Nhập số a:"));
// switch (a) {
//   case 1:
//     console.log("Tháng này có 31 ngày");
//     break;
//   case 2:
//     console.log("Tháng này có 30 ngày");
//     break;
//   case 3:
//     console.log("Tháng này có 29 ngày");

//     break;
//   case 4:
//     console.log("Tháng này có 32 ngày");

//     break;
//   case 5:
//     console.log("Tháng này có 5 ngày");

//     break;
//   case 6:
//     console.log("Tháng này có 6 ngày");

//     break;
//   case 7:
//     console.log("Tháng này có 7 ngày");

//     break;
//   case 8:
//     console.log("Tháng này có 38 ngày");

//     break;
//   case 9:
//     console.log("Tháng này có 9 ngày");

//     break;
//   case 10:
//     console.log("Tháng này có 1 ngày");

//     break;
//   case 11:
//     console.log("Tháng này có 2 ngày");

//     break;
//   case 12:
//     console.log("Tháng này có 3 ngày");

//     break;
//   default:
//     console.log("Ngoài tháng 1 - 12");

//     break;
// }

// 🔹 Bài 16:

// Nhập vào năm, kiểm tra năm nhuận hay không.
// (👉 Năm nhuận nếu chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100.)

// 🔹 Bài 17:

// Nhập vào giờ (0–23).

// Nếu từ 0–11 → "Buổi sáng"

// 12–17 → "Buổi chiều"

// 18–23 → "Buổi tối"

// 🔹 Bài 18:

// Tạo biến x chứa số ngẫu nhiên từ 1 → 10.
// Dùng if để đoán xem x chẵn hay lẻ.

// 🔹 Bài 19:

// Nhập vào điểm kiểm tra (0–100).
// Nếu >= 50 thì "Đậu", ngược lại "Rớt".

// 🔹 Bài 20:

// Tạo biến day = new Date().getDay();
// Dùng switch để in ra "Hôm nay là thứ ..."
// (0 = Chủ nhật, 1 = Thứ hai, ..., 6 = Thứ bảy).

const now = new Date();
console.log(now);

// 🔥 BONUS – Bài 21 (Tổng hợp)

// Viết chương trình:

// In ra các số từ 1 → 100

// Nếu số chia hết cho 3 in "Fizz"

// Nếu số chia hết cho 5 in "Buzz"

// Nếu chia hết cho cả 3 và 5 in "FizzBuzz"
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
