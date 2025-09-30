const arr = ["Ứng Đạt", "Huy", "Khương ", "QUốc", , , , "jack"];
// console.log(arr);
// console.log(arr.length); // Kiểm tra trong mảng bao nhiêu key value

// console.log(typeof arr); // kiểm tra kiểu dữ liệu
const arr1 = [1, null, 3];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr[i]);
}

/**
 * * Lọc mảng ban đầu ra thành 2 mảng, 1 mảng số chẵn, 1 mảng số lẻ
 */
const arr2 = [1, 2, 5, 7, 9, 66, 88, 99];

//input : lọc 2 mảng thành

// chẵn
const everArr = [];
// lẻ
const oddArr = [];
for (let i = 0; i < arr2; i++) {
  if (arr2[i] % 2 === 0) {
    everArr.push(arr2[i]);
  } else {
    oddArr.unshift(arr2[i]);
  }
}
console.log(oddArr);
console.log(everArr);

//ouput : in ra 2 mảng 1 chẵn 1 lẻ

const arr5 = [
  "Hoang",
  "Donal Trump",
  "",
  null,
  undefined,
  "Dong",
  "Huy",
  NaN,
  0,
  10,
  true,
  [],
];

/**
 * ! BT: Làm sạch các giá trị falsy ở mảng arr5 và đưa vào mảng mới newArr5
 */
let newArr5 = [];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i]) {
    newArr5.push([arr5[i]]);
  }
}
console.log({ newArr5 });
