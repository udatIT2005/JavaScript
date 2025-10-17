const arr = [
  { id: 1, name: "Nguyen quang hoàng", age: 32 },
  { id: 2, name: "Nguyen quang quyen", age: 10 },
  { id: 3, name: "Nguyen thanh huy", age: 30 },
];
// Viết hàm tìm tên người chỉ tìm theo tên , không tính họ và tên đệm

function searchName(arr, name) {
  return arr.filter((item) => {
    const parts = item.name.split(" ");
    const firstName = parts[parts.length - 1]; // lấy tên riêng
    return firstName === name; // so sánh theo tên
  });
}
console.log(searchName(arr, "huy"));
