/** Viết hàm sortName() theo tên người dùng từ a-z (chỉ sắp xếp theo
 *  tên , nếu trùng tên ,mới sắp xếp theo họ + tên đệm ) */

const arr = [
  { id: 1, fullName: "Nguyen Anh Huy", age: 32 },
  { id: 2, fullName: "Nguyen Huy Hoang", age: 10 },
  { id: 3, fullName: "Đặng Thanh Huy", age: 30 },
  { id: 4, fullName: "Lê Đạt", age: 30 },
  { id: 5, fullName: "Lê Duy Đạt", age: 30 },
  { id: 6, fullName: "Huy Quốc", age: 30 },
];

function sortName(arr) {
  const result = arr.sort((a, b) => {
    const nameA = a.fullName.split(" ");
    const nameB = b.fullName.split(" ");

    const lastNameA = nameA[nameA.length - 1];
    const lastNameB = nameB[nameB.length - 1];

    if (a.age > b.age) return 1;

    if (a.age < b.age) return -1;
    return 0;
  });
  return result;
}
console.log(sortName(arr));
