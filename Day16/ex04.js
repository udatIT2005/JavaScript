/**
 * 1. ClassList : lấy ra từng class
 * 2. ClassName : lấy tất cả class
 * 3. Replace : thay thế class sang class khác
 * 4. add () : thêm class
 * 5. contains() : kiểm tra class có tồn tại không
 * 6. remove() : Xóa
 * console.log(aElement.classList); xem các thứ về classlist
 *
 * Sau 5 giây trang web đổi sang dark mode
 *  (là class được định nghĩa sẵn trong css)
 */

setTimeout(() => {
  document.body.classList.add("dark-mode");
}, 5000);
