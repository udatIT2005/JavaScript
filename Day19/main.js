console.log(localStorage);
console.log(sessionStorage);

// localStorage.setItem("name", "dat");
sessionStorage.getItem("age", 20);
// sessionStorage.getItem("Hihi", "Hiihi");

/**
 * LocalStorage
 * Khoảng 5MB
 * Không tự mất đi dù tắt máy, tắt trình duyệt
 * Được quản lý theo domain, và quản lý theo
 * Account browser : tài khoản trình duyệt
 * Được dùng lưu các thông tin có tính lâu dài duy
 * trì qua các phiên làm việc  
 * 
 * Lưu tên người dùng
localStorage.setItem("username", "Dat");

 * Lấy tên người dùng
console.log(localStorage.getItem("username"));  * Dat

 * Xóa tên người dùng
localStorage.removeItem("username");

 * Xóa tất cả dữ liệu
localStorage.clear();



 * SessionStorage 
 * Khoảng 5MB 
 * Được dọn dẹp khi tắt tab hoặc người dùng hết phiên làm việc
 * Được quản lý theo tab 
 * Dùng để lưu dữ liệu có tính tạm thời của 
 * tab cho người dùng như các bước nhập form 
 */
