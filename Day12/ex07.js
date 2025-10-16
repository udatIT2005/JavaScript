// Bài Map : ánh xạ là phương thức của mảng dùng để duyệt qua từng phần tử của mảng trả về 1 mảng mới sau khi biến đổi dữ liệu
// 1. Nhân đôi
const nums = [1, 2, 3, 4];
function doubleNumbers(arr) {
  const result = arr.map((item) => (item = item * 2));
  return result;
}
console.log(doubleNumbers(nums)); // [2, 4, 6, 8]

// 2. Thêm “VN” vào sau mỗi chuỗi
const cities = ["Hà Nội", "Đà Nẵng", "HCM"];
function addCountry(arr) {
  const result = arr.map((item) => {
    item = item + " - VN";
    console.log(item);
    return item;
  });
  return result;
}
console.log(addCountry(cities));
// ["Hà Nội - VN", "Đà Nẵng - VN", "HCM - VN"]

// 3. Lấy độ dài chuỗi
const fruits = ["apple", "kiwi", "banana"];
function getLength(arr) {
  const result = arr.map((item) => {
    return item.length;
  });
  return result;
}
console.log(getLength(fruits)); // [5, 4, 6]

const words = ["hello", "javascript", "map", "function", "banana"];
// ❗Yêu cầu:

// Viết function đếm số nguyên âm trong từng từ
// → Nguyên âm gồm: a, e, i, o, u

// ✅ Output mong muốn:
// [2, 3, 1, 2, 3]

function wordsYin(arr) {
  const vowels = "ueoai";
  const result = arr.map((item) => {
    let count = 0;
    for (let char of item) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  });
  return result;
}
console.log(wordsYin(words));
