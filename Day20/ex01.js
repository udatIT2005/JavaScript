const result = fetch("https://dummyjson.com/carts");
console.log(result);
console.log({ Promise });

const myFetch = new Promise((resolve, reject) => {
  // Nếu thành công
  resolve("thành công");
  // Nếu thất bại
  //   reject("thất bại");
});
myFetch.then((data) => console.log(data)).catch((err) => console.log(err));

Promise.prototype.then;
Promise.prototype.catch;
Promise.prototype.finally;

/** Khối code được thực hiện
 * then : sau đó
 * catch : bắt lấy : chỉ chạy được 1 lần dùng lần 2 là không chạy vào
 * finally : cuối cùng : luôn gọi cuối cùng và theo quy ước
 */

/**
 * 3 Cách sử lý bất đồng bộ
 * 1 : Callback
 * 2 : Promise
 * 3 : aysn/ await
 */

/**
 * pending : đang thực hiện
 * fulfilled : thành công
 * rejected : thất bại
 *  */
