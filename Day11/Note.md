# Các phương thức của mảng

1. Foreach callback : Là phương thức của mảng dùng để duyệt qua từng phần tử của mảng và thực thi một hành động cho mỗi phần tử không trả về giá trị.
   -input : item , index, arr
   -out : không thể trả về giá trị return (void)

2. find : Tìm kiếm phần tử đầu tiên thỏa mãn điều kiện
   input : item, index, arr
   output : item / underfined
3. filter : Lọc phần tử trong mảng dựa vào điều kiện
4. map :Ánh xạ là phương thức của mảng dùng để duyệt qua từng phần tử của mảng và trả mảng mới sau khi biến đổi dữ liệu.

- CallBak
  -input : item , index, arr
  -output : trả về mảng mới đã biến đổi có độ dài bằng mảng ban đầu (có thể chain : là thêm các phương thức khác cùng )

5. some : Kiểm tra điều kiện trong mảng nếu trong mảng có 1 phần tử đúng trả về true nếu không có trả về false
6. every : Kiểm tra điều kiện trong mảng nếu trong mảng có 1 phần tử sai thì trả về false và đúng hết thì trả về true

7. sort : Dùng để sắp xếp mảng
   input : comferefN : (a, b) => (a-b)
   output : trả về 1 mảng đã sắp xếp nhưng thay đổi mảng gốc
8. toSorted : cũng sắp xếp mảng nhưng không thay đổi mảng gốc
9. reduce : Dùng để rút gọn tất cả các phần tử trong mảng trả về 1 biến tích lũy (accunulator)
   input : acc, cur, index, arr
   output : acc
   initivalValue : giá trị khởi tạo
10. filter : Lọc phần tử trong mảng dựa vào điều kiện
    input : item , index, arr
    output : item
