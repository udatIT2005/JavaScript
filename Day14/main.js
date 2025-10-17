// const now = new Date();
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());

// console.log(Date());
// console.log(typeof now);
// console.log(now instanceof Date);

// const date = Date.now();
// console.log({ Date });
// console.log(date.get);

// Nhóm get - Lấy thông tin ngày giờ
// Nhóm set : thay đổi giá trị ngày giờ
// Nhóm to : Chuyển đổi sang chuỗi

// 1 giây = 1000 milliseconds
// 1 phút : 60 giây
// 1 tiếng = 60 phút

/** Lấy ngày tháng năm hiện tại ra màn hình với định dạng chuỗi sau với định dạng chuỗi sau
 * "hôm nay là ngày 17 tháng 10 năm 2025"
 */
// const days = new Date();

// document.write(
//   `Hom nay là ${days.getDate()} tháng ${
//     days.getMonth() + 1
//   } năm ${days.getFullYear()}`
// );

/** Viết function CountMinutesToNewYear() đến xem bao nhiêu
 * phút nữa thì đến tết dương lịch 2026 (01/01/2026 00:00:00) */
// function CountMinutesToNewYear() {
//   const now = new Date();
//   console.log(now);

//   const NewDate = new Date("2026-01-01");
//   console.log(NewDate.toLocaleDateString());
//   console.log((NewDate.getTime() - now) / (1000 * 60));
//   console.log(NewDate);
// }
// CountMinutesToNewYear();

/** Viết function countDayLive(birthday) đếm số ngày đã sống tính theo ngày sinh nhật của bạn
 *
 */
// Indechina Time : Mũi giờ đông dương
// +700: là mũi giờ Việt Nam

const now = new Date();
console.log(now);
document.write(now);

const bornYear = new Date("2005-11-28");
console.log(bornYear.toLocaleDateString());
const result = now.getTime() - bornYear.getTime();
console.log(result / (1000 * 60 * 60 * 24));

document.write(result);
