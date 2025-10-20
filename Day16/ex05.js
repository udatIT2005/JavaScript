/**
 * Event : Sự kiện
 * Các cách gắn sự kiện
 * 1. Gắn lời gọi hàm vào attribute của thẻ html
 * 2. Dùng JS để gán hàm xử lý sự kiện
 * 3. Dùng evenListener (có thể gán nhiều hàm lắng nghe
 * sự kiện cho cùng 1 phần tử mà không lo bị ghi đè)
 *  +) onchange
 *  +) onclick
 *  +) oninput
 */

// const btnElement = document.getElementById("btn");

// console.log({ btnElement });

// console.log(btnElement.onclick);

// btnElement.onclick = function () {
//   console.log("Xin chào bro");
// };

// // btnElement.onclick = () => console.log("con chó");

// btnElement.addEventListener("click", function () {
//   console.log("súc vật");
//   console.log(event);
// });
// btnElement.addEventListener("click", function () {
//   console.log("yukami");
// });

const input = document.getElementsByName("email")[0];
// console.log(input);
// input.onchange = function () {
//   console.log(event.target);

//   console.log("onchange");
// };
input.oninput = function () {
  console.log(event.target.value);
};

// Khi muốn trỏ vào thì dùng event.target.value

//  * Tìm hiểu trước sự kiện bắt sự kiện nổi bọt với form
//  * và làm việc với form
