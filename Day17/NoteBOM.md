# BOM là Browser Object Model là cách JS làm việc với tình duyệt

## Đối tượng window

- alert
- comfirm
- prompt
- innerHeight : Chiều dài của cửa sổ
- inerWidth : Chiều rộng của cửa sổ
- open : Mở cửa sổ
- close : đóng cửa sổ

* ex : window.alert("Hello wordl")

### Đối tượng Location

- href : url web
- hostname : tên miền domain name
- pathname : đường dẫn file
- reload() : tải lại tang

#### Đối tượng navigator

- navigator.userAgent : Chuỗi thông tin trình duyệt
- navigator.language : Ngôn ngữ
- navigator.onLine : Kiểm tra có mạng không (true/false)
- navigator.geolocation.getCurrentPosition() : Lấy vị trí người dùng

##### Đối tượng history

- history.back(); : Quay lại trang trước
- history.forward(): Đi tới trang sau
- history.go(-1); : Giống back
- history.go(1); : Giống forward

###### Đối tượng setTimeout, setInterval. clearTimeout, clearInterval

###### Đối tượng screen

- screen.width
- screen.height
- screen.availWidth
- screen.availHeight
- screen.colorDepth
