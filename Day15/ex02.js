/**
 * Truy vấn :
 * GET
 * +) getElementById
 * +) getElementsByClassName
 * +) getElementsByName
 * +) getElementsByTagName
 * +) getElementsByTagNameNS
 * +) querySelector
 * +) querySelectorAll
 *
 * CREATE
 * +) createElement
 *
 * APPEND : Hiển thị màn hình
 * +) appendChild
 *
 * REMOVE
 * +)removeChild
 */
const h1Element = document.createElement("h1");
h1Element.innerText = " NỘi dung bài học về DOM ";

// document.body.appendChild(h1Element);
// document.body.remove(h1Element);
// Cứ 3 giây thêm i live you vào trang web

// setInterval(() => {
//   const loveElement = document.createElement("h2");
//   loveElement.innerText = "I love you";
//   loveElement.style = "color : red";
//   document.body.appendChild(loveElement);
// }, 3000);

let text =
  "Chào mừng ngày 20 - 10 - 2025 Chúc các cô chị có 1 ngày lễ thật vui vẻ".split(
    ""
  );

function showText() {
  let index = 0;
  let textElement = document.createElement("p");
  document.body.appendChild(textElement);
  let textTime = setInterval(() => {
    textElement.innerHTML += text[index];
    index++;
    if (index === text.length) {
      clearInterval(textTime);
      let textReverse = setInterval(() => {
        const newText = text.slice(0, index - 1);
        textElement.innerHTML = newText.join("");
        index--;
        if (newText.length < 1) {
          clearInterval(textReverse);
          showText();
        }
      }, 100);
    }
  }, 100);
}

showText();
