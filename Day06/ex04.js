const arr = ["Apple", "Orange", "Banana", "kiwi", "chili", "kiwi", NaN];

console.log(arr);

console.log(arr.includes("Apple", -0));
console.log(arr.includes(NaN));
// includes() :
// + kiểm tra có tồn tại hay không
// + boolean : true or false và có dùng được chỉ số âm

// indexOf :
// + tìm index của phần tử và nếu không có thì là -1
// console.log(arr.indexOf("kiwi"));
// console.log(arr.indexOf("hih"));

// LastindexOf:
// + dùng khi có 2 phần tử trùng nhau và nếu không có thì là -1
console.log(arr.indexOf("kiwi"));
