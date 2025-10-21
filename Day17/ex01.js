// Bai 1
// const h1Element = document.getElementById("title");
// const btnElement = document.getElementById("btn");
// console.log({ h1Element });
// btnElement.addEventListener("click", function () {
//   h1Element.innerHTML = " Xin chao viet nam";
//   console.log(h1Element.innerHTML);
// });

// Bai 2: Theem phần tử vào cuối

// const AddElement = document.getElementById("add");
// const ulElement = document.getElementById("list");
// AddElement.addEventListener("click", function () {
//   const liElement = document.createElement("li");
//   liElement.textContent = "JS";
//   document.body.appendChild(liElement);
// });

// Bài 3 : Thêm xóa 3 phần tử

// lấy phần tử element Node
// const addElement = document.getElementsByTagName("button")[0];
// const lastRemoveElement = document.getElementsByTagName("button")[1];
// const removeElement = document.getElementsByTagName("button")[2];
// console.log(addElement);

// // xử lý sự kiện
// addElement.addEventListener("click", function () {
//   // Tạo ra Phần tử element node
//   const h1Element = document.createElement("h1");
//   console.log(h1Element);
//   h1Element.innerHTML = "Thêm thành công ";

//   // Thêm phần tử của Element
//   document.body.appendChild(h1Element);
//   // Xóa phần tử con của element
//   document.body.removeChild(h1Element);
//   //Xóa tất cả phần tử
//   document.body.remove(h1Element);
// });

// Bài 4 :
// const pElement = document.getElementsByTagName("p")[0];
// console.log(pElement);
// const colorElement = document.getElementsByTagName("button")[0];
// console.log(colorElement);

// colorElement.addEventListener("click", function () {
//   pElement.style.color = " red";
//   console.log(pElement.style);
// });
