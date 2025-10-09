// Object literal
console.log("Cách 1 : Object literal");

const car = {
  brand: "Mec",
  model: "Vip",
  Year: "2025",
  getInfor: function () {
    console.log(`${this.brand} ${this.model}`);
  },
};
console.log(car);
car.getInfor();
// new object
console.log("Cách 2 New Object");

const student = new Object({
  fullName: "Ung Dat",
  score: 10,
  showScore: function () {
    console.log(`${this.fullName} - ${this.score}`);
  },
});

console.log(student);
student.showScore();

console.log("Cách 3 : Factory function");

function createPhone(brand, price) {
  return {
    brand,
    price,
  };
}
console.log(createPhone(`Điện thoại ${"Iphone"}`, `gia ${20000}`));

console.log("Cách 4 : Constructor function");
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
const book = new Book("Hi", "Dat", 2025);
console.log(book);
console.log(" Cách 5 : Class");
console.log(" Cách 6 : Object create");
