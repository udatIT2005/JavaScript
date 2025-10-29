// Promise
let promise = new Promise((resovle, reject) => {
  console.log("Đang tải dữ liệu");
  setTimeout(() => {
    const success = true;
    if (success) {
      resovle("Tải dữ liệu thành công");
    } else {
      reject("Lỗi khi tải dữ liệu ");
    }
  }, 2000);
});

promise
  .then((data) => {
    console.log("Ra");
  })
  .catch((err) => {
    console.log("Lỗi");
  });

// Promise Hell
// getUser()
//   .then((user) => {
//     console.log("Lấy thông tin user:", user);
//     return getPosts(user.id);
//   })
//   .then((posts) => {
//     console.log("Lấy danh sách bài viết:", posts);
//     return getComments(posts[0].id);
//   })
//   .then((comments) => {
//     console.log("Lấy bình luận đầu tiên:", comments);
//     return saveToDatabase(comments);
//   })
//   .then((result) => {
//     console.log("Lưu vào DB thành công:", result);
//   })
//   .catch((err) => console.error("Có lỗi xảy ra:", err));
