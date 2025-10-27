# LocalStorage là gì ?

- Là phần rất quan trọng trong web Storage API của JS giúp lưu trữ giữ liệu trên trình duyệt mà không cần sever

* Khoảng 5MB
* Không tự mất đi dù tắt máy, tắt trình duyệt
* Được quản lý theo domain, và quản lý theo
* Account browser : tài khoản trình duyệt
* Được dùng lưu các thông tin có tính lâu dài duy
* trì qua các phiên làm việc

- Lưu tên người dùng
  localStorage.setItem("username", "Dat");

- Lấy tên người dùng
  console.log(localStorage.getItem("username")); \* Dat

- Xóa tên người dùng
  localStorage.removeItem("username");

- Xóa tất cả dữ liệu
  localStorage.clear();

## Session storage là gì ?

Session : là một phiên làm việc

- SessionStorage
- Khoảng 5MB
- Được dọn dẹp khi tắt tab hoặc người dùng hết phiên làm việc
- Được quản lý theo tab
- Dùng để lưu dữ liệu có tính tạm thời của
- tab cho người dùng như các bước nhập form

- Lưu tên người dùng
  SessionStorage.setItem("username", "Dat");

- Lấy tên người dùng
  console.log(SessionStorage.getItem("username")); \* Dat

- Xóa tên người dùng
  SessionStorage.removeItem("username");

- Xóa tất cả dữ liệu
  SessionStorage.clear();
  --- Cách chạy file Js trên Cmnd : node + tên file

### JSON

JSON(Javascript Object Notaion) là 1 chuỗi có định dạng dữ liệu , dùng để trao đổi giữa client và server
JSON.stringify(arr) : chuyển object thành chuỗi và là deep copy
JSON.parse(arr) : chuyển chuỗi JSON thành object

#### FETCH là gì ?

là hàm tích hợp sẵn trong JS dùng để gọi dữ liệu từ server
