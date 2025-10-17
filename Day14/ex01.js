// console.log("xin chào 1");
// setTimeout(() => {
//   console.log("Xin chào 2");
// }, 2000);

// //callback, time (điền cũng được không điền mặc định là 0)
// //window là chế độ global là có sẫn

// const timer1 = setTimeout(() => {
//   console.log("xin chào 3");
// }, 2000);
// clearTimeout(timer1);

/** cho i = 0 dùng timer để mỗi giây in ra i tăng lên 1 so với lần trước đó  */

let i = 0;
setInterval(() => {
  document.write(++i);
  document.close();
}, 2000);
