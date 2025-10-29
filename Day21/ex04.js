/**
 * ! Async/ await : Cho phép viết code bất đồng bộ nhìn như đồng bộ
 * await chỉ hoạt động trong hàm async
 * Cách chuyển từ callback, Promise sang async/await
 */

//exam :
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dữ liệu đã tải xong");
    }, 2000);
  });
}
async function fetchData() {
  console.log("Đang tải dữ liệu ");
  const result = await getData();
  console.log(result);
}

fetchData();
