const myFetch = new Promise((resovle, reject) => {
  console.log("la lap trinh vien web");

  resovle({
    message: "Đang kiếm tiền",
    how: 100000000,
  });
  //   reject("Hết tiền ");
});
myFetch
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((data) => {
    console.log("mua nhà");
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("kết thúc");
  });

// Đối với Promise thì có thể dùng chain nhưng ban đầu là
// then() chạy thành công , catch() khi lỗi
