/**
 * In ra từng cặp key value
 *  của object trên với vòng lặp
 * name - hoang
 * email-thayhoangjs
 * position : chủ tịch
 */
const myTeacher = {
  name: "Hoàng",
  email: " Thầy hoàng Js",
  position: " Chủ tịch",
};

console.log(myTeacher);
for (key in myTeacher) {
  console.log(key);
}

for (values in myTeacher) {
  console.log(`${myTeacher[values]}`);
}
