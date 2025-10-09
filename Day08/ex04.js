function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// Phương thức tĩnh
Book.showBook = function (book) {
  console.log(`Ten sách là ${book.title}`);
};
const obj = new Book("Học lập trình không khó", "dat", 2025);
const obj1 = {
  title: "Connan",
};
Book.showBook(obj);
Book.showBook(obj1);
