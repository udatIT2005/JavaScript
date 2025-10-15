/**
 * Dùng Find : callback tìm phần tử đầu tiên thỏa mãn điều kiện
 * input : item , index, arr
 * output : item/ underfined
 * Findlast : callback tìm phần tử cuối cùng thoải mãn điều kiện
 * input : item , index, arr
 * output : item/ underfined
 * FindlastIndex : callback , tìm index đầu tiên thỏa mãn điều kiện
 * input : item , index, arr
 * output : index / -1
 * FindIndex : callback , tìm index cuối cùng thoải mãn điều kiện
 * input : item , index, arr
 * output : index / -1
 */
const animals = ["đóm", "cat", "dog", "monkey", "đóm"];

function FindAnimas(animals) {
  const result = animals.find((item, index) => {
    // console.log(item);
    // console.log(index);
    console.log(item);
    console.log(index);

    return item === "đóm";
  });
  console.log(result);
}

FindAnimas(animals);

const number = [4, 5, 6, 10, 69, 50];
const result = number.findLast((item, index, arr) => item > 10);
console.log(result);

// Bài 2 :
const people = [
  { name: "Alice", age: 25 },
  { name: "John", age: 30 },
  { name: "Bob", age: 20 },
];

const name = people.find((item, index, arr) => {
  // console.log(item);
  // console.log(index);
  return item.name === "John";
});
console.log(name);
