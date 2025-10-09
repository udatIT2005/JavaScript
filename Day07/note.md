# Object là gì ?

- Là 1 kiểu dữ liệu để lưu trữ cặp key - value ( thuộc tính và giá trị)
- Nó như kiểu như một chiếc "tủ" có ngăn là (key) chứ món đồ (value)

## This : Chính là object

## For in dùng cho object

### Có 6 cách tạo ra object

1. Object literal
2. New Object
3. Constructor function
4. Class
5. Object.create
6. Factory function

## Bộ nhớ stack ( bộ nhớ ngăn xếp )

- bộ nhớ stack dùng để lưu trữ dữ liệu trực tiếp , bảo gồm : các giá trị nguyên thủy
- Tham chiếu tới hàm hoặc đối tượng trong heap
- Last In , first out : đưa và cuối và lấy ra đầu

## Bộ nhớ heap ( bộ nhớ động )

-
- Bộ nhớ động lưu dữ liệu reference (phức tạp )
- Chậm hơn stack nhưng chứa được dữ liệu lớn và phức tạp.

3. Minh hoạ dễ hiểu

🔹 Stack (ngăn kéo nhỏ, nhanh gọn):

Chỉ chứa giá trị nguyên thủy hoặc địa chỉ của object.

🔹 Heap (kho chứa đồ to):

Chứa object thật sự (nội dung).

Stack chỉ giữ cái “địa chỉ nhà” của object trong heap thôi.

## Cơ chế dọn dẹp bộ nhớ

1. Js quản lý bộ nhớ như thế nào ?
   Garbage Collector (GC) của JS sẽ tự động dọn dẹp
2. Garbage Collector là gì ?

- Là cơ chế tự động theo dõi vùng nhớ (heap)
- Khi một objectt không còn được tham chiếu nữa thì GC sẽ thu hồi để giải phóng bộ nhớ

* Thuật toán chính : Mark and Sweep

1. Mark (Đánh dấu)
2. Sweep (quét)

const myInfor = {
name: "Dat",
name: "Nmae",
hometowm: "Vạn kim ",
};
// Thêm
myInfor.address = " Hà NỘi";
// Sửa
myInfor.address = " Hồ CHí Minh";
// Xóa
delete myInfor.name;

// Thêm sửa xóa với Object

// Không thể áp dụng vòng lặp for cho object
// Dùng được for in với Object
// Dùng for of với Object
