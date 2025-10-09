- Phương thức tĩnh của Object
  1. Object.keys(object) : Lấy ra 1 mảng key của object
  2. Object.values(object) : Lấy ra 1 mảng values của object
  3. Object.entries(object) : Lấy ra 1 mảng key và values của object
  4. Object.formEntries(Object.entries) : chuyển cặp key : values thành object
  5. Object.freeze : không thể thêm xóa giá trị thuộc tính

// Kiểm tra thời gian chạy thuật toán
console.time("countTime"); // bắt đầu đo thời gian
console.timeEnd("countTime"); // Kết thúc khoảng thời gian
