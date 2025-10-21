/**
 * Bài 1 : <h1 id="title">Xin chào!</h1>
 * <button id="btn">Đổi lời chào</button>
 *
 * Bài 2 : 🧩 Bài 2: Thêm phần tử mới
<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
</ul>
<button id="add">Thêm JavaScript</button>
👉 Khi bấm nút, thêm 1 <li> mới có nội dung là “JavaScript”.

Bài 3 : 🧩 Bài 3: Xóa phần tử

Tạo 3 nút: “Thêm”, “Xóa cuối”, “Xóa tất cả”.

Dùng appendChild, removeChild, innerHTML = "" để làm.

 Bài 4 : <p id="para">Đoạn văn này sẽ đổi màu sau khi bấm nút</p>
<button id="changeColor">Đổi màu</button>

Bài 5 : Tạo 1 <input> và 1 <p>.

Khi người dùng gõ trong ô input, cập nhật\
 nội dung của <p> theo từng ký tự họ nhập.
 
Bài 6 : 🧩 Bài 6: Dark Mode (nâng cao)

Tạo CSS class .dark { background: black; color: white; }

Khi bấm nút “Dark Mode”, thêm class đó cho <body>.

Khi bấm lại, bỏ class đó ra.

Bài tập về BOM
🧩 Bài 1: Hiển thị thông tin trình duyệt

In ra:

window.innerWidth, window.innerHeight

navigator.userAgent

location.href

Dạng hiển thị:

<p>Chiều rộng cửa sổ: ...</p>
<p>Trình duyệt: ...</p>
<p>Địa chỉ hiện tại: ...</p>

Bài 2: Đồng hồ thời gian thực

Dùng setInterval() để cập nhật thời gian mỗi giây.

Hiển thị giờ hiện tại theo dạng: HH:MM:SS.

🧩 Bài 3: Đếm ngược tự động

Tạo đồng hồ đếm ngược từ 10 → 0.

Khi về 0, hiện alert: “Hết giờ!”

🧩 Bài 4: Chuyển trang sau vài giây
setTimeout(() => {
  location.href = "https://www.google.com";
}, 5000);


👉 Làm cho trang tự chuyển sau 5 giây, và hiển thị đồng hồ đếm “Sẽ chuyển trang sau: X giây”.

🧩 Bài 5: Cửa sổ popup

Khi nhấn nút “Mở cửa sổ”, dùng window.open() mở 1 cửa sổ mới.

Khi nhấn “Đóng cửa sổ”, dùng close().

🎯 BONUS: Dự án nhỏ kết hợp DOM + BOM

Tạo ứng dụng đồng hồ đếm ngược có giao diện:

Input: số giây.

Nút “Bắt đầu”.

Hiển thị số giây còn lại.

Khi hết giờ, đổi màu nền trang và hiện thông báo.
*/
