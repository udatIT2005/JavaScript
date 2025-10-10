/**
 * Deep Copy
 */
const obj1 = {
  // thuộc tính của object
  name: "hoàng",
  info: {
    age: 30,
    dress: "BG",
    email: undefined,
  },
  // Phương thức là hành động của thuộc tính

  what() {
    console.log("Bạn là ai ");
  },
};
obj1.what();
obj1.info.age = 50;

// Cách copy theo kiểu string
console.log(JSON.stringify(obj1));

const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2);
console.log(obj1);

// Lưu ý : sao chép kiểu JSON.stringify thì mất phương thức và không sao chép được thuộc tính Underfined, ...
