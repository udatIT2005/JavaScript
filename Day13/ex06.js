/** Viết hàm render ra otp trả
 * về otp(one time passwword) có độ dài length
 * nếu không truyền length mặc định là 6*/
function render(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}
console.log(render(6));

let user = { name: " Đạt", age: 18, city: { address: "HN" } };
let hihih = { ...user };
// Sao chép nông
// hihih.name = "Hà";
// Sao chép sâu
hihih.city.address = "Đà nẵng";
console.log(user.city.address);
console.log(user);

// console.log(hihih);

let deep = structuredClone(user);
console.log(deep);

const arr = [1, 2, 2, 3, 3];

let arr1 = arr.pop(1);
console.log(arr);
console.log(arr1);
