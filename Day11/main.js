/**
1. Foreach
2. find
3. filter
4. map
5. some
6. every
7. sort
8. reduce

 */

const animals = ["dog", "cat", "mouse", "monkey"];
// console.log(JSON.stringify(animals));

// console.log(animals);
/**
 * ForEach callback:
 * input : item, index, array : phần tử cần cho vào
 * output: void : không thể dùng giá trị return
 */
// const result = animals.forEach((item, index, {}) => {
//   console.log(item);
//   console.log(index);
//   return "hrhrh";
// });
// console.log(result);

// Bài tập Foreach
/** in ra các loài vật dạng bảng với gọi ý đã cho
 */
// function printfAnimals(animals) {
//   let content = "<table border=1>";
//   content += "<tr><th>STT</th><th>Số thứ tụ</th></tr>";
//   Array.isArray(animals) &&
//     animals.forEach((animals, index) => {
//       content += `<tr>
//       <td>${index + 1}</td>
//       <td>${animals}</td>
//       </tr>`;
//     });
//   content += "</table>";
//   document.write(content);
// }
// printfAnimals(animals);
// console.log(document.write);

function printfAnimals(animals) {
  let content = "";
  Array.isArray(animals) &&
    animals.forEach((animals, index) => {
      content += `<table border =1>
      <tr>
        <th>Stt</th>
        <th>Name</th>
      </tr>
      <tr>
        <td>${index + 1}</td>
        <td>${animals}</td>
      </tr>
    </table>`;
    });
  document.write(content);
}
printfAnimals(animals);
