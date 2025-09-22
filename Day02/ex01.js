// Bài tập Kiểu dữ liệu
let name = "Dat";
console.log(name);
let age = 20;
console.log(typeof age);
let isStudent = true;
console.log(typeof isStudent);
let text = "123";
console.log(typeof text);
// Ép từ String sang number
console.log(typeof Number(text));
// Ép từ Number sang String
console.log(typeof String(text));

// Bài tập toán tử số học
let a = 10;
let b = 3;
console.log(10 ** 2);
console.log();
// Tiền tố hậu tố
let sum = 10;
console.log(++sum - sum-- - sum++ + sum++ - --sum + sum);
// 11 - 10 - 11 + 12 - 11 + 10;
// Toán tử gán và so sánh
let x = 5;
x += 15;
x *= 3;
x /= 4;
console.log(x);
console.log(true + true);
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("0" == 0);
console.log("0" === 0);
// Toán tử logic
console.log(2 && 5);
console.log(0 && 5);
console.log(2 || 5);
console.log(0 || 5);
console.log(!2);
console.log(!0);
// NaN
console.log(NaN == NaN);
console.log(Number("abc"));
console.log(isNaN("abc"));
console.log(isNaN("123"));
// Toán tử 3 ngôi
