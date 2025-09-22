// Đối tượng chuỗi trong JS
let str1 = "hello";
let str2 = new String("hello");
console.log({ str1 });
console.log({ str2 });
// //False value khi phủ định là true hết
// console.log(!null);

// // Ép kiểu tự động (ngầm)
// + với phép + có 1 vế là chuỗi thì ưu tiên ép sang chuỗi
// + Với phép + thông thường không có vế nào là chuỗi thì được ưu tiên
// tính toán như biểu thức toán học

// // Ép kiểu chủ động
console.log(Number(null));
// instance là một giá trị cụ thể của hàm tạo sinh ra
