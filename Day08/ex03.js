// Tạo 1 object student theo 3 cách khác nhau (literal, new Object, class)
// 👉 Có thuộc tính: name, age, major
// 👉 Viết phương thức introduce() in ra "Xin chào, tôi là [name], học ngành [major]"

// Cách 2 new Object
const student = new Object();
student.name = "Dat";
student.age = 20;
student.introduce = function () {
  console.log(`Xin chào , tôi là ${this.name}, học ngành ${this.age}`);
};
console.log(student);
student.introduce();

// Cách 1 : literal
// const students = {
//   name: "Dat",
//   age: 20,
//   major: "Web",
//   introduce: function () {
//     console.log(`Xin chào , tôi là ${this.name}, học ngành ${students.major}`);
//   },
// };
// students.introduce();

// console.log(students);

// Bài 2 – Trung bình:

// Viết constructor function Car có:

// thuộc tính: brand, price

// phương thức info() in ra "Xe [brand] có giá [price] triệu"

// 👉 Tạo 2 object car1, car2 và gọi phương thức info()

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
  this.inFo = function () {
    console.log(`Xe ${this.brand} có giá ${this.price}`);
  };
}
const Cars = new Car("Nike", 2000000);
Cars.inFo();
console.log(Cars);
