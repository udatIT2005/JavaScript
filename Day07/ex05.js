const obj1 = { name: "Thang" };
const obj2 = obj1;
const obj3 = { name: "thắng" };
console.log(obj2 === obj1);
console.log(obj1 === obj3);

const obj4 = { ...obj1 };
console.log(obj4 === obj1);
console.log(obj4.name === obj1.name);
