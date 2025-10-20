/**
 * attribute : đối tượng
 */

const h2Element = document.getElementsByTagName("h2")[0];
console.log(h2Element.style);

console.log(Object.values(h2Element.style).length);

h2Element.style.backgroundColor = "yellow";
h2Element.style.color = " green";

//styled css
h2Element.style.cssText = `padding: 12px; margin: 30px; border-radius: 8px; background-color: red`;
