const check = document.getElementsByTagName("input")[0];
console.log(check);
check.addEventListener("click", function () {
  console.log({ input: event.target.checked });
  const checked = event.target.checked;
  if (checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  }
});
