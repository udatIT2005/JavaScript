fetch("https://dummyjson.com/products")
  .then((res) => {
    // Then đầu tiên là chuyển kết quả thành JSON(Là 1 chuỗi định dạng dùng để trao đổi giữa client và sever)
    console.log(res);
    console.log(typeof res);
    return res.json();
  })
  .then((data) => {
    // In ra dữ liêu ra console
    console.log(data);
  })
  .catch((err) => console.log(err)); // Bắt lỗi

fetch("https://dummyjson.com/carts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.write(JSON.stringify(data));
  })
  .catch((error) => {
    console.log(error);
  });
