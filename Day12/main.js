// console.log(true || [] || {});

// const arr1 = [1, 3, 5, 7, 8, 9, 19, 0];
// const arr = arr1.sort((a, b) => {
//   console.log("Đây là a:  ", a);
//   console.log(`Đây là b :  ${b}`);
// });
// console.log(arr);
// console.log(arr1);

const arr3 = [
  { id: 1, name: "product 1", price: 200 },
  { id: 2, name: "product 2", price: 140 },
  { id: 3, name: "product 3", price: 300 },
];

/**
 * Lấy ra arr4 product giá giảm dần
 * Lấy ra arr5 product giá tăng dần
 */
const arr4 = [...arr3].sort((a, b) => a.price - b.price);
const arr5 = [...arr3].sort((a, b) => b.price - a.price);
console.log(arr4);
console.log(arr5);

const users = [
  { id: 1, name: "a", email: "hoang@gmail.com" },
  { id: 2, name: "minh", email: "minh@gmail.com" },
  { id: 3, name: "hieu", email: "hieu@gmail.com" },
  { id: 4, name: "dat", email: "dat@gmail.com" },
];

// const result = users.sort((a, b) => a.name - b.name);
// console.log(result);

// console.log([] < []);
// console.log("hoang" > "quan");

function SortUser(users) {
  const result = [...users].sort((a, b) => {
    if (a.name > b.name) return -1;
    // if (a.name > b.name) return 1;
  });
  return result;
}
console.log(SortUser(users));

/**
 * Sort : sắp xếp mảng , thay đổi mảng gốc
 * toSorted : sắp xếp mảng , không thay đổi mảng gốc
 */
