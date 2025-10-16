const arr = [1, 4, -1, "hong", "yen", null, NaN, "", , , , , 10];

function mixSort(arr) {
  const arrCopy = arr.flat(1);
  const stringArr = [];
  const numberArr = [];
  const falsyValuesArr = [];
  arrCopy.forEach((element) => {
    if (!element) {
      falsyValuesArr.push(element);
    } else if (typeof element === "string" && element !== "") {
      stringArr.push(element);
    } else {
      numberArr.push(element);
    }
  });
  return [
    ...numberArr.sort((a, b) => a - b),
    ...stringArr.sort(),
    ...falsyValuesArr,
  ];
}

console.log(mixSort(arr));
