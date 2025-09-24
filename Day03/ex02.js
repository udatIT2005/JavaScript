// Hoán vị 2 số
function swapNumber(a, b) {
  //   a = a + b;
  //   b = a - b;
  //   a = a - b;
  //   // Vì trong này là phạm vi function scope lên phải return ra ngoài
  //   return { a, b };
  if (a > b) {
    a = (a + b) / 2 - (a - b) / 2;

    b = (a + b) / 2 + (a - b) / 2;
  }
  return [a, b];
}
swapNumber(5, 3); // 3,5
console.log(swapNumber(3, 5));
