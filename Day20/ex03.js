const resFetch = fetch("https://dummyjson.com/comments")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });
const resFetch1 = fetch("https://dummyjson.com/posts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });
const resFetch2 = fetch("http://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });

// Lấy tất cả bất đồng bộ vào 1 biến
Promise.all([resFetch, resFetch1, resFetch2]).then((values) =>
  console.log(values)
);
// Lấy cái nhanh nhất trả về
Promise.race([resFetch, resFetch1, resFetch2]).then((values) =>
  console.log(values)
);
