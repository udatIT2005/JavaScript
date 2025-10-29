/**
 * ! CallBack : Là hàm được truyền vào hàm khác và gọi lại callback khi xong việc
 */

function sayHello(name, callback) {
  console.log("Xin chào" + name);
  callback();
}
sayHello("dat", function () {
  console.log("Học lập trình JS váng đầu");
});

/**
 * ! CallBack Hell: Là hàm Khi nhiều tác vụ bất đồng bộ lồng nhau
 */

console.log("Start");
setTimeout(() => {
  console.log("Lấy dữ liệu ");
  setTimeout(() => {
    console.log("xin tài liệu ");
    setTimeout(() => {
      console.log("Đã nhận ");
      setTimeout(() => {
        console.log("Xử lý lỗi ");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log("Hoàn thành ");
