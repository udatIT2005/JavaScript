/**
 * ! Những bài học liên tiếp về bất đồng bộ trong JavaScript
 * Asynchronous : bất đồng bộ
 * Callback (CallBack Hell)
 * Promise (Promise Hell)
 * Async/Await
 * Event Loop
 */

// Synchronous : đồng bộ
console.log("Dòng 1");
console.log("Dòng 2");
console.log("Dòng 3");

let fileDate = null;
console.log("B1 : Bắt đầu đọc file mất 3s...");

console.log("B2 : Giả lập đang đọc file");

const readFileData = () => {
  setTimeout(() => {
    console.log("b3 : Đọc gữ liệu xong gán vào dữ liệu vào biến fileData");
    fileDate = "trungdev - 1laap tinh vien";
  }, 3000);
};

readFileData();

console.log("Bước 4 : Kết thúc", fileDate);
