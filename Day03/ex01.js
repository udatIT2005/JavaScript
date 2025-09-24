let weight = parseFloat(prompt("Mời nhập cân nặng"));
let height = parseFloat(prompt("Mời nhập chiều cao "));
console.log(weight);
console.log(height);
console.log({ Number });
console.log({ String });

var BMI = weight / height ** 2;
console.log(BMI);
// if (18.5 > BMI) {
//   console.log("Thiếu cân");
// } else if (18.5 <= BMI && BMI < 23) {
//   console.log("Bình thường");
// } else if (23 <= BMI && BMI < 25) {
//   console.log("Thừa cân");
// } else {
//   console.log("Béo phì");
// }
// console.log(BMI);
switch (true) {
  case 18.5 > BMI:
    console.log("Thiếu cân");
    break;
  case 18.5 <= BMI && BMI < 23:
    console.log("Bình thường");
    break;
  case 18.5 <= BMI && BMI < 23:
    console.log("Thừa cân");
    break;
  case BMI > 23:
    console.log("Béo phì");
    break;
  default:
    break;
}
