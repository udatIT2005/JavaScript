/**
 * classList
 * attribute
 * textNode
 * event
 * form
 */

// Lấy ra phần tử bên html
let h1Element = document.getElementsByTagName("h1")[0];
console.log(h1Element);

// Kiểm tra xem có gì
console.log({ h1Element });

// Dùng để làm tiêu đề của video
h1Element.title = "Javascript siêu đỉnh sịn";

// Xem thêm đường dẫn href
const aElement = document.getElementsByTagName("a")[0];
aElement.href = "https://google.com";

/**
 * getter, setter : lấy và gán
 * getAtrribute(): Lấy attribute , setAttribute() // Gán attribute
 * hasAttributes() : Kiểm tra có không và trả về giá trị boolean
 * removeAttribute() : Xóa attribute
 */

// Thêm attribute cho element
aElement.setAttribute("concho", "concho");
aElement.bbb = "Xin chào"; // sai
console.log(aElement);
// lấy atribute ra
console.log(aElement.getAttribute("concho"));

/**
 * 1. ClassList : lấy ra từng class
 * 2. ClassName : lấy tất cả class
 * 3. Replace : thay thế class sang class khác
 * 4. add ()
 * console.log(aElement.classList); xem
 *  */
