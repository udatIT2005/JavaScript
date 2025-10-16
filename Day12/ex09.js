// Find: Tìm phần tử đầu tiên thỏa mãn điều kiện trả về phần tử thỏa mãn hoặc underfined
const nums2 = [5, 12, 8, 130, 44];

// 1. Tìm phần tử đầu tiên > 10
function findFirstGreaterThan10(arr) {
  return arr.find((item) => (item = item > 10));
}
console.log(findFirstGreaterThan10(nums2)); // 12
