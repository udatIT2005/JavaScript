const myName = "Dat";

console.log(myName.charAt(0));
// Lấy ký tự trong chuỗi

console.log(myName[1]);

myName[0] = "h";
delete myName[0];
console.log(myName);
// Cập nhật / xóa 1 phần chuỗi không được  (primitive type)

//Vòng lặp qua chuỗi
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}

// Chuyển đổi sang kiểu chuỗi
let age = 100;
console.log(age);

console.log(age.toString());
console.log(age + "");
