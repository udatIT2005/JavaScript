/**
 * Element
 * getElementById() // element/ null
 * getElementsByTagName() // NodeList[]
 * getElementsByClassName() //HTMLCollection
 * getElementsByTagName() // HTMLCollection
 * getAnimations() // []
 * querySelector() // phần tử html đầu tiên thỏa mãn selecter // null
 * querySelectorAll() // NodeList
 *
 * Node list : là một tập hợp danh sách các node DOM có thể element , text, comment
 * Node list không mảng nhưng có thể truy cập giống mảng thông qua chỉ số của các phần tử \
 * Node list được trả về từ phương thức querySelectorAll.
 *
 * HTMLCollection : Bộ sưu tập HTMl ELement (chỉ chứa element, không chứa text node)
 * HTMlCollection : getElementsByClassName(), getElementByTagName()
 *
 * Static Node : là 1 bản sao của DOM tại thời điểm mà nó được tạo ra .
 * Khi DOM thay đổi (thêm , sửa, xóa , chỉnh sửa phần tử) static Node.List sẽ không tự động cập nhật
 *
 * Live node : là tập hợp mà tự động thay đổi khi DOM thay đổi
 */

// console.log(document.getElementById("list-language"));
// console.log(document.getElementsByName("languages"));
// console.log(document.getElementsByClassName("languages")[0]);
// console.log(document.getElementsByTagName("ol")[0]);
// console.log(document.getAnimations("ol"));
// console.log(document.querySelector("ol.languages"));
// console.log(document.querySelectorAll("list-language"));

const olElement = document.getElementsByClassName("languages")[0];
console.log({ olElement });

console.log(olElement.children);

for (let i = 0; i < olElement.length; i++) {
  console.log(olElement.children[i]);
}

console.log(Array.isArray(olElement));
