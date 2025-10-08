const myInfor = {
  name: "Dat",
  name: "Nmae",
  hometowm: "Vạn kim ",
};
// Thêm
myInfor.address = " Hà NỘi";
// Sửa
myInfor.address = " Hồ CHí Minh";
// Xóa
delete myInfor.name;

// Thêm sửa xóa với Object

console.log(myInfor);
console.log(Object.keys(myInfor));
console.log(Object.values(myInfor));
console.log(Object.entries(myInfor));

// Không thể áp dụng vòng lặp for cho object
// Dùng được for in với Object
for (key of myInfor) {
  console.log(key);
}
// Dùng for of với Object
