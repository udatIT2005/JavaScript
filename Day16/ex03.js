const h1Element = document.getElementsByTagName("h1")[0];

console.log(h1Element.className);

console.log(h1Element.className.split(" "));
console.log(h1Element.classList); //iterable

h1Element.classList.replace("title", "title-01");

console.log(h1Element.classList);
