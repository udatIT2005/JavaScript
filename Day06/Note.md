# Array (mảng) là gì ?

- Mảng là 1 tập hợp nhiều giá trị , lưu trong 1 biến duy nhất

- Kiểm tra kiểu dữ liệu là typeof

- Kiểm tra bao nhiêu ký tự Length

## Empty : rỗng không tồn tại nhưng vẫn chiếm không gian

## underfined : có ông trong mảng nhưng giá trị chưa xác định

## null : ô trong mảng có giá trị null

## length là số phần tử trong mảng

### Truthy và falsy trong Js

- Trong điều kiện if() không cần phải true/false, nó sẽ tự động ép kiểu

+) Ép kiểu chủ động là console.log(typeOf Number())
+) Ép kiểu tự độnng : Falsy gồm : false, null, underfine, NaN, " ", 0, -0 ; 0n
Truthy : tất cả các giá trị còn lại (số khác 0, string, array, object,...)

### Shallow copy (sao chép nông)

- Copy chỉ lớp ngoài cùng
- Nếu object/array có dữ liệu lồng bên trong (object trong object , mảng trong mảng) -> thì nó chỉ copy địa chỉ không thật sự copy.

### Deep copy ( sao chép sâu)

- Copy toàn bộ dữ liệu , kể cả object/ array lồng bên trong
- Bản gốc và bản copy hoàn toàn tách biệt

### So sánh reference type ( Kiểu dữ liệu)

- primitive type : kiểu dữ liệu nguyên thủy (number , string, boolean, null, underfile, bigInt, Symbol, )
  => Khi gán biến mới = biến cũ thì nó copy giá trị độc lập

- reference type : Kiểu dữ liệu tham chiếu (object, array, Date, function ,...)
  => Khi gán biến mới = biến cũ thì nó không copy dữ liệu mà chỉ chung 1 địa chỉ ô nhớ
  => Thay đổi thì biến kia thay đổi theo
