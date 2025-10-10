/**
 * Spread : rải các giá trị có sẵn vào một object ,
 *  array mới nếu trùng key thì sẽ được ghi đè
 * Destructuring
 * Rest (phần còn lại ) của object khi dùng destructering 1 nửa
 */

const obj1 = {
  name: "hoang",
  age: "20",
};
const obj2 = {
  name: "dat",
  age: "22",
};
const arr = [1, , , , 2, 3];

const fullInfor = {
  ...obj1,
  ...obj2,
  ...arr,
  address: "HaNoi",
  1: "hi",
};

console.log(fullInfor);

const obj3 = {
  fullName: "Ứng Đạt",
  email: "ungdat@gmail.com",
  age: 20,
  idol: "sky",
  hometown: "Hà Nội",
  password: "123456",
};

const fullName = { ...obj3 };
console.log(fullName);

const { email, password: matkhau, ...orther } = obj3; // destructering

console.log(email);
console.log(matkhau);
console.log(orther);

const copyObj = { ...obj3 }; // shallow copy

console.log("hello", 1, 5, 7, "Js");

function sum(...rest) {
  console.log(rest);
  let total = 0;
  for (let num of rest) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4));
