# Es module : sinh ra dùng để chia để trị và tách ra thành partent (những thành phần nhỏ nhất) và đây là tư duy trong lập trình

## Export(Xuất) - Cách xuất dữ liệu từ module

# as dùng để đổi tên và lấy tất cả các file export thì dùng \*

# 1. Export có tên (Named Export )

- Bạn có thể export nhiều thứ trong một file

# 2. Export mặc định (Default Export)

- Một file thì chỉ có 1 export default

# 3.Re-export

- Dùng để gom nhiều module vào một chỗ

### Import(Nhập) - Cách nhận dữ liệu từ module

1. Import có tên : Lấy tên biến export như thường
2. Import toàn bộ : \*
3. Improt default
4. Import kết hợp

#### Sử dụng Module trong html

<script type="module" src="main.js"></script>

##### Các khái niệm quan trọng

Scope của Module có scope riêng không ảnh hưởng tới global
scope // moduleA.js
const a = 10;

// main.js
import './moduleA.js';
console.log(a); // ❌ ReferenceError

###### Dynamic import
