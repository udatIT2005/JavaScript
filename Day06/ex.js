/**
 * Thao tác với mảng đầu và cuối : push, pop, shift, unshift
 * Thao tác tìm kiếm : includes, indexOf, find, filter
 * Thao tác chuyển đổi : reverse, flat
 * Thao tác duyệt : forEach, map , reduce
 *
 */
// 1  Thao tác với mảng đầu và cuối
const arr = [1, 2, 3, 4];
// Push thêm và cuối mảng nhưng không cho giá trị gì thì không thêm được gì
arr.push(6, 7);
// Thêm vào đầu mảng nếu không cho giá trị gì thì không thêm được gì
arr.unshift("hhiih", "hà");
//pop xóa phần tử ở cuối mảng nhưng cho giá trị vào trong thì không xóa được
arr.pop();
//shift xóa phần tử ở đầu mảng nhưng nếu không cho giá trị gì thì không xóa được gì
arr.shift();

// Và các phương thức trên làm thayy đổi mảng gốc
console.log(arr);

arr.length++;
arr.length--;
console.log(arr);

arr.length = 100;
console.log(arr);
// Kiểm tra độ dài
console.log(arr.length);
//Kiểm tra kiểu dữ liệu
console.log(typeof arr);
// Ép kiểu chủ động
console.log(typeof Number(arr));
// Empty là phần tử rỗng nhưng vẫn chiếm không gian
