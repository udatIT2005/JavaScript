/**
 * Viết hàm nhập mảng người dùng đứng trong thang máy tính tổng tải trọng và báo true và false để đảm
 * bảo an toàn cho thang máy biết thang máu chỉ chịu được trọng lượng 750kg
 */

// const people = [
//   { name: "dat", scale: 55 },
//   { name: "pháo", scale: 100 },
//   { name: "omama", scale: 80 },
//   { name: "obaba", scale: 2825 },
// ];

// function calc(...list) {
//   console.log(list);
//   let total = 0;
//   for (let i = 0; i < list.length; i++) {
//     total += list[i].scale;
//     if (total > 750) {
//       console.log("QUá cân ");
//       break;
//     }
//   }
//   return total <= 750;
// }
// console.log(calc(...people));

// Bài 2 :
// Product: { name, price }
const calc = ({ name: "Áo", price: 200 }, { name: "Quần", price: 300 });

function calcTotal(...rest) {
  console.log(rest);
  let total = 0;
  for (let i = 0; i < rest.length; i++) {
    total += rest[i].price;
  }
  return total;
}
console.log(calcTotal(calc));
