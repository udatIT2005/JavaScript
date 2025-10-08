const myInfor = {
  fullName: "Ứng Đat",
  age: "20",
  address: "Hà Nội",
  showAge: () => console.log(this.age),
  showName: function () {
    console.log(`My full Name is ${this.fullName}`);
  },
};
console.log(myInfor);
myInfor.showAge();
myInfor.showName();
