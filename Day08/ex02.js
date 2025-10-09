function Person(name, age) {
  this.name = name;
  this.age = age;
}
// Thêm phương thức tĩnh
Person.hello = function () {
  console.log("hello");
};

// Gọi phương thức tĩnh
Person.hello();

// KHông thể gọi từ instance
let p1 = new Person("alice", 25);
console.log(p1.hello()); // underfined
