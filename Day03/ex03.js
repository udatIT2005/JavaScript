/**
 * 1. Lập trình là giải quyết bài toán của cuộc sống
 * // Đối tượng : -> sự vật hiện tượng trong cuộc sống
 * // Sự kiện : Hành vi xảy ra
 * Hàm : -> Chức năng , chuỗi hành động
 */
/**
 * ! Hàm
 * Input
 * Output
 * Logic hàm : ( giải thuật)
 */

/**
 * 1. Tính tái sử dụng cao
 * 2. Đóng gói
 */

/**
 * input : number
 * output : boolean
 * logic : kiểm tra chia hết cho 2
 */

// Input : Kiểm tra Number
// function checkInt(a) {
//   //Logic
//   if (a % 2) {
//     console.log(a);
//     return true;
//   }
//   return false;
// }
// console.log(checkInt(1));
// output : True or false

// Đề : Kiểm tra số nguyên tố
//Input : Hàm kiểm tra số nguyên tố
function CheckNumber(number) {
  //Logic
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    // Kiểm tra xem số đó có chia hết cho số dư không
    if (number % i === 0) return false;
  }
  return true;
}
//ouput : Check số nguyên tố
console.log(CheckNumber(2));

// Hàm không có return thì trả về underfined.
// Logic sau return sẽ không được thực hiện
