/**
 * Có bao nhiêu cách tạo ra 1 Object
 */

// Object literal
const obj1 = {};

// Dùng hàm khởi tạo có sẵn (New Object)
const obj2 = new Object({ name: "Dat" });

// Dùng factory Function
function Motor(name, price, color, brand) {
  return {
    name,
    price,
    color,
    brand,
  };
}

const motor1 = Motor("dream", 25000, "red", "Honda");
const motor2 = Motor("SH", 25000, "black", "Honda");

console.log(motor1);
console.log(motor2);

// Construcstor function
function Otor(name, price) {
  this.name = name;
  this.price = price;
}

const Otor1 = new Otor("VF3", 250000);
console.log(Otor1);

//Class
class Oto2 {
  constructor(name, price) {
    this.name = "name";
    this.price = "price";
  }
}
// Dùng Object.create()
const proto = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person = Object.create(proto);
person.name = "Dat";
person.greet(); // Hello, my name is Dat
