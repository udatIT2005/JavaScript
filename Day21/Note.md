<!-- Asynchronous : bất đồng bộ -->

# Callback là hàm được truyền vào hàm khác như 1 đối số, và được gọi lại sau khi công việc kia hoàn thành.

# CallBack Hell: callback bên trong nhau, code sẽ rối như mớ bòng bong — đó gọi là callback hell.

## Promise : sinh ra để giải quyết callback hell

## Promise Hell : Nếu dùng quá nhiều .then() nối tiếp nhau, code lại rối như callback hell

### Async/Await : Async/Await sinh ra để viết code bất đồng bộ mà trông như đồng bộ

#### Event Loop : Event Loop là “bộ não” của JavaScript bất đồng bộ.

JS chỉ có 1 luồng chính (single-thread), nên event loop giúp:

Chạy code tuần tự

Khi gặp việc bất đồng bộ (như setTimeout, fetch), JS tạm gác lại, chờ kết quả xong rồi đưa vào hàng đợi (queue)

Event Loop sẽ lấy từng tác vụ trong queue để chạy tiếp khi luồng chính rảnh.

 <!-- Synchronous : đồng bộ -->
