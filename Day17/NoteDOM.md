# DOM : là mô hình tài liệu dạng đối tượng có cấu trúc là cây thư mục (tree) và các thành phần chính gồm : root element, element , attribute, text

## Các thao tác của Element Node lấy phần tử của HTMl

- getElementById() // element/ null
- getElementsByTagName() // NodeList[]
- getElementsByClassName() //HTMLCollection
- getElementsByTagName() // HTMLCollection
- getAnimations() // []
- querySelector() // phần tử html đầu tiên thỏa mãn selecter // null
- querySelectorAll() // NodeList

## Thay đổi nội dung

- element.innerText : Gán văn bản
- element.innerHTML : Gán nội dung mới
- element. textContent : cũng là text

### Thao tác với Attibute (thuộc tính) node

- GetAtrribute : lấy thuộc tính
- SetAtrribute : Gán thuộc tính
- Remove : Xóa thuộc tính
- Has : Kiểm tra có thuộc tính không trả về boolean

#### Làm việc với classList và ClassName

- element.classList.add (); : Thêm
- element.classList.remove (); : Xóa
- element.classList.contains (); : Kiểm tra có tồn tại không
- element.classList.replace (); : Thay thế class

##### Tạo thêm xóa phần tử

- createElement() : Thêm element
- removeElement() : Xóa element
- appendchild() : Hiển thị lên màn hình

###### Event và styled trong DOM

- Click , change, input , submit , ...
- style
- csstext

###### Chú ý

- Node list : là một tập hợp danh sách các node DOM có thể element , text, comment
- Node list không mảng nhưng có thể truy cập giống mảng thông qua chỉ số của các phần tử
- Node list được trả về từ phương thức querySelectorAll.
-
- HTMLCollection : Bộ sưu tập HTMl ELement (chỉ chứa element, không chứa text node)
- HTMlCollection : getElementsByClassName(), getElementByTagName()
-
- Static Node : là 1 bản sao của DOM tại thời điểm mà nó được tạo ra .
- Khi DOM thay đổi (thêm , sửa, xóa , chỉnh sửa phần tử) static Node.List sẽ không tự động cập nhật
-
- Live node : là tập hợp mà tự động thay đổi khi DOM thay đổi

#### Quy tắc đặt tên

1. camelCase (con lạc đà)
2. PasscarCase viết hoa chữ cái đầu
3. Snake_case : con rắn
4. kebab-case : xiên thịt
