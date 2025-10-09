const myInfo = {
  name: "Dat",
  age: 20,
};
console.log(myInfo);

console.log(Object.keys(myInfo));
console.log(Object.values(myInfo));
console.log(Object.entries(myInfo));
console.log(Object.fromEntries(Object.entries(myInfo)));

function Person(name, age) {
  this.name = name;
  this.age = age;
  // phương thức (instance method)
  this.hello = function () {
    console.log("Xin chào bạn");
  };
}

// Tạo instance bằng new
const dat = new Person("Ung Dat", 20);
const huy = new Person("Ung Huy", 40);
console.log(dat);
console.log(huy.hello() === dat.hello());

// instance (thể hiện )
// constructor
